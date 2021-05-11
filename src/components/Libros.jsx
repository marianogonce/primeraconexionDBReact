import ListadoLibros from "./ListadoLibros.jsx";
import axios from "axios";
import React, { useState } from "react";


export default function Libros(props) {
   
    const [listadoLibros, setListadoLibros] = useState();    

    async function traerLibros(){
        try{
            const url = 'http://localhost:3001/api/libro';
            const resp = await axios.get(url);
            if (resp.status===200) {
                setListadoLibros(resp.data);
            }
        }

        catch(e) {
            if(e.response){
                alert(e.response.data);
            } else {
                alert("Ocurrió un error en la solicitud")};
        }        
    }

    return (
        <div id = "contenedor">
        <ListadoLibros traerLibros={traerLibros} listadoLibros={listadoLibros}/>
        </div>
        )

}