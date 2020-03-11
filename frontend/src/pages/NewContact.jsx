import React from 'react'
import Contact from '../models/Contact';
// import { Link } from 'react-router-dom'

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
        console.log(newContact);
    }

    render(){
        return (
            <form className = "NewContactForm">
                <input className = "NameInput" name = "Nombre" value={this.state.name} onChange={this.handleNameChange}></input>
                <input className = "LastNameInput" name = "Apellido" value={this.state.lastName} onChange={this.handleLastNameChange}></input>
                <input className = "EmailInput" type = "email" name = "Email" value={this.state.email} onChange={this.handleEmailChange}></input>
                <input className = "BirthDateInput" type = "date" name= "Fecha de nacimiento"value={this.state.birthDate} onChange={this.handleBirthDateChange}></input>
                <input className = "PhoneInput" name = "Numero de telefono"value={this.state.phone} onChange={this.handlePhoneChange}></input>
                <button type="button" onClick={this.handleNewContact}>Nuevo contacto</button>
            </form>
        );
    }
}
