const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/hospitals', Controller.gethospitals);
router.get('/drugcatagery', Controller.get_drug_catagory);
router.get('/languages', Controller.get_languages);
router.get('/fields', Controller.get_medical_fields);
router.get('/doses', Controller.get_dose);
router.get('/frequency', Controller.get_medicine_frequency);
router.get('/prandial', Controller.get_medicine_prandial);
router.get('/timing', Controller.get_medicine_timing);
router.get('/status', Controller.get_status);

router.get('/doctors', Controller.get_doctors);
router.get('/rxgroups',Controller.get_rx_groups)
router.get('/rxassociations',Controller.get_associations)
router.get('/prescription',Controller.get_prescription)
router.get('/drugs',Controller.get_drugs)

router.post('/addrxgroups', Controller. post_rx_groups);
router.post('/addrxassociation', Controller. post_rx_associations);
router.post('/addDrugs', Controller.post_drugs);
router.post('/addprescription', Controller.post_presription);

module.exports = router;
