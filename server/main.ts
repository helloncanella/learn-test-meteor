import { saveData } from '../imports/api/saveData';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    [saveData.name]: function (args) {
      saveData.validate.call(this, args);
      saveData.run.call(this, args);
    }
  });
})