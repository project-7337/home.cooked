import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Components/login/Login'
import UserProfile from './Components/customer/UserProfile';
import CompleteProfile from './Components/customer/CompleteProfile'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import ThemeContextWrapper from './Themes/themeWrapper';

require('dotenv').config()

render((

	<BrowserRouter>
		<Provider store={store}>
		<ThemeContextWrapper>
			<Switch>

				<Route path={process.env.REACT_APP_PUBLIC_URL + "/login"} component={Login} />
				<Route path={process.env.REACT_APP_PUBLIC_URL + "/UserProfile"} component={UserProfile} />
				<Route path={process.env.REACT_APP_PUBLIC_URL + "/completeprofile"} component={CompleteProfile} />
				<Route component={App} />

			</Switch>
			</ThemeContextWrapper>
		</Provider>
	</BrowserRouter>
), document.getElementById('root'))

