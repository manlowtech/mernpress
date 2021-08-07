import React from 'react'

function Content({post_content}) {
    return (
        <div>
            <p className={`post_value p_${post_content}`}>
            {post_content}
            </p>
        </div>
    )
}

export default Content
