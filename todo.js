function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.innerText = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = function () {
      listItem.remove();
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}
