import { Icon, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
	toolbarIcon: {
		marginLeft: 'auto'
	}
}))

export default function SessionInfo() {

	const classes = useStyles()
	const history = useHistory()

	const [state, setState] = React.useState({
		username: '',
		email: '',
		profilePic: ''
	})

	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleProfileMenuOption = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	React.useEffect(() => {
		let unmounted = false
		fetch("/api/v1/fetchSessionInfo", {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + Cookies.get('token')
			}
		})
		.then(response => {
			if (response.status === 403)
				history.push('login')
			return response.json()
		})
		.then(response => {
			if (!unmounted) {
				setState(state => ({
					...state,
					username: response.username,
					email: response.email,
					profilePic: response.profilePic
				}))
			}
		})
		return () => {
			unmounted = true
		}
	}, [])

	return (
		<Toolbar>
			<MenuItem onClick={handleProfileMenuOption} className={classes.toolbarIcon}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-name"
					aria-haspopup="true"
					color="inherit">
						<AccountCircleIcon/>
					</IconButton>
			</MenuItem>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				getContentAnchorEl={null}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal:"center" }}
				onClose={handleClose}>
					<MenuItem onClick={handleClose}>{state.username}</MenuItem>
					<MenuItem>Logout</MenuItem>
				</Menu>
		</Toolbar>
	)
}