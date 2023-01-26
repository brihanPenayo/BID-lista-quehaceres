import React from 'react'

const ListaDeTareas = ({ lista }) => {
    return (
        <div>
            {lista.map((tarea, idx) => {
                return (
                    <p key={idx}>{tarea.nombre}</p>
                );
            })}
        </div>
    )
}

export default ListaDeTareas