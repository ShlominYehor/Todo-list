let field = document.querySelector('.field')
let addTaskBtn = document.querySelector('.btn')
let taskList = document.querySelector(".task-list");
let startMessage = document.querySelector("#start-message");


addTaskBtn.addEventListener("click", addTaskHandler);
 


function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");

    let input = document.createElement("input");
    input.addEventListener("click", changeTaskState);
    input.type = "checkbox";
   
   let btn = document.createElement("button")
   btn.classList.add('delete-btn')
   btn.innerText = "Видалити";
   btn.addEventListener("click", function() {
       this.parentElement.remove();
   });



    let p = document.createElement("p");
    p.innerText = text;

    div.append(input);
    div.append(p);
    div.append(btn)

    return div;
}

function changeTaskState(){
    if(this.checked){
        this.parentElement.classList.add('completed')
    }else { 
        this.parentElement.classList.remove("completed");
    }
}


function addTaskHandler() {
    if (field.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = createTask(field.value);
        taskList.append(newTask);
        field.value = "";
    } else { 
        alert("введіть ім'я завдання");
    }
}