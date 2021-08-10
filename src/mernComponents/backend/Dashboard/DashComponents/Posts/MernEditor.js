import React from 'react'
import {Editor  } from "react-draft-wysiwyg"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
function MernEditor(props) {
    return (
        <div className={props.containerClass ? props.containerClass : "editor-container-class"}>
            <Editor
                EditorState={props.editorState}
                onEditorStateChange={props.onEditorStateChange} 
                {...props}

            />
        </div>
    )
}

export default MernEditor
