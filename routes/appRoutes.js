const { Router } = require("express");
const controllerInventory = require("../controllers/appControllers");
const routerInventory = Router();

routerInventory.get('/', controllerInventory.firstPage)
routerInventory.get ('/newmanufacturer', controllerInventory.newManufacturer)
routerInventory.post ('/newmanufacturer', controllerInventory.newManufacturerPost)
routerInventory.get('/:id', controllerInventory.getBrandModels)
routerInventory.get('/:id/model', controllerInventory.newBrandModel)
routerInventory.post('/:id/model', controllerInventory.newBrandModelPost)
routerInventory.post('/:id/delete', controllerInventory.deleteManufacturer)

//routerInventory.post('/:brandId', controllerInventory.newBrandModelPost)
//routerInventory.post('/brand', controllerInventory.newBrandModelPost)
//routerMessage.post('/new', controllerMessage.newMessagePost)
//routerMessage.get ('/:messageId', controllerMessage.getMessageGet)
//routerMessage.post('/:id/delete', controllerMessage.deleteMessagePost)

module.exports = routerInventory;