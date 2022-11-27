import { Component } from "react";
import { Button, Card, Image } from 'semantic-ui-react'
import CardChild from "./Card";

class Cards extends Component {          
    render(){
        return (
            <>
            <CardChild />
            <CardChild />  
            </>
            
        );
    }
}

export default Cards;