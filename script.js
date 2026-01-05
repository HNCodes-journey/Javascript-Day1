//var let const
//Declaration & Initialization

var a; //declare karna
var a = 12; // declare & initialize karna

/*var se created variable ....window ma add hota ha, function scopped hota ha,It can be re-declared means You can declare again with same name and there will be no error*/

//Scope (Global , block , Functional)

// -> global means declared any where but not in curlly braces e.g : var a = 12;
/*-> block means it should be in curlly braces , but var not give respect to block codes { var a = 12;*/
/*  -> functional means it can be used in function  e.g : function abcd(){
if(true){
var a = 12;
}
}
*/

let a;
let a = 12; /* more secured than var , it gives your error when you declare it again with same name */




const a = 14; /* value can't be changed in const, constant for rest of the code*/



