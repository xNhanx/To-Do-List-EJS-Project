var x = {
  name: "vlad",
};
function iAmNhan(whatever) {
  whatever.name = "Nhan";
}
console.log(x);

iAmNhan(x);

console.log(x);

function changeWord(whatever) {
  whatever = "Bye";
}

var bye = "Hello";

console.log(bye);

changeWord(bye);

console.log(bye);
