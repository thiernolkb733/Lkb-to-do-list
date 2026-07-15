const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const percentage = document.querySelector("#percentage");
const taskCounter = document.querySelector("#task-counter");
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

}



