import axios from 'axios';

const baseUrl = "http://localhost:3001/api/v1";

const getAll=(setList)=>{
    axios.get(`${baseUrl}/allTasks`).then(({ data }) => {
    //   console.log(data);
      setList(data);
    });
}
const create=(title,setTitle,setList)=>{
   axios.post(`${baseUrl}/singleTask`,{title}).then((data)=>{
    console.log(title)
           setTitle('');
           console.log(data);
        //    setList(data);
        getAll(setList);
           
   })
}
const updateTk=(title,setTitle,setList,id,setUpdate)=>{
  axios.patch(`${baseUrl}/singleTask`,{id,title}).then((data)=>{
   console.log(typeof(id))
    console.log(title)
        setTitle('')
        setUpdate(false)
        getAll(setList)
  })
}
const deleteTask=(id,setList)=>{
   console.log(typeof(id));
   axios
     .delete(`${baseUrl}/singleTask/?id=${id}`)
     .then((data) => {
       console.log(id);
       getAll(setList);
       console.log(data);
     })
     .catch((err) => console.log(err));
}
export {getAll,create,updateTk,deleteTask};