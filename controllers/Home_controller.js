module.exports.home = function(req, res){
    return res.end("<h1> This  is home </h1");
}
module.exports.about = function(req, res){
    return res.end("<h1> This is about </h1");
}
module.exports.contact = function(req,res){
    return res.end("<h1> this is contact </h1>");
}