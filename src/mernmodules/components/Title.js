import React from 'react'

function Title({title,cNames}) {
    return (
        <div className={`${cNames}`} >
            <h5 className={`title_value t_${cNames}`}>{title}</h5>
        </div>
    )
}

export default Title
