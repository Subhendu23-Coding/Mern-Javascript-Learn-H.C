const accountId = 234567
let accountEmail = "subho@.com";
var accountPassword = "123pcs";
let accountCity = "Kolkata"; 
let accountState = "West Bengal";    // all code use this right

// accountId (Only One allowed)
// accountId = 2; (not allowed)

accountEmail = "google@.com";
accountPassword = "pcs123";
accountCity = "Bengaluru";   //..............x.....all this is a bad used
accountState = "K.T";

// console.log(accountId);

/*
Prefer not to use (var)
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);