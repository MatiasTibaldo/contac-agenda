import React from 'react'
import axios from 'axios';

export default class ListContact extends React.Component   {


    constructor(props) {
        super(props);
        this.state = {
            listContact: [],    
        };
      }

    componentDidMount =()=>{
        if(this.props.listContact===undefined){
            axios
            .get('http://localhost:9000/contactAPI/list')
            .then((res) => {
                var list = [];
                res.data.forEach((item)=>{
                    list.push(JSON.parse(item));
                })
                this.setState({
                    listContact:list,
                })
            })
            .catch(err => {
                console.error(err);
            });
        }
    }

    render(){
        const list = this.props.listContact ? this.props.listContact : this.state.listContact;
        this.items = list.map((item, key) =>
            <li key={key} style={{border: '1px solid black', margin: 10, maxWidth:500}}>
                <div > 
                    <div> 
                        <strong>
                            Nombre: 
                        </strong>
                        {item.name}
                    </div>
                    <div> 
                        <strong>
                            Apellido: 
                        </strong>
                        {item.lastName}
                    </div>
                    <div> 
                        Fecha de nacimiento: 
                        {item.birthDate}
                    </div>
                    <div> 
                        Email: 
                        {item.email}
                    </div>
                    <div> 
                        Telefono: 
                        {item.phone}
                    </div>
                </div>  
                {this.props.editOn && <button style={{display:"inline"}} onClick={()=>this.props.onItemClick(item,key)}>Editar</button>}
                {this.props.deleteOn && <button style={{display:"inline"}} onClick={()=>this.props.onItemClick(item, key)}>Eliminar</button>}
            </li>
        );
        return (
            <div>
                <h2>
                    Lista de contactos
                </h2> 
                {this.items}
            </div>
        );
    }
}
