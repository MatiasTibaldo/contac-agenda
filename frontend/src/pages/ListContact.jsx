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
        axios
        .get('http://localhost:9000/contactAPI/list')
        .then((res) => {
            var list = []
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
    

    render(){
        console.log(this.state.listContact);
        this.items = this.state.listContact.map((item, key) =>
            <li key={key}>
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
                    {item.brithDate}
                </div>
                <div> 
                    Email: 
                    {item.email}
                </div>
                <div> 
                    Telefono: 
                    {item.phone}
                </div>
                <div> ----- </div>
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
