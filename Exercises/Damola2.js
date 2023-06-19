
let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language.slice(0,5));



let frameworks = ["React", "Angular", "Vue"];

console.log(frameworks.includes("Vue"));
console.log(frameworks.indexOf("react"));

//reverse order
console.log(frameworks.reverse()); 

//sorts in alphabetical order
console.log(frameworks.sort()); 

//removes from the back and returns the removed value
console.log(frameworks.pop()); 

//adds value at the end and logs the length
console.log(frameworks.push("Ember")); 

 //removes the first element and returns the removed value
console.log(frameworks.shift());


//adds to the front
console.log(frameworks.unshift("Ember")); 

console.log(frameworks);

console.log(frameworks.splice(1, 2, "DotNet", "Tailwind"));

let arr = ["b", 21, 4, "a"];
console.log(arr.sort())


let school = [
  ["Science", "Computer", "Art"],
  ["Jones", "Willoghby", "Rhodes"]
];

school[1].push("Holmes");
console.log(school);

