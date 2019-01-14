
var ul= document.getElementById('list');
var li;
//alert();
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);


var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);


function addItem(){
   var input = document.getElementById('input');
   var item = input.value;
   //ul = document.getElementById('list');
   var textnode = document.createTextNode(item)
if(item ===''||item==null){
    
    //Add a p tag and assign a value of "Enter your TODO"
    var para = document.createElement("p");
    var node = document.createTextNode("Enter your TODO");
    para.appendChild(node);

    var element = document.getElementById("container");
    element.appendChild(para);
    return false;
}else{
    //create li
    li= document.createElement('li');

    //create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id','check');

    //create label
    var label = document.createElement('label');
    label.setAttribute('for','item');

    //add these elements on web page
    label.appendChild(textnode);
    ul.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
    li.appendChild(label);
    li.appendChild(checkbox);
    
    setTimeout(() => {
        li.className = 'visual';
    },2);
    input.value = '';
}
}
function removeItem(){
    li=ul.children
   for(let index = 0; index < li.length; index++){
       while(li[index] && li[index].children[0].checked){
           ul.removeChild(li[index])
       }
   }

}