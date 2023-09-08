/*GET 'about' page*/
const about=(req,res) =>{
    res.render('index',{title:'Quiz'});
};
module.exports={
    about
};