const express = require('express');
const router = express.Router();
const cntrlothers=require('../controllers/others');
const ctrllocations =require('../controllers/locations');
/* GET home page. */
router.get('/',ctrllocations.homelist);
router.get('/locations',ctrllocations.LocationInfo);
router.get('/locations/review/new',ctrllocations.addReview);
router.get('/about',cntrlothers.about);
module.exports=router;

