
module.exports.home = function(req, res){
  // console.log(req.cookies);
  return res.render('home',{
   title:"Home"
  });
  
}


// Module.export.actionName = funection(req, res)