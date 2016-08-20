import * as React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { saveData } from '../../imports/api/saveData';

export interface ContactFormState{name?: string, email?: string}

export class ContactForm extends React.Component<{}, ContactFormState >{

    constructor(){
        super();
        this.state = {name:'',email:''};
    }

    _handleEmailChange(e){                
        this.setState({email: e.target.value})
    }

    _handleNameChange(e){
        this.setState({name: e.target.value})
    }
    
    _handleSubmit(e){
        e.preventDefault();

        var email = this.state.email;
        var name = this.state.name;
 
        saveData.call({name: name, email: email})

        this._cleanFields();
    }

    _cleanFields(){
        this.setState({name:'', email:''});
    }    
    
    render(){
        return (

            //.bind(this) is being attached in order the tests work properly 
            <form onSubmit={this._handleSubmit.bind(this)}>
                <input id="name" type="text" value={this.state.name} name="name" placeholder="email" onChange={this._handleNameChange.bind(this)}/>
                <input id="email" type="email" value={this.state.email} name="email" placeholder="name" onChange={this._handleEmailChange.bind(this)}/>
                <input id="submit" type="submit" value="send"/>
            </form>
        );
    }
} 

