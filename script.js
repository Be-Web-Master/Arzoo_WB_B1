// const table = document.getElementById("table");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const columnBtn = document.getElementById("columnBtn");
columnBtn.onclick = addNewColoumn;
const rowBtn = document.getElementById("rowBtn");
rowBtn.onclick = addNewRow;
const clrBtn = document.getElementById("clear");
clrBtn.onclick = () => {
  localStorage.clear();
};

thead.addEventListener("keyup", (event) => {
  console.log(event.target);
});

tbody.addEventListener("keyup", (event) => {
  console.log(event.target);
});

const LOCAL_STORAGE_TABLE_KEY = "tableStateData";

let tableState = {
  header: [],
  body: [],
};

// to store table data in local Storage
if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
  // agr data milta hai to tableState ma override kr denge
  tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
  // vrna data set kr denge
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

function updateTableData() {
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

function addNewColoumn() {
  const headerObj = {
    elementType: "th",
    columnName: "",
    columnNumber: tableState.header.length,
    sort: undefined,
  };
  tableState.header.push(headerObj);
  tableState.body.forEach((rowObj, idx) => {
    rowObj.cellDetails.push({
      elemType: "td",
      columnNumber: "",
      rowNumber: idx + 1,
      cellValue: "",
    });
  });
  createTableUI(tableState);
}

function addNewRow() {

    const bodyObj = {
      elementType: "tr",
      rowNumber: tableState.body.length + 1,
      cellDetails: [],
    };
    tableState.header.forEach((headElem) => {
        // console.log(headElem)
      bodyObj.cellDetails.push({
        elemType: "td",
        columnNumber: headElem.columnNumber +1,
        rowNumber: tableState.body.length + 1,
        cellValue: "",
      });
    });
    tableState.body.push(bodyObj);
    createTableUI(tableState);
  }


function createTableUI() {
  thead.innerHTML = "";
  tbody.innerHTML = "";
  // to create column
  for (const columnText of tableState.header) {
    const th = document.createElement(columnText.elementType);
    console.log(columnText);
    const columnNumber = columnText.columnNumber;
    const columnInput = createColumnInput(columnNumber);
    columnInput.value = columnText.columnName;
    // th.innerText = columnText.columnName;
    th.append(columnInput);
    thead.append(th);
  }
  //   to add row value
  for (const rowText of tableState.body) {
    const tr = document.createElement(rowText.elementType);
    for (const rowData of rowText.cellDetails) {
        console.log(rowData)
      const rowNumber = rowData.rowNumber;
      const columnNumber = rowData.columnNumber;
      const td = document.createElement(rowData.elemType);
      const inputElement = createRowInput(rowNumber,columnNumber);
      //   inputElement.setAttribute("value", rowData.value);

      inputElement.value = rowData.cellValue;
      // console.log(inputElement.value)
      td.append(inputElement);
      tr.append(td);
    }
    tbody.append(tr);
  }
  //   jb ui dikha rhe hai tabhi localStorage funciton ko call kr denge
  updateTableData();
}
createTableUI();



function createColumnInput(columnNumber) {
  const input = Object.assign(document.createElement("input"), {
    id: `0-${columnNumber}`,
    type: "text",
    placeholder: "Enter Column",
  });
  return input;
}

function createRowInput(rowNumber, columnNumber) {
    console.log(`${rowNumber}-${columnNumber}`)
  const input = Object.assign(document.createElement("textarea"), {
    id: `${rowNumber}-${columnNumber}`,
    row: "10",
    column: "10",
    placeholder: "Enter row",
  });
  return input;
}
