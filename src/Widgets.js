import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fleftistgamermemes%2Fposts%2F310119274448079&show_text=true&width=500" 
                width="500" 
                height="568" 
                style={{ border:"none", overflow: "hidden"}} 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                title="facebook-embed-elon-musk-socialist?"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default Widgets
