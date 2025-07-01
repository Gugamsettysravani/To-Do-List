function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed class on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete task
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

// const inputBox=document.getElementById("input-box");
// const listContainer=document.getElementById("list-container");
// const buttonE1=document.getElementById("btn");


// buttonE1.addEventListener("click",onAddClick);
// function onAddClick(){
//   if(inputBox.value===""){
//     alert("something went wrong");
//   }else{
//     let li=document.createElement("li");
//     li.innerHTML=inputBox.value;
//     listContainer.appendChild(li);
//     let span=document.createElement("span");
//     span.innerHTML="/u00d7";
//     li.appendChild(span);
    
    
//   }
//   inputBox.value="";
// }
