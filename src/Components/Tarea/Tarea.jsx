import React from 'react'
import styles from './Tarea.module.css'

const Tarea = ({ tarea, handleStado, handleBorrar, index }) => {

    return (
        <div className={styles.tarea}>
            <div className={styles.titulo}>
                {tarea.estado === true ?
                    <h2><s>{tarea.titulo}</s></h2> : <h2>{tarea.titulo}</h2>}
                <div className={styles.opciones}>
                    <input className={styles.check} type="checkbox" checked={tarea.estado} name="estado" onChange={(e) => { handleStado(e.target.checked, index) }} />
                    <button className={styles.eliminar} onClick={(e) => { handleBorrar(index) }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24" height="24"><path fill="none"
                                d="M0 0h24v24H0z" /><path fill="currentColor"
                                    d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tarea