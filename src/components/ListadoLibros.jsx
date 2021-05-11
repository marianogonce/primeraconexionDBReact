import React, { useEffect} from "react";


export default function Libros(props){

    const listadoLibros = props.listadoLibros;
    const traerLibros = props.traerLibros;

    useEffect(()=> {traerLibros()}, []);
    
    let zonaListado;
   
    if(listadoLibros) {zonaListado = listadoLibros.map( elemento => <div key={elemento.id}>{elemento.nombre}</div>)}

    return(
        <div id="listadoGeneros">            
        <h2>Listado de Libros</h2>
        <h3>TP M5 U4 - Ciclos de vida y Conexión con el Servidor</h3>
        <h4>Goncevatt Torres Mariano</h4>
        <br/>
        <h5>Listado</h5>
        {zonaListado}
        </div>
    )
}