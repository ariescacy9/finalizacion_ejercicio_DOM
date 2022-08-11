let inputElement = document.querySelector('input'),
    formElement = document.querySelector('form'),
    listElement = document.querySelector('ul'),
    totalTask = document.getElementById('footer__total');

let taskList = [];

function lista(){
  listElement.innerHTML = "";
  taskList.forEach((item) =>{
    let newItem= document.createElement("li");

    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

    let enlace = document.createElement("a");
    enlace.classList.add('delete');
    enlace.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    newItem.appendChild(enlace);

//eliminar
    enlace.addEventListener("click", (e) =>{
      deleteItem(e);
    });

    listElement.appendChild(newItem);
  });

  totalTask.innerHTML= taskList.length;

  inputElement.value = '';
}

lista();

function whitoutSpace(e){
  let string=e.trim();
  return string.length>0;
}

function addTask(){
  if (inputElement.value && 
    whitoutSpace(inputElement.value) && 
    !taskList.includes(inputElement.value)){
    taskList.push(inputElement.value);
    lista();
  }
}

function deleteItem(e){
  let task = e.target.parentElement.previousElementSibling.innerHTML;
  let index = taskList.indexOf(task);
  if (index !== -1){
    taskList.splice(index, 1);
  }
  lista();
}

formElement.addEventListener("submit", (e)=>{
  e.preventDefault();
  addTask();
});
