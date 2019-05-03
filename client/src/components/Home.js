import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Image, Card, Button, Icon } from "semantic-ui-react";

class Home extends React.Component {
  state = { profiles: [] };

  componentDidMount() {
    axios
      .get("/api/profiles")
      .then(res => this.setState({ profiles: res.data }));
  }

  sample = () => {
    const { profiles } = this.state;
    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length);
      return profiles[index];
    } else {
      return null;
    }
  };

  downVote = id => {
    let { profiles } = this.state;
    this.setState({ profiles: profiles.filter(c => c.id !== id) });
  };

  upvote = id => {
    let { profiles } = this.state;
    axios
      .put(`/api/profiles/${id}`)
      .then(() =>
        this.setState({ profiles: profiles.filter(c => c.id !== id) })
      );
  };

  render() {
    document.body.style.backgroundImage = "url(https://imgur.com/uWAXVnt.png)";
    const profile = this.sample();
    if (profile) {
      return (
        <>
          <Link
            to="/my_profiles"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button color="blue">My liked profiles</Button>
          </Link>
          <br />
          <Header
            as="h1"
            style={{
              textAlign: "center",
              border: "solid",
              backgroundColor: "white",
              borderColor: "purple",
              marginLeft: '30%',
              marginRight: '30%'
            }}
          >
            Mice Pace
          </Header>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card key={profile.id} style={{ textAlign: "center" }}>
              <Image src={profile.avatar} />
              <Card.Content>
                <Card.Header>{profile.name}</Card.Header>
                <Card.Description>{profile.location}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button
                    color="red"
                    size="huge"
                    icon
                    basic
                    onClick={() => this.downVote(profile.id)}
                    style={{ marginRight: "10px" }}
                  >
                    <Icon name="thumbs down" />
                  </Button>
                  <Button
                    color="green"
                    size="huge"
                    icon
                    basic
                    onClick={() => this.upvote(profile.id)}
                  >
                    <Icon name="thumbs up" />
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          </div>
        </>
      );
    } else {
      return <Header textAlign="center">No More profiles</Header>;
    }
  }
}

export default Home;
