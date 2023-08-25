const idInput = document.getElementById("idInput");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("searchInput");
const GET_URL = (idInpVal) =>
  `https://jsonplaceholder.typicode.com/todos/${idInpVal}`;

let liDataArray = [];

const fetchData = async (api) => {
  const todoDataResponse = await fetch(api);
  const todoData = await todoDataResponse.json();
  return todoData;
};

const changeBtnText = (text) => {
  submitBtn.innerText = text;
};

const clearTodoList = () => {
  todoList.innerHTML = "";
};

const addLiElem = (liText)=>{
    const liTagElem = document.createElement("li");
    liTagElem.innerText = liText;
    todoList.append(liTagElem);
}

const updateTodoUI = () => {
  clearTodoList();
  for (const data of liDataArray) {
    addLiElem(data);
  }
};

const handleAddTaskSubmit = async (event) => {
  event.preventDefault();
  let idInpVal = idInput.value;

  if (idInpVal === "" || idInpVal <= 0 || idInpVal > 200) {
    alert("Enter vaild input id!");
    idInput.value = "";
    return;
  }

  changeBtnText("Adding");

  const todoData = await fetchData(GET_URL(idInpVal));

  if (!todoData.title) {
    alert("Failed to get data!");
    idInput.value = "";
    // submitBtn.innerText = "Add";
    changeBtnText("Add");
    return;
  }

  liDataArray.push(todoData.title);

  updateTodoUI();
  idInput.value = "";

  //   submitBtn.innerText = "Add";
  changeBtnText("Add");
};

const handleSearchInput = (event) => {
  let dataValue = event.target.value;

  clearTodoList();
  let searchArray = liDataArray.filter((elem) => {
    return elem.includes(dataValue);
  });
//   console.log(searchArray);
  if(searchArray.length>0){
    searchArray.map((li)=>{
        addLiElem(li)
    })
  }
};

