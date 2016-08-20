import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Contacts = new Mongo.Collection('contacts');

export const saveData = new ValidatedMethod({
    name: 'contacts.saveData',
    validate: new SimpleSchema({
        name: {type: String},
        email: {type: String}
    }).validator(),
    run({name, email}){
        Contacts.insert({name,email});
    }
});

