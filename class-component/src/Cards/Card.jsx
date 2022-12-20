import { Component } from "react";
import { faker } from "@faker-js/faker";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class CardChild extends Component {
  render() {
    const customer = {
        first_name: 'Bob',
        last_name: 'Dylan'
    }
    const animals = ["Horse", "Turtle", "Elephant", "Monkey"]
    function displayAnimals(arr) {
        arr.map((item) => console.log(item));
    }
    return (
      <Card>
        <Card.Content>
          <Image floated="center" src={faker.image.avatar()} />
          <Card.Header>{faker.name.fullName()}</Card.Header>
          <Card.Meta>Friends of {customer.last_name}, {customer.first_name}</Card.Meta>
          <Card.Description>
            {faker.name.firstName('female')} is a sound engineer living in Nashville who
            enjoys playing guitar and hanging with his cat{displayAnimals(animals)}.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CardChild;
