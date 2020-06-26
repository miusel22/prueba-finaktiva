import React, { useState } from 'react';

const opciones = ['Ordenar de mayor a menor', 'Ordenar de menor a mayor', 'Sumar todos', 'Multiplicar números por si mismo']
const arrays=['hola' , 'k onda']
function Seleccion(props) {


    const [idopciones, setOpciones] = useState(-1);
    const array = props

     const handleChange=function(e){
         const opcion= e.target.value
         console.log(opcion)
         setOpciones(opcion); //cambianado el valor 
     }



    return (
        <>
<select className="form-control" id="exampleFormControlSelect1" onClick={handleChange}>
            <option value={-1}>
                Elige una clasificación
                                                  </option>
            {opciones.map((
                e, i //pintamos el objeto que está en clasificacion para convertirlo en una lista.
            ) => (
                    <>
                        <option key={"opcion"+i} value={i}>{e}</option>
                    </>
                ))}
        </select>

        <div>
            { 

                idopciones == 1 ? 
               
               <h3>Hola</h3>


                :<h1></h1>
               
            }
             {
                idopciones == 2 ? 
                

                        
                    arrays.map((data, i) =>
                        <li key={i} >
                            {data}

                        </li>
                    )
                
 
 
                 :<h1></h1>
                
                }
        </div>
        </>


    )

}

export default Seleccion;