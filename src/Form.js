import React, { Fragment, useState } from 'react';


const Funcionalidad = () => {

    const [numeros, setNumeros] = useState({
        numero: ''

    })

    const handleInputChange =(event) =>{
     setNumeros({
     ...numeros,
     [event.target.name]: [event.target.value]


     })
    

    }

    const enviarDatos = (event) =>{
    event.preventDefault();
   
 numeros.numero.push(numeros.numero)
 console.log(numeros)

    }

   
    return (
        <Fragment>
          
            
            
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input placeholder="Ingresa Número"
                        className="form-control"
                        type="number"
                        name="numero"
                        onChange={handleInputChange}
                        >
                        
                    </input>


                </div>
                <div className="col-md-3">
                    <button className="btn btn-info" type="submit">Enviar
</button>


                </div>


                <pre>
          {datas.map((data, i) =>
            <li key={i} >
               {data.number}
          
            </li>
          )}
        </pre>

            </form>
    
        </Fragment>

    );
}

export default Funcionalidad;
