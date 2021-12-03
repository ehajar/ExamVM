const express = require('express')
const router = express.Router();
router.use(express.json())
const controller = require('../controllers/vmController')

const path = "/api/VM";

router.get(path + '/getAll', controller.getAll);
router.post(path + '/update/:id', controller.updateVM);
router.delete(path + '/delete/:id', controller.deleteVM);
router.post(path + '/create', controller.createVM);
router.get(path + '/change/:id', controller.changeVMStatus);

module.exports = router;
