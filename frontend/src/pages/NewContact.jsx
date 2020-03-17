import React from 'react'
import Contact from '../models/Contact';
import axios from 'axios';

export default class newContact extends React.Component   {
    state ={
        id:"",
        name:"",
        lastName:"",
        email:"",
        birthDate: "",
        phone:"",
    }


   handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }
    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value});
    }
    handleEmailChange = (e) => {
      this.setState({email: e.target.value});
    }
    handleBirthDateChange = (e) => {
        this.setState({birthDate: e.target.value});
    }
    handlePhoneChange = (e) => {
        this.setState({phone: e.target.value});
    }

    handleNewContact =()=>{
        const newContact = new Contact(this.state);

        if(newContact.name !=="" && newContact.lastName !== ""){
            axios
            .post('http://localhost:9000/contactAPI/new', newContact)
            .then(() => {
                alert("Contacto creado");
                this.setState({
                    id:"",
                    name:"",
                    lastName:"",
                    email:"",
                    birthDate: "",
                    phone:"",
                })
            })
            
            .catch(err => {
                console.error(err);
                alert("Ocurrio un error. Intente nuevamente");
            });
        }
    }

    render(){
        return (
            <form className = "NewContactForm">
                <div style={{marginTop:20 }}>
                    Nombre: 
                </div>   
                <input className = "NameInput" name = "Nombre" required value={this.state.name} onChange={this.handleNameChange}></input>
                {this.state.name==="" &&                
                    <span style={{color:'red'}}>Requerido </span>
                }
                <div style={{marginTop:20 }}>
                    Apellido:
                </div> 
                <input className = "LastNameInput" name = "Apellido" required value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                {this.state.lastName==="" &&                
                    <span style={{color:'red'}}>Requerido </span>
                }
                <div style={{marginTop:20 }}>
                    Email:
                </div>
                <input className = "EmailInput" type = "email" name = "Email" value={this.state.email} onChange={this.handleEmailChange}></input>
                <div style={{marginTop:20 }}>
                    Fecha de nacimiento:
                </div>
                <input className = "BirthDateInput" type = "date" name= "Fecha de nacimiento"value={this.state.birthDate} onChange={this.handleBirthDateChange}></input>
                <div style={{marginTop:20 }}>
                    Telefono
                </div>
                <input className = "PhoneInput" type="number" name = "Numero de telefono"value={this.state.phone} onChange={this.handlePhoneChange}></input>
                <div style={{margin:20 }}>
                   <button type="button" onClick={this.handleNewContact}>Nuevo contacto</button>
                </div> 
            </form>
        );
    }
}
