const addButton= document.querySelector('.add-task-button');
const taskInput = document.querySelector('#new-task');
const taskList= document.querySelector('.task-list');
let tasks=[];
let count =0;
function addTask(){
    const li = document.createElement("li");
    const deleteButton= document.createElement("button");
    const checkbox= document.createElement("input");
    checkbox.setAttribute("id","completed");
    checkbox.setAttribute("type","checkbox");
    deleteButton.textContent="🗑️";
    const span= document.createElement("span");
    const p = document.createElement("p");
    li.appendChild(span);
    p.textContent= taskInput.value.trim();
    span.appendChild(p);
    span.appendChild(checkbox); 
    console.log(tasks);
    taskList.appendChild(li);
    span.appendChild(deleteButton);
    tasks.push({
        id:count,
        text:taskInput.value,
        completed:false
    }   
    )
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
    window.addEventListener("DOMContentLoaded",function(){
       let tasks=JSON.parse(localStorage.getItem("tasks"));
       console.log(tasks);
        tasks.map(task => taskList.innerHTML=`
            <li count=${task.id}><span><p>${task.text}</p><input type="checkbox"><button>🗑️</button></span></li>
            `).join("");
        console.log("window loaded");
    })
}
addButton.addEventListener("click",function(e){
    if(taskInput.value===""){
        alert("Please Enter something in the task bar")
    }else{
        addTask();
    }
});
taskInput.addEventListener("keypress",function(e){
    if(e.key =="Enter"){
        e.preventDefault();
        addButton.click();
    }
})
