
module.exports.getdate  = getdate; 
function getdate(){

var today = new Date();
var options =
{
   weekday  : "long",
   month : "long",
   day : "numeric"
};
return  today.toLocaleDateString("hi-IN",options)
}

module.exports.getday = getday; 
function getday(){

var today = new Date();
var options =
{
   weekday  : "long",
};
return today.toLocaleDateString("hi-IN",options)
}


