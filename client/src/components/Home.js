import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { profiles: [], };
  
  componentDidMount() {
    axios.get('/api/my_friends')
      .then(res => this.setState({ profiles: res.data, }))
  }
  
  sample = () => {
    const { profiles, } = this.state;
    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length);
      return profiles[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    let { profiles, } = this.state;
    this.setState({ profiles: profiles.filter( c => c.id !== id ), });
  }
  
  upvote = (id) => {
    let { profiles, } = this.state;
    axios.put(`/api/profiles/${id}`)
      .then( () => this.setState({ profiles: profiles.filter( c => c.id !== id ), }) )
  }

  render() {
    const profile = this.sample();
    if (profile) {
      return (
        <div>
          <br />
          <Header as='h1'>Mice Pace</Header>
          <br />
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>
                { profile.name }
              </Card.Header>
              <Card.Description>
                { profile.location }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_profiles">
            <Button color="blue">
              My profiles
            </Button>
            <Button color="red" icon basic onClick={() => this.downVote(profile.id)}>
              <Icon name="thumbs down" />
            </Button>
            <Button color="green" icon basic onClick={() => this.upvote(profile.id)}>
              <Icon name="thumbs up" />
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More profiles</Header>
    }
  }
}

export default Home;