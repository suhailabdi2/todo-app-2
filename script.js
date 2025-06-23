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
    p.textContent= t.trim();
    span.appendChild(p);
    span.appendChild(checkbox); 
    console.log(tasks);
    taskList.appendChild(li);
    span.appendChild(deleteButton);
    checkbox.addEventListener("change",function(){
        console.log("task",tasks);
        let t=tasks.findIndex(i=> i.id==li.getAttribute("count"))
        if(tasks[t].completed){
            p.style.textDecoration="none";
            p.style.fontWeight="normal";
            tasks[t].completed=false;
            console.log(li.getAttribute("count"));
        }else{
            console.log("change");
            tasks[t].completed=true;
            p.style.textDecoration="line-through";
            p.style.fontWeight="100";
        }
        localStorage.setItem("tasks",JSON.stringify(tasks));
        console.log(tasks);
    })
    li.setAttribute("count",count);
    count++;
    taskInput.value="";
    localStorage.setItem("tasks",JSON.stringify(tasks));
    deleteButton.addEventListener("click",function(){
        tasks=tasks.filter(item => item.id != li.getAttribute("count"));
        li.remove();
        console.log(tasks);
        taskInput.value="";
        localStorage.setItem("tasks",JSON.stringify(tasks));    
    }) 
}
function addTask(v){
    tasks.push({
        id:count,
        text:v,
        completed:false
    })
    renderTask(v);      
}
window.addEventListener("DOMContentLoaded",function(){
    tasks=JSON.parse(localStorage.getItem("tasks"))
    tasks.map(task=> renderTask(task.text))
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
