const inputText=document.querySelector("#task");
const button=document.querySelector(".add-btn");
const form=document.querySelector("#add-task");
const ul=document.querySelector(".todolist-list-container");


const createTask=(taskText)=>{
    return `
    <div class="list-group">
                    <li class="unchecked">${taskText}</li>
                    <button class="btn">&#128473;</button>
                </div>
            `

}


//button click add 
button.addEventListener("click", e=>{
    e.preventDefault();
    if(inputText.value){
    ul.innerHTML +=createTask(inputText.value);
    form.reset();}
    else {
        alert("Please select a task.");
    }
})

//delete task
ul.addEventListener("click", e=>{
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }
    completedTaskCount();
})

//check click
ul.addEventListener("click", e=>{
    if(e.target.classList.contains("unchecked")){
        e.target.className="checked";
    }
    else {
        e.target.className="unchecked";
    }
})