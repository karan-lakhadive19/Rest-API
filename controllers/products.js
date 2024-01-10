const Product = require("../model/model")

const getProducts = async(req, res)=> {

    const {company} = req.query
    const {name} = req.query
    const {featured} = req.query
    const {sort} = req.query
    const {select} = req.query

    const queryObject = {}

    if(company) {
        queryObject.company = company
        console.log(queryObject)
    }

    if(name) {
        queryObject.name = {$regex: name, $options: 'i'}
    }

    if(featured) {
        queryObject.featured = featured
        console.log(queryObject)
    } 

    let apiData = Product.find(queryObject)

    if(sort) {
        let sortFix = sort.replace(",", " ")
        apiData = apiData.sort(sortFix)
    }

    if(select) {
        // let selectFix = select.replace(",", " ")
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    const Products = await apiData.sort(sort)

    res.status(200).json({Products})
}

const getTesting = async(req, res)=> {
    const Products = await Product.find(req.query).select("name company")
    console.log(req.query)

    res.status(200).json({Products})
}

module.exports = {getProducts, getTesting}