import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [tarea, setTarea] = useState("")
	let [lista, setLista] = useState([])

	const escribirTarea = (event) => {
		setTarea(event.target.value)
	}
	const agregar = (event) => {
		if (event.key === "Enter") {
			setLista([...lista, tarea])
			setTarea("")
		}
	}
const eliminarTarea = (posicion) =>{
	setLista(lista.filter((item, index)=>index!==posicion))
}
	return (
		<div className="text-center">
			<input type="text" placeholder="agrega una tarea" onChange={escribirTarea} value={tarea} onKeyDown={agregar} />
			<ul className="list-unstyled">
				{lista.map((item, index) => (<li key={index}>{item}<span onClick={()=>eliminarTarea(index)}> ❌ </span></li>))}
			</ul>
		</div >
	)

}
export default Home;