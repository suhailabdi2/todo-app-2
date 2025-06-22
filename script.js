const addButton= document.querySelector('.add-task-button');
const taskInput = document.querySelector('#new-task');
const taskList= document.querySelector('.task-list');

function addTask(){
    const li = document.createElement("li");
    const deleteButton= document.createElement("button");
    const checkbox= document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    deleteButton.textContent="🗑️";
    const span= document.createElement("span");
    li.appendChild(span);
    span.appendChild(checkbox);
    span.textContent= taskInput.value.trim(); 
    console.log(taskInput.value);
    taskList.appendChild(li);
    span.appendChild(deleteButton);
    deleteButton.addEventListener("click",function(){
        li.remove();
        taskInput.value="";

    })
}
addButton.addEventListener("click",addTask);
taskInput.addEventListener("keypress",function(e){
    if(e.key =="Enter"){
        e.preventDefault();
        addButton.click();
    }
})