let todobutton = document.getElementById('push')
let todocontainer = document.getElementById('tasks')
let inputfield = document.getElementById('inputfield')

 todobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('task');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ="line-through"
    })
    paragraph.addEventListener('dblclick' , function(){
        todocontainer.removeChild(paragraph);

    })
    
})





