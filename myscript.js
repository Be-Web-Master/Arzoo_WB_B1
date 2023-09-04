const LOCAL_STORAGE_TABLE_KEY = "tableStateData";

let tableState = {
  header: [],
  body: [],
};

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
  // agr data milta hai to tableState ma override kr denge
  tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
  // vrna data set kr denge
  localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

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

const sortingDropdown = document.getElementById("columnDropdown")
// to  sorting table row
const sortForm = document.getElementById('sort-form')
sortForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const columnNumber = event.target.columnsDropdown.value.split("-")[1];
    const sortingOrder = event.target.sortOrder.value
    // const columnNumber = tableState.header.find(headerObj =>
    //     headerObj.columnName === selectedColumnName
    // )
console.log({columnNumber})
    tableState.body.sort((obj1,obj2)=>{
        if(obj1.cellDetails[columnNumber].cellValue > obj2.cellDetails[columnNumber].cellValue){
           if(sortingOrder === 'Ascending') return 1;
           else return -1;
        }else{
           if(sortingOrder === 'Descending') return 1;
           else return -1;
        }
    })
    updateTableData(tableState)
    console.log({sortingOrder,columnNumber})
})

const createSortingFormElements = () =>{
    // dropdown
    tableState.header.forEach(columnHeader => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', columnHeader.columnName+ "-" + columnHeader.columnNumber)
        optionElement.innerText = columnHeader.columnName
        sortingDropdown.append(optionElement);
    })
}
tableState.header.length && tableState.body.length && createSortingFormElements();


thead.addEventListener("keyup", (event) => {
// isme sirf colnum ko update kr rhe hai to agr first indx pe kuch nhi denge to vo humesha 0 lega or kuch bhi kroi to 0th pe hi update krenge
const [rowNumber,columnNumber] = event.target.id.split("-");
tableState.header[columnNumber].columnName=event.target.value;
updateTableData()
});

tbody.addEventListener("keyup", (event) => {
// split se array mil rha hai
const [rowNumber,columnNumber] = event.target.id.split("-")
tableState.body[rowNumber].cellDetails[columnNumber].cellValue = event.target.value;
console.log({tableState});
updateTableData()
});

function createTableUI() {
    thead.innerHTML = "";
    tbody.innerHTML = "";
    // to create column
    for (const columnText of tableState.header) {
      const th = document.createElement(columnText.elementType);
      const columnInput = createColumnInput(columnText.columnNumber);
      columnInput.value = columnText.columnName;
      const searchElement = document.createElement('input');
      searchElement.innerText = 'search'
      searchElement.placeholder = 'search ' + columnText.columnName
      th.append(columnInput);
      th.append(searchElement);
      thead.append(th);
    }
    //   to add row value
    for (const rowText of tableState.body) {
      const tr = document.createElement(rowText.elementType);
      for (const rowData of rowText.cellDetails) {
        const td = document.createElement(rowData.elemType);
        const inputElement = createRowInput(rowData.rowNumber,rowData.columnNumber);
        //   inputElement.setAttribute("value", rowData.value);
  
        inputElement.value = rowData.cellValue;
        // console.log(inputElement.value)
        td.append(inputElement);
        tr.append(td);
      }
      tbody.append(tr);
    }
    //   jb ui dikha rhe hai tabhi localStorage funciton ko call kr denge
    // updateTableData();
  }
  createTableUI();

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
    //   headerObj ma push hogaya hai vaha se lenge colNumber
      columnNumber: headerObj.columnNumber,
      rowNumber: idx + 1,
      cellValue: "",
    });
  });
  createTableUI(tableState);
}

function addNewRow() {

    const bodyObj = {
      elementType: "tr",
      rowNumber: tableState.body.length,
      cellDetails: [],
    };
    tableState.header.forEach((headElem) => {
        // console.log(headElem)
      bodyObj.cellDetails.push({
        elemType: "td",
        columnNumber: headElem.columnNumber,
        rowNumber: bodyObj.rowNumber,
        cellValue: "",
      });
    });
    tableState.body.push(bodyObj);
    createTableUI(tableState);
  }

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

// to store table data in local Storage
function updateTableData() {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}