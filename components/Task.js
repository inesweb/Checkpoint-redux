import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Form } from 'react-bootstrap';
import { doneList, removeList } from '../actions'

function Task({ id, description, isDone }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isDone)
  const handleClick = () => setChecked(!checked)
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState(description);



  const submitEdit = () => {
    dispatch({
      type: 'EDIT',
      payload: {
        id,
        newText: editText,
      },
    });
    setEdit(null);
    setEditText("");
  };

  return (
    
    <div className="card">
    

      <div className="container-fluid">
      <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
              <tr>
        <td>{id}</td>
        <td>{description}</td>
        <tr>
        <td>
       
        <div className="card-body">
        <span key={id}  >
        
        <input type="checkbox"  key={id} onChange={handleClick} onClick={() => dispatch(doneList(id))} checked={checked} className="mx-3" />
       
      </span>

        <div className='update'>
          {edit === id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="btn btn-success m-3 "
                onClick={() => submitEdit()}
              >
                Submit Edit
              </button>
            </div>
          ) : (
            <> </>
          )}
          <button className="btn btn-primary" onClick={() => setEdit(id)} >Update </button>

          <button className='btn btn-danger' onClick={() => dispatch(removeList(id))}>Dedete</button>
        </div>
        
        
      
        </div>
        
   </td>
   </tr>
      </tr>
        
       </tbody>
</table>
</div>
</div>

     
   
    

  )

}

export default Task