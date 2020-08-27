import React from 'react';
import './styles/Login.css'
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase';

function Login(){
	const signIn = () => {
		auth
		.signInWithPopup(provider)
		.then(result => {
			console.log(result)
		})
		.catch(error => {
			alert(error.message)
		})
	}
	return(
		<div className="login">
		<div className="login__container">
		<img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="" />
		<h1>Sign In to SonunDevs HQ</h1>
		<p>sonundevs.slack.com</p>
		<Button onClick={signIn}>Sign In with Google</Button>
		</div>
		</div>
		)
}



export default Login;