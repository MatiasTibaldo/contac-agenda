import React from 'react'
import Contact from '../models/Contact';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class newContact extends React.Component   {
    state ={
        name:"",
        lastName:"",
        email:"",
        birthDate: undefined,
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

        if(newContact.name!==""&&newContact.lastName!==""){
            axios
            .post('http://localhost:9000/contactAPI/new', newContact)
            .then(() => {
                console.log('Contact Created');
                alert("Contacto creado");
            })
            
            .catch(err => {
                console.error(err);
            });
        }
    }

    render(){
        return (
            <form className = "NewContactForm">
                <div>
                    Nombre: 
                    <input className = "NameInput" name = "Nombre" required value={this.state.name} onChange={this.handleNameChange}></input>
                </div>
                <div>
                    Apellido:
                    <input className = "LastNameInput" name = "Apellido" required value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                </div>
                <div>
                    Email:
                    <input className = "EmailInput" type = "email" name = "Email" value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <div>
                    Fecha de nacimiento:
                    <input className = "BirthDateInput" type = "date" name= "Fecha de nacimiento"value={this.state.birthDate} onChange={this.handleBirthDateChange}></input>
                </div>
                <div>
                    Telefono
                    <input className = "PhoneInput" name = "Numero de telefono"value={this.state.phone} onChange={this.handlePhoneChange}></input>
                </div>
                <button type="button" onClick={this.handleNewContact}>Nuevo contacto</button>
            </form>
        );
    }
}
