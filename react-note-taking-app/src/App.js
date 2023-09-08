import './App.css';
import {useState} from "react"
function NoteTakingApp() {
  const [title, setTitle] = useState("")
  const [disc, setDisc] = useState("")
  const [notes, setNotes] = useState([])
  const [modal, setModal] = useState(false)

  const handleSubmit = () =>{
    const newNotes = {title,disc};
    setNotes([...notes,newNotes]);
    setTitle('')
    setDisc('')
    console.log(newNotes)
  }
  const deleteNotes = (idx) =>{
     setNotes((notes)=>{
      return notes.filter((note,id)=>{
        return id !== idx
      })
     })
     setModal(false)
     setTitle('')
     setDisc('')
  }
  const editNotes =(idx) =>{
     setTitle(notes[idx].title);
     setDisc(notes[idx].disc);
     setModal(true);
  }
  return (
    <div>
      {/* <h1>Create Notes</h1> */}
      <form 
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input className='input' type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea className='textarea' placeholder='Discription' cols="50" rows="4" value={disc} onChange={(e)=>{setDisc(e.target.value)}}></textarea>
        <button className='btn' type="submit"  onClick={handleSubmit}>Submit</button>
      </form>

      <div className="Notes">
         {notes.map((notes,idx)=>{
            return <div className="note" key={idx}>
              <h1 className='h1'>
                {notes.title}
                <span className='delete' onClick={()=>deleteNotes(idx)}>❌</span>
                <span className='edit' onClick={()=>editNotes(idx)}>✏️</span>
              </h1>
              <h2 className='h2'>{notes.disc}</h2>
            </div>
         })}
      </div>

      {modal && <div className='editmodal'>
        <form 
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <h1>Edit Notes</h1>
        <input className='input' type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea className='textarea' placeholder='Discription' cols="50" rows="4" value={disc} onChange={(e)=>{setDisc(e.target.value)}}></textarea>
        <button className='btn' type="submit"  >Update</button>
      </form>
      </div>
      }
    </div>
  );
}

export default NoteTakingApp;
