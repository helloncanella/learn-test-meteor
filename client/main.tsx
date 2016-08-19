import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    ReactDOM.render(<h1>olá</h1>, document.getElementById('react-app'));        
})