let input = document.getElementById("task_input_id");
let addButton = document.getElementById("add_id");
let tasksContainer = document.querySelector(".tasks");
let clearAllButton = document.getElementById("clearAll_id");

clearAllButton.addEventListener("click", function () {
    // امسح بس الـtasks اللي ليها مفاتيح تبدأ بـ task_
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("task_")) {
            localStorage.removeItem(key);
        }
    });

    // امسح التاسكات من الـDOM
    tasksContainer.innerHTML = "";
    
    // حدّث الزرار
    updateClearButtonVisibility();
});



window.onload = function() {
    input.focus();
}

    // Load tasks from localStorage on page load
    for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("task_")) { //  only task keys
        let value = localStorage.getItem(key);
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.textContent = value;
        taskDiv.id = key;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-del");
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", function() {
            tasksContainer.removeChild(taskDiv);
            localStorage.removeItem(key);
            updateClearButtonVisibility();
        });

        taskDiv.appendChild(deleteButton);
        tasksContainer.appendChild(taskDiv);
    }
}
updateClearButtonVisibility();




addButton.addEventListener("click", function() {
    if (input.value.length === 0) {

        let oldAlert = document.querySelector(".alert");
        if (oldAlert) oldAlert.remove();

        let alert_div = document.createElement("div");
        alert_div.classList.add("alert");
        alert_div.textContent = "Please enter a task!";
        document.body.prepend(alert_div);

        setTimeout(() => {
            function removeAlert(e) {
                if (!alert_div.contains(e.target)) {
                    alert_div.remove();
                    window.removeEventListener("click", removeAlert);
                }
            }
                //to remove event and prevent memory leak
            window.addEventListener("click", removeAlert);
        }, 0);

    } else {

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.textContent = input.value;
        // console.log(taskDiv.id);
        taskDiv.id = "task_" + Date.now(); // Unique ID based on timestamp
        // Store the task in localStorage
        localStorage.setItem(taskDiv.id, input.value);
      
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-del");
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", function() {
            tasksContainer.removeChild(taskDiv);
            localStorage.removeItem(taskDiv.id); // 
            updateClearButtonVisibility();
        });

        taskDiv.appendChild(deleteButton);
        tasksContainer.appendChild(taskDiv);
        input.value = "";
        input.focus();
        updateClearButtonVisibility();
    }
});


function updateClearButtonVisibility() {
    if (tasksContainer.childElementCount > 0) {
        clearAllButton.style.display = "block";
    } else {
        clearAllButton.style.display = "none";
    }
}
