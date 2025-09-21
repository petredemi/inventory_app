//const {body, validationResult} = require('express-validator')
const db = require('../db/queries');

exports.firstPage = async (req, res) => {
        let x = await db.getManufacturers()
        let y = await db.countCars()
        let z = await db.countModels()
        let v = []
       // console.log(x)
        let color = ['#42b883','#0092ca', '#a7bcb9', '#eef2e2','#455d7a', '#f1b963' ]
        let yy = color.length;
     //   let b;
       
        x.forEach((item, index) => {
            let b = index - yy;
            v.push(item.manufacturer)
            if ( index - yy  == color.length){
                yy = yy + color.length
            }
        if (index > color.length -1){
            console.log(b)
            item.col = color[b]
        }else{
            item.col = color[index]
        }

        })
        for (let i = 0; i < v.length; i++){
            let xx = await db.countBrandModels(v[i])
            x[i].count = xx[0].count
        }
        
   await res.render('index', {
        rows: x,
        countBrands: y[0].count,
        countModels: z[0].count,
    })
}
exports.newManufacturer = async (req, res) => {
    await res.render('form')
}
exports.newManufacturerPost = async (req, res) => {
            let {manufacturer, country, continent} = await req.body;
            let check = await db.getCheck(manufacturer)
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
            let {model, type, seats} = req.body;
            await db.newModel( brand, model, type, seats)
            res.redirect(`/${idBrand}`)
}
exports.getBrandModels = async (req, res) => {
    let brandId = await req.params.id;
    let ob = await db.getManufacturer(brandId)
    let x = await db.countBrandModels(ob[0].manufacturer)
    let carBrand = await db.getModels(ob[0].manufacturer)
    await  res.render('brand-models', {
            manufacturer: await ob[0].manufacturer,
            idBrand: brandId,
            brands:  carBrand,
            nrmodels: x[0].count
    })
}
exports.updateBrandModelGet = async (req, res) => {
    let indx = req.params.id;
    let model = await db.getModeltoUpdate(indx)
    await res.render('updatemodel', {
        brand: model[0]
    })
}
exports.updateBrandModelPost = async (req, res) => {
    let id = req.params.id;
    let { model, type, seats} = await req.body;
    let getmodel = await db.getModeltoUpdate(id)
    let indmanuf = await db.getCheck(getmodel[0].brand)
    await db.postModelUpdated(model, type, seats, id);
    res.redirect(`/${indmanuf.id}`)
} 
exports.deleteManufacturer = async (req, res) => {
    let x = req.params.id;
    let brand = await db.getManufacturer(x)
    await db.deleteRecordsModel(brand[0].manufacturer)
    await db.deleteBrand(x)
    res.redirect('/')
}
exports.deleteModelPost = async (req, res, next) => {
    let x = await req.params.id
    let getmodel = await db.getModeltoUpdate(x)
    let indmanuf = await db.getCheck(getmodel[0].brand)
    await db.deleteModel(x)
    res.redirect(`/${indmanuf.id}`)

}