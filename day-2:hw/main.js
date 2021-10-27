
//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/

// Create our Person Class here
class Person{
    constructor(name,age,hobbies=[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies =[];
    }




// Create the printInfo method


    printInfo(){
    return `Name; ${this.name}\n Age: ${this.age} \n Hobbies: ${this.hobbies}`
    }
// Create another function for the addHobbies method that takes one parameter
    addHobbies(input){
        if ( input != this.hobbies)
        this.hobbies.push(input)
    }
// Adding to the hbbies array...

}
let bob = new Person('Bob', 20,  );
console.log(bob.addHobbies())
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (str) =>{
    return new Promise ((resolve,reject)=>{
        if ( str.length  > 10){
            resolve(str)
        }else { 
            reject(str)
        }
    })
}
checkString('youlolololm')
.then( (resolve) => {
    console.log(`${resolve} is a Big Word`)
})
.catch((reject) =>{
    console.log(`${reject} is a small number`)

})

function checkString(str){
    if ( str.length  > 10){
        console.log("Big Word")
    }else{
        console.log("Small number")
    }
}
checkString('yous')

https://www.codewars.com/kata/560ecf0cb040de130e00007d/train/javascript
function orderOperations () {
    return( 2 + 2) *( 2 + 2) * 2
  }

  https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript
function peopleWithAgeDrink(old) {
if (old <14){
return 'drink toddy';
}if (old <18){
    return 'drink coke';
}if  (old < 21){
    return 'drink beer'
    }if (old >= 21){
    return 'drink whisky'
    }
};