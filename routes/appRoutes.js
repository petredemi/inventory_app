const { Router } = require("express");
const controllerInventory = require("../controllers/appControllers");
const routerInventory = Router();

routerInventory.get('/', controllerInventory.firstPage)
routerInventory.get ('/newmanufacturer', controllerInventory.newManufacturer)
routerInventory.post ('/newmanufacturer', controllerInventory.newManufacturerPost)
routerInventory.get('/:id', controllerInventory.getBrandModels)
routerInventory.get('/:id/model', controllerInventory.newBrandModel)
routerInventory.post('/:id/model', controllerInventory.newBrandModelPost)
routerInventory.get('/:id/updatemodel', controllerInventory.updateBrandModelGet)
routerInventory.post('/:id/updatemodel', controllerInventory.updateBrandModelPost)
routerInventory.post('/:id/delete', controllerInventory.deleteManufacturer)
routerInventory.post('/:id/deletemodel', controllerInventory.deleteModelPost)

module.exports = routerInventory;