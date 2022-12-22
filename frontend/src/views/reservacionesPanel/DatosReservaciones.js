import React from 'react';

import "./ReservacionesPanel.css"

function DatosReservaciones(props) {

    const { data } = props

    const { usuario, moto, adelantomonetario, fecha } = data

   
        return (
            <div className='transaction grid card'>
                <p className='usuario'>{usuario}</p>
                <p className='moto'>{moto}</p>
                <p className='adelantomonetario'>{adelantomonetario}</p>
                <p className='fecha'>{fecha}</p>
            </div>
        );
    
}

export default DatosReservaciones;