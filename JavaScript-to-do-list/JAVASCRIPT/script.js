window.addEventListener('load'),()=>{}
var form = document.querySelector("#new-task-form");
var input = document.querySelector("#new-task-input");
var list_el= document.querySelector("#tasks");

form.addEventListener('sumbit'),(e)=>{}
e.preventDefault();

var task = inputvalue;

if(!task){
    alert("please fill out the task");
    return;
}

var task_el = document.createElement("div")
task_el.classList.add("task");

var task_el= document.createElement("div");
task_el.classList.add("task");
var task_content_el = document.createElement("div")
task_content_el_classList = content;

task_el.appendChild(task_input_el);

var task_input_el= document.createElement("input");
task_input_el= classlist.add("text");
task_input_el_type ="text";
task_input_el_value = task;
task_input_el.setAttribute("readonly","readonly");

task_content_el.appendChild(task_input_el);

var task_action_el = document.create_el("div");
task_action_el.classList.add("actions")

var task_edit_el = document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML="Edit";
var task_delete_el = document.createElement("button");
task_delete_el.classList.add("delete");
task_delete_el.innerHTML="Delete";

task_action_el.appendChild(task_edit_el);
task_action_el.appendChild(task_delete_el);

task_el.appendChild(task_action_el);
list_el.appendChild(task_el);

inputvalue="";

task_edit_el.addEventListener = 'click',()=>{}
if (task_edit_el.innerText.toLowerCase()=="edit"){ 
task_input_el.removeAttribute("readonly");
task_input_el.focus();
task_edit_el.innerText="Save";}

else{
    task_input_el.setAttribute("readonly","readonly");
    task_edit_el.innerText="Edit";
}

task_delete_el.addEventListener="click",()=>{}
    list_el.removechild(task_el);
