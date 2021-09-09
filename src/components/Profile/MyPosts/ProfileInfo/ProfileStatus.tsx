import React, {useState} from "react";

export const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const ChangeEditMode = () => {
        setEditMode(!editMode)
    }
    return <>
        {!editMode ? <div><span onDoubleClick={ChangeEditMode}>{props.status}</span></div>
            : <div><input value={props.status} onBlur={ChangeEditMode} autoFocus/></div>}
    </>
}