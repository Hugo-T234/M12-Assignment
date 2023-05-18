// STEP 1
// class Cat {
//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }

// function Dog() {
//     this.a = 'a';
//     this.b = 'b';
//     this.c = 'c';
// }

// STEP 2

// const cat = new Cat();
// const dog = function(){};

// STEP 3

// class Animal {
//     constructor(a, b, c) {
//         this.a = 'a';
//         this.b = 'b';
//         this.c = 'c';
//         console.log("The Animal has been created");
//     }
// }

// STEP 4

// class Animal {
//     constructor(a, b, c) {
//         this.a = 'a';
//         this.b = 'b';
//         this.c = 'c';
//         console.log(`The Animal has ${this.a}, ${this.b}, and ${this.c}`);
//     }
// }

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }

// const animal = new Animal("Cat","Tabby","Orange","6","6");

// for (let x in animal){
//     console.log(x + ': ' +animal[x]);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak = function() {
//             if (this.type.toLowerCase() == "cat"){
//                 console.log(`The ${this.color} ${this.type} is meowing!`);
//             }
//             if (this.type.toLowerCase() == "dog"){
//                 console.log(`The ${this.color} ${this.type} is barking!`);
//             }
//     }
// }

// const animal = new Animal("Cat","Tabby","Orange","6","6");
// animal.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;

//         let typeCheck = function() {
//             if (_type.toLowerCase() == "cat"){return "cat";}
//             if (_type.toLowerCase() == "dog"){return "dog";}
//         }

//         this.speak = function() {
//             let animalType = typeCheck();
//             console.log(`The ${animalType} has made a noise!`);
//         }
//     }
// }

// const animal = new Animal("Cat","Tabby","Orange","6","6");
// animal.speak();
// STEP 9
// String.prototype.findWords = function(word) {
    
//     const regex = new RegExp(`\W*(${word})\W*`);
//     const matches = this.match(regex);
//     console.log(matches.length);
// }

// const text = "hello hello there my cat cat friend hello";
// text.findWords('hello');
