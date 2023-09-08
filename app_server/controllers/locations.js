/*GET 'home' page */
const homelist=(req,res) =>{
    res.render('index',{title:'Home'});
};
/*GET 'Location info' page */
const LocationInfo=(req,res) =>{
    res.render('index',{title:'locationinfo'});
};
/*GET 'Add review' page */
const addReview=(req,res) =>{
    res.render('index',{title:'Add review'});
};
module.exports={
    homelist,
    LocationInfo,
    addReview
};
