var animal = {
    name: "Fido",
    species: "Dog",
    age: calculateYear(1990),
    speak: function() {
        console.log('Woof!');
    }
}

function calculateYear(birthYear){
  return Date.now() - birthYear;
}

// define the requirement of property of each arguments
function totalLength(x: any[], y : string) : number{
  var total : number = x.length + y.length;
  return total;
}

var txtLength = totalLength([1,4,6], "but");

console.log(txtLength);

// union types
function unionTotalLength(){
  
}

function makeTheAnimalSpeak(animal) {
    animal.speak();
}

makeTheAnimalSpeak(animal)
