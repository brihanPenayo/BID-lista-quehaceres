import React from 'react'
import Tarea from '../Tarea/Tarea';

const ListaDeTareas = ({ lista }) => {
    return (
        <div>
            {lista.map((tarea, idx) => {
                return (

                    <Tarea tarea={tarea} key={idx} />

                );
            })}
        </div>
    )
}

export default ListaDeTareas