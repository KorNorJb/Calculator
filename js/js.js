function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
}
function clean() {
	document.form.textview.value = "";
}
function back() {
	let exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length - 1);
}
function equal() {
	let exp = document.form.textview.value;
	if (exp) {
		document.form.textview.value = eval(exp);
	}
}
// function myfunc(b, c) {
// 	let  a = " Hello " + b + "-LOХ"
// 	alert(a+b+c);
// }
// myfunc("Kris", ":)");
// function ostatok(){
// 	a1 = prompt("Введите числоооооооо:")
// 	if (a1 % 2 == 0) {
// 		alert("Четное")
// 	} 
// 	else{
// 		alert("Нечет")
// 	}
// }
// ostatok();
// let obj = {
// 	myName: "Jhon",
// 	age: 36,
// 	serName:"neJhon"
// }
// let g,f,d;
// g = 3, f = 7, d = obj;
// obj.NewKey = "123";
// d.newKey2 = "1234"
// delete d.newKey2;
// obj.age = 18
// console.table(obj)
// console.table(obj.age)
// let otv=1;
// for (let i = 1; i <= 5; i++) {
// 	otv = otv * i
// }
// console.log(otv)\
let arr = [1,2,3, 4, 5]
let lexa = 0
for (let i = 0; i <= arr.length - 1; i++) {
	lexa = lexa + arr[i]
	console.log(lexa)
}
console.log(arr.length)

