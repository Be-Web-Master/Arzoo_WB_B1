import "./App.css"
import { useState } from "react";
import { createPortal } from "react-dom";
const Table = () => {
  const [tableState, setTableState] = useState({
    columns: [], // {columnName: ''}
    rows: [] // { cells: [] }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [columnName, setColumnName] = useState("");

  const [addColumnFormState, setAddColumnFormState] = useState({
    columnName:"",
    columnComponentType:""
  })
  const addColumnPrompt = () => setModalOpen(true);
  const handleAddColumn = (columnName) => {
    // const columnName = prompt('Add column Name');
    const newTable = { ...tableState };
    newTable.columns.push({
      columnComponentType: addColumnFormState.columnComponentType,
      columnName: columnName ?? `Col_${newTable.columns.length + 1}`
    });
    //  adding cells for columns
    newTable.rows.forEach((rowObj, rowIdx) =>
      rowObj.cells.push({
        cellValue: `Cell_${rowIdx}_${newTable.columns.length}`
      })
    );
    setTableState(newTable);
  };

  const handleAddRow = () => {
    const newTable = { ...tableState };
    newTable.rows.push({
      cells: newTable.columns.map((columnHeader, colIdx) => ({
        cellValue: `Cell_${newTable.rows.length}_${colIdx}`
      }))
    });
    setTableState(newTable);
  };
  
  const resetColumnForm =()=>{
    setAddColumnFormState({
        columnName:"",
        columnComponentType:"",
    })
  }

  
//   console.log({ addColumnFormState });
  return (
    <div>
      <button onClick={addColumnPrompt}>Add Column</button>
      <button onClick={handleAddRow}>Add Row</button>
      {/* <button onClick={() => setModalOpen(true)}>Open Modal</button> */}
      {modalOpen &&
        createPortal(
          <div className="modal">
            <button type="button" onClick={() => setModalOpen(false)}>
              Close
            </button>
            <form>
              <input
                placeholder="Column Name"
                value={addColumnFormState.columnName}
                onChange={(e) => setAddColumnFormState(formState=> ({...formState, columnName: e.target.value}))}
              />
              <input list="column-comp" 
                placeholder="Component Type"
                value={addColumnFormState.columnComponentType}
                onChange={(e)=>setAddColumnFormState(formState=> ({
                    ...formState,
                    columnComponentType: e.target.value
                }))}
              />
              <datalist id="column-comp">
                <option value='Input'/>
                <option value='TextArea'/>
              </datalist>
            
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddColumn(addColumnFormState.columnName);
                  resetColumnForm();
                  setModalOpen(false);
                }}
              >
                Save
              </button>
              <button type="reset" onClick={() => resetColumnForm()}>
                Clear
              </button>
            </form>
          </div>,
          document.body
        )}

      <table>
        <thead>
          {tableState.columns.map((columnObj, idx) => (
            <th>
              <Input
                onChange={(e) => {
                  const newTable = { ...tableState };
                  newTable.columns[idx].columnName = e.target.value;
                  setTableState(newTable);
                }}
                value={columnObj.columnName}
              />
            </th>
          ))}
        </thead>
        <tbody>
          {tableState.rows.map((rowObj, rowIdx) => {
            const { cells = [] } = rowObj;
            return (
              <tr>
                {cells.map((cellData, colIdx) => {
                    const ComponentType = tableState.columns[colIdx].columnComponentType;
                    return (<td>
                        <ComponentType
                          onChange={(e) => {
                            const newTable = { ...tableState };
                            newTable.rows[rowIdx].cells[colIdx].cellValue =
                              e.target.value;
                            setTableState(newTable);
                          }}
                          value={cellData.cellValue}
                        />
                      </td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Input = (props) => {
  const { value, onChange } = props;
  return <input value={value} onChange={onChange} />;
};
const TextArea = (props) => {
  const { value, onChange } = props;
  return <textarea value={value} onChange={onChange}></textarea>;
};

export default Table;
