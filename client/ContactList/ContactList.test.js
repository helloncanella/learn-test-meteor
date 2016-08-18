import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import {shalow} from 'enzyme';
import ContactList from './ContactList.tsx';
import Contact from '../Contact/Contact.tsx';
import  faker  from 'faker'; 



describe('<ContactList />', function(){

    var ContactListCollection;

    beforeEach(()=>{
        //creating a local 
        ContactListCollection = new Meteor.Collection(null);

        Factory.define('contactListItem', ContactListCollection, {
            name: () => faker.name.findName(),
            email: () => faker.internet.email()
        });
    
    })

    it('renders contact list from database', function(){
 
        var randomInt = Math.ceil(Math.random()*10);

        for(var i=1; i<=randomInt; i++){
            console.log(Factory.create('contactListItem'));
        }

        console.log(ContactListCollection.findOne());

        
    })

});


