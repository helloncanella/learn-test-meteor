import * as React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Contact, ContactProps} from '../Contact/Contact.tsx';
import  Contacts  from '../../imports/api/contacts.ts';
import { Meteor } from 'meteor/meteor';

export interface ContactListProps extends ContactProps{contacts: [{name: string, email: string, _id: string}]}

class ContactList extends React.Component<ContactListProps,{}>{

    constructor(){
        super();
    }
    
    _renderContacts(){

        return this.props.contacts.map((contact)=>{
            let email = contact.email;
            let name = contact.name;
           
            
            return <Contact key={contact._id} name={name} email={email} />
        })
    }
    
    render(){
         return <div className="contactList">{this._renderContacts()}</div>;        
    }
} 

var ContactListContainer;



export default ContactListContainer = createContainer(()=>{

    Meteor.subscribe('contacts');
    
    return {
        contacts:Contacts.find({}).fetch() 
    }
},ContactList)

