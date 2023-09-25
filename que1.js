// Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

function toUppercase(){
 let str = "webmaster";
 console.log(str.charAt(0).toUpperCase() + str.slice(1));
}
toUppercase();