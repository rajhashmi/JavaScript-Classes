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