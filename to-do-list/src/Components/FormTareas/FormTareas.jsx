import React from 'react'
import { useState } from 'react'
import Inputs from '../Inputs/Inputs'
import ListaDeTareas from '../ListaDeTareas/ListaDeTareas'

const FormTareas = () => {
    const tareaInicial = {
        nombre: "Lavar los platos",
        descripcion: "Lavar todos los cubiertos",
        estado: "false",
    }

    const [tarea, setTarea] = useState(tareaInicial)
    const [ListaTareas, setListaTareas] = useState([tarea])

    const handleLista = (e) => {
        e.preventDefault();
        setListaTareas([...ListaTareas, tarea])
    }
    return (
        <>
            <form onSubmit={handleLista}>
                < Inputs />
            </form>
            <ListaDeTareas lista={ListaTareas} />
        </>
    )
}

export default FormTareas