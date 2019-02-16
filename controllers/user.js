
exports.show_login = function(req, res, next){
    res.render('user/login');
}

exports.show_signup = function(req, res, next){
    res.render('user/signup');    
}