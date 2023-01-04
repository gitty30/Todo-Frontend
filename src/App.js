import React,{useState,useEffect} from 'react';
// import { mapReduce } from '../../server/model/model';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import {getAll,create,updateTk,deleteTask} from './utils/api';
const App=()=> {
   const [ title,setTitle]= useState("");
   const[updateM,setUpdate]=useState(false);
  //  const[deleteM,setDelete]=useState(false);
   const[list,setList]=useState([]);
   const[id,setId]=useState('');
    useEffect(()=>{
         getAll(setList);
    },[])
    const updateMode=(id,title)=>{
        setUpdate(true);
        setTitle(title);
        setId(id);
    }
  return (
    <div className="App">
      <Navbar />
      <div className="Todo-body">
        <h1>Todos</h1>
        <div className="Input-data">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={
              updateM
                ? () => updateTk(title, setTitle, setList, id, setUpdate)
                : () => create(title, setTitle, setList)
            }
          >
            {updateM ? "Update" : "Add"}
          </button>
        </div>
        <div className="lists">
          {/* <Todo key='12' title='hi' /> */}
          {list.map(
            (item) => (
              // const { title, desc, _id } = item;
              <Todo
                key={item._id}
                title={item.title}
                update={() => updateMode(item._id, item.title)}
                deleteTk={() => deleteTask(item._id, setList)}
              />
            )
            // console.log(title);
          )}
          {/* <Todo /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
