// Same keys and values
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

// ES2015
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }

}


// Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}


// Object Methods
// var instructor2 = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// ES2015
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!"
  },  
  sayBye() {
    return [firstName] + " says bye!";
  }
}


// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"


// create createAnimal function that accepts 3 args: (species, verb, noise)
function createAnimal(species, verb, noise) {
  // return object:
  return {  
    // return species
    species,
    // return verb function [verb] function {return verb}
    [verb]() {
      return noise;
    },
  }
}



