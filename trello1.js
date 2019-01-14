const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];
for(let index = days.length-1; index >=0; index--){
console.log(days[index]);
}
const myTodos = [];
myTodos.push("Go to gym");
myTodos.push("Have fruits");
myTodos.forEach(function(todo, i){
    console.log(`Your task number ${i+1} is ${todo}`);
})