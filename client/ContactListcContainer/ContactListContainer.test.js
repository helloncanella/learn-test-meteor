import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import { shallow } from 'enzyme';
import  ContactListContainer  from './ContactListContainer.tsx';
import { Contact } from '../Contact/Contact.tsx';
import  faker  from 'faker'; 

var expect = chai.expect;

describe('<ContactListContainer />', function(){

    var ContactListCollection;

    beforeEach(()=>{

        //creating a local collection
        ContactListCollection = new Meteor.Collection(null);

        Factory.define('contactListItem', ContactListCollection, {
            name: () => faker.name.findName(),
            email: () => faker.internet.email()
        });
    
    })

    it('renders contact list from database', function(){
 
        var randomInt = Math.ceil(Math.random()*10);

        for(var i=1; i<=randomInt; i++){
            var item = Factory.create('contactListItem');

        }
        
        console.log('item', ContactListCollection.findOne());

              

        // expect(contactList.find(Contact)).to.have.length(randomInt);
    })

});


