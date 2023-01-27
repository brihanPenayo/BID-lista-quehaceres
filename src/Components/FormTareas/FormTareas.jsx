import React from 'react'
import { useState } from 'react'
import Inputs from '../Inputs/Inputs'
import ListaDeTareas from '../ListaDeTareas/ListaDeTareas'
import styles from './FormTareas.module.css'

const FormTareas = () => {
    const tareaInicial = {
        titulo: "",
        estado: false
    }

    const [tarea, setTarea] = useState(tareaInicial)
    const [ListaTareas, setListaTareas] = useState([])

    const handleTarea = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const handleLista = (e) => {
        e.preventDefault();
        setListaTareas([...ListaTareas, tarea])
        setTarea(tareaInicial)
    }

    const handleStado = (estado, idx) => {
        let aux = [...ListaTareas];
        aux[idx].estado = estado;
        setListaTareas([...aux]);
    }

    const handleBorrar = (idx) => {
        let aux = [...ListaTareas];
        let filtered = aux.filter((estado, index) => index !== idx)
        setListaTareas([...filtered]);
    }


    return (
        <>
            <form onSubmit={handleLista}>
                < Inputs onChange={handleTarea} tarea={tarea} />
            </form>
            <div className={styles.seccionTareas}>
                <ListaDeTareas lista={ListaTareas} handleBorrar={handleBorrar} handleStado={handleStado} />
            </div>
        </>
    )
}

export default FormTareas