import React from 'react';

import "./ClientesPanel.css"

function DatosClientes(props) {

    const { data } = props

    const { nombre, apellido, email, numberphone } = data

   
        return (
            <div className='transaction grid card'>
                <p className='nombre'>{nombre}</p>
                <p className='apellido'>{apellido}</p>                
                <p className='email'>{email}</p>
                <p className='numberphone'>{numberphone}</p>              
            </div>
        );
    
}

export default DatosClientes;