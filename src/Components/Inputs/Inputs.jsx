import React from 'react'
import styles from './Inputs.module.css'

const Inputs = ({ tarea, onChange }) => {
    return (
        <div className={styles.form}>
            <div>
                <label htmlFor="tarea"> Tarea: </label>
                <input name="titulo" type="text"
                    required placeholder='Ingrese tarea'
                    onChange={onChange} value={tarea.titulo} />
                <button type='submit'>Crear Tarea</button>
            </div>
        </div>
    )
}



export default Inputs