import React from 'react'

const Tarea = ({tarea}) => {
    
    return (
        <div>
            <h2>{tarea.titulo}</h2>
            <p>{tarea.descripcion}</p>
            <input type="checkbox" defaultChecked={tarea.estado} name="estado" />
            <button>Eliminar</button>
        </div>
    )
}

export default Tarea

// titulo
// estado
// boton borrar
// descripcion