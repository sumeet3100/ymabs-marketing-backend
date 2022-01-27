const express = require('express');
const router = express.Router();
const homeController = require("../controller/homeController");

router.get('/clinical_trial', homeController.clinicalTrials);
router.get('/omburtamab_pub', homeController.omburtamabPublications);
router.get('/pipeline_pub', homeController.pipelinePublications);
router.get('/publication', homeController.publication);

module.exports = router;