import React from 'react'
import { useState } from 'react'
import Inputs from '../Inputs/Inputs'
import ListaDeTareas from '../ListaDeTareas/ListaDeTareas'

const FormTareas = () => {
    const tareaInicial = {
        titulo: "",
        descripcion: "",
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
    }
    return (
        <>
            <form onSubmit={handleLista}>
                < Inputs onChange={handleTarea} tarea={tarea} />
            </form>
            <ListaDeTareas lista={ListaTareas} />
        </>
    )
}

export default FormTareas