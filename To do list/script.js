function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("done", checkbox.checked);
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
