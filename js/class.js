// classes
// oop
class Person {
	constructor(_name, _surname, _height) {
		this.name = _name;
		this.height = _height;
		this.surname = _surname;

		// this.fullname = `${this.name}  ${this.surname}`;
	}

	fullname() {
		return `${this.name} ${this.surname}`;
	}
}

class Rectangle {
	constructor(_width, _height) {
		this.width = _width;
		this.height = _height;
	}

	area() {
		return `the area is ${this.width * this.height}`;
	}
}

class User {
	constructor(_firstname, _surname, _age) {
		this.firstname = _firstname;
		this.surname = _surname;
		this.age = _age;
	}
}

class Admin extends User {
	constructor(_firstname, _surname, _age) {
		super(_firstname, _surname, _age);
	}
}

let admin1 = new Admin("Rafiu", "Yusuf", 23);
console.log(admin1.firstname);

// instantiate
// rec1 = new Rectangle(5, 4);
// rec2 = new Rectangle(10, 20);
// console.log(rec1.area());
// console.log(rec2.area());

// let jide = new Person("Jide", "Ayeni", 6);
// let tobi = new Person("Tobi", "Akinbanjo", 4);
// console.log(jide.fullname());
// console.log(tobi.fullname());

// class Car {}
