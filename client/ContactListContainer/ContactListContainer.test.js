import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import  ContactListContainer  from './ContactListContainer.tsx';
import { Contact } from '../Contact/Contact.tsx';
import  faker  from 'faker';
import StubCollections from 'meteor/hwillson:stub-collections';
import  Contacts  from '../../imports/api/contacts.ts'; 

var expect = chai.expect;

describe('<ContactListContainer />', function(){

    var ContactListCollection;

    beforeEach(()=>{

        StubCollections.stub(Contacts);

        Factory.define('contactListItem', Contacts, {
            name: () => faker.name.findName(),
            email: () => faker.internet.email()
        });
    
    })

    afterEach(()=>{
        StubCollections.restore();
    })

    it('renders contact list from database', function(){
 
        var randomInt = Math.ceil(Math.random()*10);

        for(var i=1; i<=randomInt; i++){
            var item = Factory.create('contactListItem');
        }

        const contactListContainer = mount(<ContactListContainer />); 

        expect(contactListContainer.find(Contact)).to.have.length(randomInt);
        
    })

});


