import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {
  let { id } = useParams();
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            />
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group <strong>musicians</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
