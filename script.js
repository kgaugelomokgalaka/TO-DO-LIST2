function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.innerText = taskInput.value;
        listItem.appendChild(taskText);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear input field
    }
}