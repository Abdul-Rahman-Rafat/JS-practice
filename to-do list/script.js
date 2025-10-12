let input = document.getElementById("task_input_id");
let addButton = document.getElementById("add_id");
let tasksContainer = document.querySelector(".tasks");

window.onload = function() {
    input.focus();
}

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

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-del");
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", function() {
            tasksContainer.removeChild(taskDiv);
        });

        taskDiv.appendChild(deleteButton);
        tasksContainer.appendChild(taskDiv);
        input.value = "";
        input.focus();
    }
});
