
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;

  if (nameToShow === undefined) {
    nameToShow = 'World';
  }

  console.log("NAME IS: ", nameToShow);
  console.log(req.params)

  res.render('index', {
  	'name': nameToShow,
  });
};
