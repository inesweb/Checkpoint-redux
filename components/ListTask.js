import React, { useState } from 'react'
import Task from './Task'
import AddTask from './AddTask'
import { useSelector, useDispatch } from "react-redux";
import { filterLists } from '../actions';




const ListTask = () => {
  const filter = useSelector((state) => state.Filterstate);
  const item = useSelector(state => state.items)
  const [filtertext, setFiltertext] = useState(filter)
  const dispatch = useDispatch();

  const handleFilterall = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("all");

  }
  const handleFilterdone = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("done");
  }
  const handleFilternotdone = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("notdone");
  }
  const newList = () => {
    if (filtertext === "all") {
      return item;
    }
    if (filtertext === "done") {
      return item.filter((el) => el.isDone === true);
    }
    if (filtertext === "notdone") {
      return item.filter((el) => el.isDone === false);
    }
  };
  let finalList = newList();
  return (
  
    <div className='ListItems'>
      <div>
        <div className='container-fluid'>
          <AddTask />

          <h3> Filtre by</h3>
          <span className="link-primary" onClick={handleFilterall} >All</span><br/>
          <span className="link-primary"   onClick={handleFilterdone} >Done</span><br/>
          <span className="link-primary"  onClick={handleFilternotdone} >Not Done</span><br/>
            </div>
       
            



      </div>

      <div>
        {finalList.map((e) => {
          return (
            <div key={e.id}>
              <Task id={e.id} description={e.description} isDone={e.isDone} />

            </div>

          );
        })}
      </div>
    </div>
  )
}
export default ListTask;