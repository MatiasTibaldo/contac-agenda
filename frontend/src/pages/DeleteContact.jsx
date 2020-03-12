import React from 'react'
import axios from 'axios';
import ListContact from './ListContact';

export default class EditContact extends React.Component   {
    state ={
        id:"",
    }

    handleDeleteContact =()=>{

        axios
        .delete(`http://localhost:9000/contactAPI/delete/${this.state.id}`)
        .then(() => {
            alert("Contacto eliminado");
        })
        
        .catch(err => {
            console.error(err);
            alert("Ocurrio un error. Intente nuevamente");
        });
    }

    onItemClick= (item) => {
        this.setState({
            id: `${item.name}-${item.lastName}-${item.birthDate}-${item.email}-${item.phone}`,
        });
        var r = window.confirm("Esta seguro de eliminar el contacto?");
        if(r===true){
            this.handleDeleteContact();
        }
    }

    render(){
        this.listContact =  <ListContact onItemClick={this.onItemClick} deleteOn={true}/>
        
        return (
            <div>
                {
                    this.listContact
                }
        </div>
        );
    }
}
