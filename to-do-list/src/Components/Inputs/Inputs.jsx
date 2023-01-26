import React from 'react'

const Inputs = () => {
    return (
        <div>
            <label htmlFor="tarea"> Tarea:
                <input id="tarea" type="text" required placeholder='Ingrese tarea' /></label>
            <button type='submit'>Crear Tarea</button>
        </div>
    )
}

export default Inputs