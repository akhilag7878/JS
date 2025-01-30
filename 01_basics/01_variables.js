const accountId = 24849
let accountEmail = "akhil8120110218@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //this way is allowed not do this
let accountState;



//accountId = 2 Not allowed
accountEmail ="akhil@gmail.com"
accountPassword = "54321"
accountCity = "Raipur"  
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])