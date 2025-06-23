const addButton= document.querySelector('.add-task-button');
const taskInput = document.querySelector('#new-task');
const taskList= document.querySelector('.task-list');
let tasks=[];
let count =0;
function renderTask(t){
    
    const li = document.createElement("li");
    const deleteButton= document.createElement("button");
    const checkbox= document.createElement("input");
    checkbox.setAttribute("id","completed");
    checkbox.setAttribute("type","checkbox");
    deleteButton.textContent="🗑️";
    const span= document.createElement("span");
    const p = document.createElement("p");
    li.appendChild(span);
    p.textContent= t.text.trim();
    span.appendChild(p);
    span.appendChild(checkbox); 
    console.log(tasks);
    taskList.appendChild(li);
    span.appendChild(deleteButton);
    
    checkbox.addEventListener("change",function(){
        console.log("task",tasks);
        let v=tasks.findIndex(i=> i.id==t.id);
        if(tasks[v].completed){
            p.style.textDecoration="none";
            p.style.fontWeight="normal";
            tasks[v].completed=false;
            console.log(li.getAttribute("count"));
        }else{
            console.log("change");
            tasks[v].completed=true;
            p.style.textDecoration="line-through";
            p.style.fontWeight="100";
        }
        localStorage.setItem("tasks",JSON.stringify(tasks));
        console.log(tasks);
    })
    li.setAttribute("count",count);
    
    taskInput.value="";
    localStorage.setItem("tasks",JSON.stringify(tasks));
    deleteButton.addEventListener("click",function(){
        tasks=tasks.filter(item => item.id != t.id);
        li.remove();
        console.log(tasks);
        taskInput.value="";
        localStorage.setItem("tasks",JSON.stringify(tasks));    
    }) 
}
function addTask(v){
    let myt = {
        id:tasks.length || 0,
        text:v,
        completed:false
    }
    tasks.push(myt)

    renderTask(myt);      
}
window.addEventListener("DOMContentLoaded",function(){
    tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.map(task=> renderTask(task))
})
addButton.addEventListener("click",function(e){
    if(taskInput.value===""){
        alert("Please Enter something in the task bar")
    }else{
        addTask(taskInput.value.trim());
    }
});
taskInput.addEventListener("keypress",function(e){
    if(e.key =="Enter"){
        e.preventDefault();
        addButton.click();
    }
})
