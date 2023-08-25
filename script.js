// const table = document.getElementById("table");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

const Table = {
  header: [
    {
      element: "th",
      columnName: "Column A",
      order: 1,
      sort: undefined,
    },
    {
      element: "th",
      columnName: "Column B",
      order: 2,
      sort: undefined,
    },
    {
      element: "th",
      columnName: "Column C",
      order: 3,
      sort: undefined,
    },
  ],
  body: [
    {
      element: "tr",
      rowOrder: 1,
      columnElements: [
        {
          elemType: "td",
          columnName: "Column A",
          rowOrder: 1,
          value: "row1",
        },
        {
          elemType: "td",
          columnName: "Column B",
          rowOrder: 1,
          value: "row1",
        },
        {
          elemType: "td",
          columnName: "Column C",
          rowOrder: 1,
          value: "row1",
        },
      ],
    },
    {
      element: "tr",
      rowOrder: 2,
      columnElements: [
        {
          elemType: "td",
          columnName: "Column A",
          rowOrder: 2,
          value: "row2",
        },
        {
          elemType: "td",
          columnName: "Column B",
          rowOrder: 2,
          value: "row2",
        },
        {
          elemType: "td",
          columnName: "Column C",
          rowOrder: 2,
          value: "row2",
        },
      ],
    },
    {
      element: "tr",
      rowOrder: 3,
      columnElements: [
        {
          elemType: "td",
          columnName: "Column A",
          rowOrder: 3,
          value: "row3",
        },
        {
          elemType: "td",
          columnName: "Column B",
          rowOrder: 3,
          value: "row3",
        },
        {
          elemType: "td",
          columnName: "Column C",
          rowOrder: 3,
          value: "row3",
        },
      ],
    },
  ],
};

const columnBtn = document.getElementById("columnBtn");
columnBtn.onclick = addColoumnHead;
const rowBtn = document.getElementById("rowBtn");
rowBtn.onclick = addRowData;

function addColoumnHead() {
  const th = document.createElement("th");
  thead.append(th);
  const columnCount = thead.childElementCount;
  th.innerText = `Column ${columnCount}`;
  th.style.border = "1px solid #000";
  // console.log(tbody.childElementCount)
  if (tbody.childElementCount) {
    for (const elem of tbody.children) {
      // console.log(elem)
      const td = document.createElement("td");
      elem.appendChild(td);
      td.append(createRowInput());
    }
  }
}

function addRowData() {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let j = 1; j <= thead.children.length; j++) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.append(createRowInput());
  }
  // tr.style.backgroundColor = "yellow"
}

function createRowInput() {
  const input = Object.assign(document.createElement("input"), {
    type: "text",
    placeholder: "Enter row",
  });

  // input.setAttribute("type","text")
  // input.setAttribute("placeholder","Enter row")
  return input;
}

function storeTableData() {
  for (const columnText of Table.header) {
    const th = document.createElement(columnText.element);
    th.innerText = columnText.columnName;
    thead.append(th);
  }
  for (const rowText of Table.body) {
    const tr = document.createElement(rowText.element);
    for (const rowData of rowText.columnElements) {
      const td = tr.appendChild(
        document.createElement(rowData.elemType)
      );
      td.innerText = rowData.value; 
    }
    tbody.append(tr);
  }
}
storeTableData();
