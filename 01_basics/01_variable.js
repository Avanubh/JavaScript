const accountId = 144553
let accountEmail = "hanubhav@gmail.com"
var accountPassword = "12345"
accountCity = "khagaria"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ak@ak.com"
accountPassword = "21212121"
accountCity = "Begusarai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])