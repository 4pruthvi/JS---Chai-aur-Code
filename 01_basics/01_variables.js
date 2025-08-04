const accountId = 47595
let accountEmail = "pruthvi@google.com"
var accountPassword = "1234"
accountCity = "Latur"  //we can also asign variable like this but don't use
let accountState;

/*accountId = 2. it is not allowed to change
its value because we have used const.*/

accountEmail = "sawant@google.com"
accountPassword = "548712"
accountCity = "Pune"

console.log(accountId);

/*prefer not to use var because issue
in bolck scope and functional scope */

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])