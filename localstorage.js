localStorage.setItem('hero','thor');
localStorage.setItem('todo','Buy milk');
var myHero = localStorage.getItem('hero');
console.log(myHero);
console.log(localStorage.getItem('todo'));
localStorage.setItem('todo','do something');
console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');
myHero = localStorage.getItem('hero');
console.log(myHero);

// Parsing JSON and stringify
 const student = {
     name: 'Jhon',
     age: 23,
     isActive: true
 }

//convert this object into string to be stored in local storage
const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
localStorage.setItem('student', studentObjToString);

//converting back to JSON
const toJSONStudent = JSON.parse(studentObjToString);
console.log(typeof toJSONStudent);
console.log(toJSONStudent);
