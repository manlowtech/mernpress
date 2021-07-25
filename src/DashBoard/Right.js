import React from 'react'

function Right({menu_slug,component}) {
    const pathId = props.match.params.menu_slug;
    const Rsb =(menu_slug)=>{
        if(pathId === menu_slug){
            return {component}
        }
    }
    return (
        <div>
           <Rsb/>
        </div>
    )
}

export default Right;
