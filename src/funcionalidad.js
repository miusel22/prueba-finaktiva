import React, { Fragment, Component} from 'react';
import Seleccion from './seleccion';
class Funcionalidad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            act: 0,
            index: '',
            datas: [],
            opcionT:'',
            /*opciones: ['Ordenar de mayor a menor', 'Ordenar de menor a mayor', 'Sumar todos', 'Multiplicar números por si mismo']*/
        }
    }

   

    fSubmit = (e) => {
        e.preventDefault();

        let datas = this.state.datas;
        let number = this.refs.number.value;


        if (this.state.act === 0) {  
            let data = {
                number
            }
            datas.push(data);
        }

        this.setState({
            datas: datas,
            act: 0
        });
 

    }

     handleChange=function(e){
        const opcion= e.target.value
        opcion=="Ordenar de mayor a menor" ?
        console.log(opcion)
        :console.log("mai")
    
       
    }

 
   
    

    
    ordenarmayor = (e) => {
        e.preventDefault();

        let datas = this.state.datas;
        let number = this.refs.number.value;
        console.log("wey")
    
    }

    

    


    render() {
        let datas = this.state.datas;
        let opciones = this.state.opciones;
        
     



        return (

            <Fragment>
                <form  className="form-control row">
                    <div className="col-md-3">
                        <input placeholder="Ingresa Número"
                            className="form-control"
                            type="number"
                            ref="number" //con esta referncia cambiamos el estado
                            name="number"
                            required
                        >

                        </input>


                    </div>
                    <div className="col-md-3">
                        <button onClick={(e) => this.fSubmit(e)} className="btn btn-info" type="submit">Enviar
</button>


                    </div>




                    <pre>
                        
                        {

                        
                        datas.sort().map((data, i) =>
                            <li key={i} >
                                {data.number}

                            </li>
                        )}
                        
                    </pre>

                </form>
                <select className="form-control" id="exampleFormControlSelect1" onClick={this.handleChange}>
            <option >Elige una clasificación </option>
            <option>Ordenar de mayor a menor </option>
            <option >Ordear de menor a mayor </option>


                   
            
        </select>
       
        {

          
        }

            </Fragment>



        );
    }
}

export default Funcionalidad;