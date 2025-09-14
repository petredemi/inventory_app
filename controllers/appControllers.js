//const {body, validationResult} = require('express-validator')
const db = require('../db/queries');

exports.firstPage = async (req, res) => {
        let x = await db.getManufacturers()
   await res.render('index', {
        rows: x
    })
}
exports.newManufacturer = async (req, res) => {
    await res.render('form')
}
exports.newManufacturerPost = async (req, res) => {
            let {manufacturer} = await req.body;
            let {country} = await req.body;
            let {continent} = await req.body;
            let check = await db.getCheck(manufacturer)
          //  console.log(check)
            if(check == undefined){
                await db.newManufacturerAdd(manufacturer, country, continent)
                await res.redirect('/')
               
            }else{
                await res.redirect('/')
            }
           
}
exports.newBrandModel = async (req, res) => {
    let idBrand = req.params.id
    let model = await db.getManufacturer(idBrand)
    console.log(model[0].manufacturer)
    await res.render('addmodels',
        {
            id: idBrand,
            model: model[0].manufacturer
        }
    )
}
exports.newBrandModelPost = async (req, res) => {
            let idBrand = await req.params.id
            let obj = await db.getManufacturer(idBrand)
            let x = obj[0].manufacturer
            let brand = x;
            let {model} = await req.body;
            let {type} = await req.body;
            let {seats} = await req.body;
            await db.newModel( brand, model, type, seats)
            res.redirect(`/${idBrand}`)
}
exports.getBrandModels = async (req, res) => {
    const brandId = req.params.id;
    let obj = await db.getManufacturer(brandId)
   // console.log(brandId)
   //console.log(brandId)
   // console.log(obj)
    let carBrand = await db.getModels(obj[0].manufacturer)
    //console.log(brandId)
    await  res.render('brand-models', {
            manufacturer: await obj[0].manufacturer,
            idBrand: brandId,
            brands:  carBrand
    })
}
exports.deleteManufacturer = async (req, res) => {
    //messageStorage.deleteMessage(req.params.id)
    await db.deleteBrand(req.params.id)
    console.log(req.params.id)
    res.redirect('/')
}
