import React from 'react'
import Tarea from '../Tarea/Tarea';

const ListaDeTareas = ({ lista, handleBorrar, handleStado }) => {
    return (
        <>
            {lista.map((tarea, idx) => {
                return (
                    <Tarea tarea={tarea} key={idx} index={idx} handleBorrar={handleBorrar} handleStado={handleStado} />
                );
            })}
        </>
    )
}

export default ListaDeTareas