import { Component } from "react";
import { faker } from "@faker-js/faker";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class CardChild extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated="center" src={faker.image.avatar()} />
          <Card.Header>{faker.name.fullName()}</Card.Header>
          <Card.Meta>Friends of {faker.name.firstName()}</Card.Meta>
          <Card.Description>
            {faker.name.firstName()} is a sound engineer living in Nashville who
            enjoys playing guitar and hanging with his cat.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CardChild;
