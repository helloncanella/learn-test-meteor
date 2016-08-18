import * as React from 'react';
import * as ReactDOM from 'react-dom';


Meteor.startup(() => {
    ReactDOM.render(<h1>olá</h1>, document.getElementById('react-app'));        
})