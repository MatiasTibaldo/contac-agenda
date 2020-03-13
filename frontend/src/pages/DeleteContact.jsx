import React from 'react'
import axios from 'axios';
import ListContact from './ListContact';

export default class EditContact extends React.Component   {
    state ={
        id:"",
        deleteOn: true,
        listContact:[],
    }

    handleDeleteContact =(index)=>{

        axios
        .delete(`http://localhost:9000/contactAPI/delete/${this.state.id}`)
        .then(() => {
            alert("Contacto eliminado");
            var list = this.state.listContact;
            list.splice(index,1);
            this.setState({
                listContact:list,
            })
        })
        .catch(err => {
            console.error(err);
            alert("Ocurrio un error. Intente nuevamente");
        });
    }

    onItemClick= (item, index) => {
        this.setState({
            id: `${item.name}-${item.lastName}-${item.birthDate}-${item.email}-${item.phone}`,
            deleteOn:true,
        });
        var r = window.confirm("Esta seguro de eliminar el contacto?");
        if(r===true){
            this.handleDeleteContact(index);
        }
    }
    componentDidMount = () =>{
        axios
        .get('http://localhost:9000/contactAPI/list')
        .then((res) => {
            var list = []
            res.data.forEach((item)=>{
                list.push(JSON.parse(item));
            })
            this.setState({
                listContact:list,
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    render(){ 
        return (
            <ListContact onItemClick={this.onItemClick} deleteOn={this.state.deleteOn} listContact={this.state.listContact} />
        );
    }
}
