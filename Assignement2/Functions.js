function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Durai");

//Task 2: Arrow Function
let double = (a) => (a*a);
console.log(`The doubled values is ${double(18)}`);

//Task 3: Anonymous Function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => console.log("fetching data"), 3000);
    callback;
}

function userDetails(name, age) {
    console.log(`The name of the user is ${name} and his age is ${age}`)
}
getUserData(userDetails("Durai", 40));