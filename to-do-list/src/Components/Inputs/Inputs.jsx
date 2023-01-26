import React from 'react'

const Inputs = ({ tarea, onChange }) => {
    return (
        <div>
            <label htmlFor="tarea"> Tarea:
                <input name="titulo" type="text"
                    required placeholder='Ingrese tarea'
                    onChange={onChange} value={tarea.titulo} /></label>
            <label htmlFor="descripcion"> Tarea:
                <textarea name="descripcion" id="descripcion" cols="30" rows="4"
                    onChange={onChange} value={tarea.descripcion} placeholder="Ingrese Descripcion" />
            </label>
            <button type='submit'>Crear Tarea</button>
        </div>
    )
}



export default Inputs