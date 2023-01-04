import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from "@mui/icons-material/Delete";
const Todo=({title,update,deleteTk})=>{
    return (
      <div className="task">
        <p className="task-text">{title}</p>
        {/* console.log(title+"dsd") */}
        <div className="icon">
          <DriveFileRenameOutlineIcon className="crt" onClick={update}/>
          <DeleteIcon className="del" onClick={deleteTk} />
        </div>
      </div>
    );
}

export default Todo;
