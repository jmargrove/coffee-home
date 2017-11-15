import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './login-page.css';
import styles from './style.json';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

class Login extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <AppBar showMenuIconButton={false} style={styles.appbarStyle} title="the  coffee app" titleStyle={styles.ts}/>

        <Paper  className="mainPage" style={styles.style} zDepth={1}>
          {/* <div className="logo-box">
            <div className="logo"></div>
          </div>

          <div className="login-signup">
            <RaisedButton style={styles.smallbutton}>login</RaisedButton>
            <RaisedButton style={styles.smallbutton}>sign-up</RaisedButton>
          </div>
          <TextField underlineFocusStyle={styles.us} floatingLabelStyle={styles.Fls} floatingLabelText="Username" style={styles.input} hintText="USERNAME"/>
          <TextField underlineFocusStyle={styles.us} floatingLabelStyle={styles.Fls} floatingLabelText="Password" type="password" style={styles.input} hintText="PASSWORD"/>
          <RaisedButton href='/home' style={styles.goButton}>GO!</RaisedButton>
          <div className="orline">___________or___________</div>
          <div>sign-up with </div>
          <div className="fb-goog">
            <RaisedButton >Facebook</RaisedButton>
            <RaisedButton >Google</RaisedButton>
          </div> */}

          <FacebookLogin
            appId="503732776652253"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </Paper>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default (Login);
