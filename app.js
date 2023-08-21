// Why classes 
//  classes is part of OOP this is coding methodology or we can say it's a style  of coding / pattern 

// this style make our code more reusealbe and modular 
//  well Organizwd Code
//  Easier to debug


//  classes is like BluePrint.
// Imagine we have BluePrint of house and we are making 10 house with one bluePrint so 10 house have same features Eg:-> Structure, windows etc.

//  so we can say we are reusing this BluePrint to create this same house or we can say we are reusing BluePrint to build same features in 10 house


//  so this BLUEPRINT is called :-> CLASS
//  and house we called :-> OBJECT

// ========================================== Classes ========================================

// class :->

// class In JavaScript classes, there are two essential components: properties for storing data and methods for performing actions."

//  let's make our First class 

class myFirstClass{
    message(){
        return "this is my first class"
    }
}
let myClass = new myFirstClass();
console.log(myClass.message());

//  Congratulation you created your first class 👏🎉🎊

class calculation{
    sum(num1, num2){
        return num1 + num2
    }
}
let sumInstance = new calculation();
let sum = sumInstance.sum(5,5)
console.log(sum);


class information{
    constructor(name,age){
        this.myName = name
        this.age = age
    }
    myInfo(){
        console.log(`Hello my Name is ${this.myName} and I am ${this.age}`)
    }
}
let myInformation = new information("shahid hashmi", 19);
myInformation.myInfo()

//  getter ans setter

class getter{
    constructor(name){
        this.name = name;
    }
    get upperCase(){ // get is method but we are using like its a property 
        return this.name.toUpperCase()
    }
}
let getting = new getter("shahid");
console.log(getting.upperCase); // here you can see 
console.log(getting);


//  ==================================================== setter =====================================
class Setter {
    constructor(name) {
        this._name = name;
    }

    set changeName(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }
}

let nameOfMine = new Setter("shahid");
console.log(nameOfMine.name); // Logs: "shahid"
nameOfMine.changeName = "hashmi"; // Using the setter
console.log(nameOfMine.name); // Logs: "hashmi"
console.log(nameOfMine);


// ========================================== Static ==========================================

// 

class Car {
    static numberOfCars = 0;

    constructor(color) {
        this.color = color;
        Car.numberOfCars++; // Applying the rule for the whole class
    }
}

const redCar = new Car("red");
const blueCar = new Car("blue");

console.log(Car.numberOfCars); // You can count all cars created using the class!

// ============================================= Inheritance in class  ========================

// we use extend to Inheritance from A to B so a is also know as Parent and Base Class and B is Child and Derived Class

class HowManyCarCreated extends Car{
    constructor(name){
        super(name)// Call the constructor of the parent class (Car)
        // The constructor of Car already increments numberOfCars
    }
}
// let gg = new HowManyCarCreated()
console.log(HowManyCarCreated.numberOfCars);

// Eg.2 : ->
class Info {
    constructor(firstName, lastName) {
        this.fName = firstName;
        this.sName = lastName;
    }
    
    information() {
        console.log(`My firstName is ${this.fName}, my last name is ${this.sName}`);
    }
}

class AddMoreInfo extends Info {
    constructor(fName, sName) {
        super(fName, sName); // Call the parent class constructor
        this.F = fName;
        this.S = sName;
    }
    
    infor() {
        console.log(`This is ${this.F}, ${this.S}`);
        super.information(); // Call the information method of the parent class
    }
}

let a = new AddMoreInfo("Shahid", "Hashmi");
a.infor();


