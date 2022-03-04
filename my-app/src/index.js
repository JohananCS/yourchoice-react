import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Icon, Image, Grid, Button, Divider, Item } from 'semantic-ui-react';

//https://www.google.com/search?q=mojang&rlz=1C1CHBD_enUS959US959&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjdjrbvg6z2AhX0TjABHTDdDIMQ_AUoAnoECAEQBA&biw=960&bih=874&dpr=1#imgrc=bHBcLt6wFcz6IM

class Middle extends React.Component {

  render() {
    return (

      <Container>
        <br/>

        <Button.Group floated='right'>
          <Button><Image src='https://symbols.getvecta.com/stencil_88/98_mojang-icon.b892e76ca4.svg' height='20px'></Image></Button>
          <Button>Log in</Button>
          <Button>Games <Icon name='dropdown' size='small'/></Button>
          <Button>Help</Button>
        </Button.Group>
        <br/>

        <Image src='https://account.mojang.com/images/mojang_logo.png'></Image>
        <Grid columns={2} padded>
          <Grid.Column>
            <Header as='h1'>Your key to all things Minecraft Java Edition
            </Header>
            <Header as='h3'>
              Enjoy all that Minecraft: Java Edition has to offer with minimum fuss by creating a Minecraft profile using your Microsoft account. Your customizable profile grants you access to Minecraft: Java Edition as well as Minecraft
              Realms.
              <br/>
              <br/>
              Start your adventure!
              <br/>
              <br/>
            </Header>

            <Button size='huge' positive>Create an account</Button>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://assets2.rockpapershotgun.com/mccommunity1.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/mccommunity1.jpg' rounded/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

class Footer extends React.Component {

  render() {
    return (
      <Container>
        <br/>
        <br/>
        <Divider horizontal></Divider>
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column>
              Mojang Studios © 2022
            </Grid.Column>
            <Grid.Column>
              Manage Cookies
            </Grid.Column>
            <Grid.Column>
              Terms and Conditions
            </Grid.Column>
            <Grid.Column>
              Privacy Policy
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

class YourChoice extends React.Component {

  render() {
    return (
      <div>
        <Middle/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));