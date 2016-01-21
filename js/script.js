// will return false, is not a palindrome
// var isPalindrome = function(userString){
// // will return true, first char = last char
//   for(var i = 0; i < userString.length/2; i++){
//     if (userString[i] !== userString[userString.length-1]) {
//       return false;
//     } else {
//
//     }
//   }
//   if (userString[0] === userString[userString.length-1]) {
//     return true;
//   } else {
//     return false;
//   }
// }
var isPalindrome = function(userString){
  for(var i = 0; i < userString.length/2; i++){
    if (userString[i] !== userString[userString.length-1-i]) {
      return false;
    }
  }
  return true;
}
