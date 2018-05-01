let input = document.querySelector('input[type=text]');
let addButton = document.querySelector('button');
let listUl = document.querySelector('ul');
let deleteButtons;
let listArr = [];

addButton.addEventListener('click', addTask);

function addTask(){
  let task = input.value;
  listArr.unshift(task);
  createTaskList();
}

function listenerToDelete(){
  deleteButtons.forEach(button => button.addEventListener('click', removeTask));
}

function removeTask() {
  let taskToDelete = this.dataset.id;
  let remove = listArr.splice(taskToDelete, 1);
  createTaskList();
}

function createTaskList(){
  listUl.innerHTML = "";
  for(let i = 0; i<listArr.length; i++){
    let li = document.createElement('li');
    li.innerHTML = '<span>'+ listArr[i] + '</span>' + `<a href="#" data-id="${i}">X</a>`;
    listUl.appendChild(li);
  }
  deleteButtons = document.querySelectorAll('a');
  input.value = null;
  listenerToDelete();
}


input.addEventListener('keyup', (e) => {
  if(e.keyCode === 13 && input.value != '') {
    addTask();
  }
})
