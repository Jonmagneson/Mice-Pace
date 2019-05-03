import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, Button, Icon, } from 'semantic-ui-react';

class MyProfiles extends React.Component {
  state = { profiles: [], };

  componentDidMount() {
    axios.get('/api/my_profiles')
      .then( res => this.setState({ profiles: res.data, }) );
  }

  handleDelete = () => {
    axios.delete("./api/")
  }

  render() {
    const { profiles, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { profiles.map( profile =>
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { profile.name }
              </Card.Header>
              <Card.Meta>
                {profile.location}
              </Card.Meta>
            </Card.Content>
            <Button
              style={{ color: "#DA0909" }}
              inverted
              size="small"
              onClick={() => this.handleDelete()}
            >
              <Icon name="trash alternate" />
            </Button>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyProfiles;