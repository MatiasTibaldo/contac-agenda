import React from 'react'
import axios from 'axios';

export default class ListContact extends React.Component   {


    constructor(props) {
        super(props);
        this.state = {
            listContact: [],   
            filterItems:[],
            filterOption:'lastName', 
            searchValue:'',
        };
      }
    
    handleChangeValue = (e) => {
        this.setState({
            searchValue:e.target.value,
        })
        this.filterItems(this.state.filterOption, e.target.value);
    }

    onChangeSelect= () =>{
        var e = document.getElementById("selectFilterOption");
        var strUser = e.options[e.selectedIndex].value;
        this.setState({
            filterOption:strUser,
        })
        this.filterItems(strUser, this.state.searchValue);
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
    
    filterItems =(  filterValue, searchValue) =>{
        var items = [];
        this.state.listContact.forEach((item)=>{
            if(filterValue==="lastName"){
                if(item.lastName.toLowerCase().indexOf(searchValue.toLowerCase())>-1){
                    items.push(item);
                }
            }
            if(filterValue==="phone"){
                if(item.phone.indexOf(searchValue)>-1){
                    items.push(item);
                }
            }
            if(filterValue==="name"){
                if(item.name.toLowerCase().indexOf(searchValue.toLowerCase())>-1){
                    items.push(item);
                }
            }
        })
        this.setState({
            filterItems:items,
        })
    }


    render(){
        this.items = this.state.filterItems.map((item, key) =>
            <li key={key} style={{border: '1px solid black', margin: 10, maxWidth:500}}>
                <div style={{display:"inline"}}> 
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
            </li>
        );
        return (
            <div>
                <h2>
                    Busqueda de contactos
                </h2> 
                <select id="selectFilterOption" value="lastName" onChange={()=>this.onChangeSelect()}>
                    <option value="name">Nombre</option>
                    <option value="lastName" >Apellido</option>
                    <option value="phone">Telefono</option>
                </select>
                <input className = "SearchValue" name = "SearchValue" value={this.state.searchValue} onChange={this.handleChangeValue}></input>
                {this.items}
            </div>
        );
    }
}
