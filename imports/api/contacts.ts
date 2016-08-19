import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

var Contacts = new Mongo.Collection('contacts');

export default Contacts;
