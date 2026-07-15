const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const percentage = document.querySelector("#percentage");
const taskCounter = document.querySelector(".task-counter");
const progress = document.querySelector(".progress");



addBtn.addEventListener("click", ajouterTache);

function ajouterTache(){
    const texte = taskInput.value.trim();

    if (texte === ""){
        return;
    }

    const li = document.createElement("li");

    li.classList.add("task");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function(){

        if (checkbox.checked){
            li.classList.add("completed");
        }else{
            li.classList.remove("completed");
        }

        updateStats();

    });

    const titre = document.createElement("span");
    titre.textContent = texte;
    titre.classList.add("task-title");
    const badge = document.createElement("span");
    badge.textContent = "HIGH";
    badge.classList.add("badge");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(badge);
    li.appendChild(titre);
    
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateStats();


    

}



function updateStats(){

    const tasks = document.querySelectorAll(".task");
    const completedTasks = document.querySelectorAll(".task.completed");
    const total = tasks.length;
    const completed = completedTasks.length;

    let percent = 0;

    if (total > 0){
        percent = Math.round((completed/total)* 100)
    }

    percentage.textContent = percent + "%";

    taskCounter.textContent = completed + "/" + total + " completées";

    progress.style.width = percent + "%";

    
}



