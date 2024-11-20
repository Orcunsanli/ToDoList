let TaskList = document.getElementById("taskList");
console.log(TaskList); // Bu ne yazdıracak???

let TaskInput = document.getElementById("taskInput");
let Tasks = [];

function AddTask() {
  if (TaskInput.value == "" || TaskInput.value == " ") {
    alert("Please fill the blanks");
    return;
  }
  // Kullanıcı herşeyi doğru girmiş demektir

  console.log(TaskInput.value);

  Tasks.push(TaskInput.value);
  DisplayList();
  TaskInput.value = "";
}

function DisplayList() {
  console.log(Tasks);

  // for (let index = 0; index < Tasks.length; index++) {
  //   var tempElement = document.createElement("li");
  //   tempElement.innerHTML = Tasks[index];
  //   TaskList.appendChild(tempElement);
  // }

  var tempElement = document.createElement("li");
  tempElement.innerHTML = Tasks[Tasks.length - 1];
  TaskList.appendChild(tempElement);
}
