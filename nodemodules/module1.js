function myfunction(){
    console.log("Module function called");
}
var myString="String";

module.exports.myfunction=myfunction;
module.exports.myString=myString;