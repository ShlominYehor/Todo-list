let field = document.querySelector('.field')
let addTaskBtn = document.querySelector('.btn')
let deleteAllList = document.querySelector('.deleteAllList') 

let startMessage = document.querySelector("#start-message");

const list = document.querySelector('.todo-list')



 
addTaskBtn.addEventListener('click',addTaskHandler)
   


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
        const li = document.createElement('li')
        li.className = "todo-list-item";
        let btn = document.createElement("button")
        btn.innerText = "Видалити";
        btn.classList.add('delete-btn')
        li.innerText = field.value
        let input = document.createElement("input");
        input.addEventListener("click", changeTaskState);
       input.type = "checkbox";
   
        
        list.appendChild(li)
        li.appendChild(input)
        li.appendChild(btn)
        field.value = ''
    
      
      
       
       
        btn.addEventListener("click", function() {
            list.removeChild(li)
        });
     
      
    

    // return li
    } else { 
        alert("введіть ім'я завдання");
    }
}

deleteAllList.addEventListener('click', deleteAllTasksHandler);

function deleteAllTasksHandler() {
    list.innerHTML = '';
    startMessage.hidden = false;
}

