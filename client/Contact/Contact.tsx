import * as React from "react";

export interface ContactProps {name:string, email: string};

export class Contact extends React.Component<ContactProps, any>{    
    render(){
        return(
            <div className="contact">
                <div className="name">{this.props.name}</div>
                <div className="email">{this.props.email}</div>
            </div>
        ); 
    }
}


// <div className="contact"></div>   