const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];
console.log(days[2]);
let saySomething = function(){
    console.log("Hello");
}
days.forEach(saySomething);
days.forEach(function(day, index){
    console.log(`starts with ${index+1} -- ${day}`);
})