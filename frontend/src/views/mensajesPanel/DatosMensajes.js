import React from 'react';

import "./MensajesPanel.css"

function DatosMensajes(props) {

    const { data } = props

    const { emisor, fechayhora, mensaje } = data

   
        return (
            <div className='transaction grid card'>
                <p className='emisor'>{emisor}</p>
                <p className='fechayhora'>{fechayhora}</p>
                <p className='mensaje'>{mensaje}</p>              
            </div>
        );
    
}

export default DatosMensajes;