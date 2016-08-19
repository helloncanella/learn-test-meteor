import * as React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Contact, ContactProps} from '../Contact/Contact.tsx';
import  Contacts  from '../api/contacts.js';


export interface ContactListProps{contacts: Array<ContactProps>}

class ContactList extends React.Component<ContactListProps,{}>{

} 

export default createContainer(()=>{
    return {
        contacts: Contacts.find({}).fetch()
    }
},ContactList)

