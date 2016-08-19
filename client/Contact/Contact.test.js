import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './Contact.tsx';

var expect = chai.expect;

describe('<Contact />', ()=>{

    var contact;

    it('should render name and email', ()=>{
        let name = "Hellon";
        let email = "helloncanella@gmail.com";

        const contact = shallow(<Contact name={name} email={email}/>);
        
        var renderedName =  contact.find('.name').text();
        var renderedEmail = contact.find('.email').text();

        expect(renderedName).to.equal(name);
        expect(renderedEmail).to.equal(email);
        
    })
})
