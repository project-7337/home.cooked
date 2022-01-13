import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import '../../styles/styles.css';
import Rating from "@material-ui/icons/StarRate";
import {
	Box,
	Grid,
	Chip,
	Typography,
	Card, CardActionArea, CardMedia, CardActions, CardContent, Button,
	Paper,
	IconButton
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		// display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: '100%',
			height: theme.spacing(16),
		},
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		display: 'flex',
		flexGrow: 1,
		borderRadius: 30,
		color: theme.palette.text.secondary,
	},
	cardContent: {
		height: '80px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	card: {
		height: '100%',
		borderRadius: 20
	},
	paperDiv: {
		flexGrow: 1,
		display: 'flex',
		// height: '100%',
	},
	rate: {
		color: 'white',
		backgroundColor: 'green',
		borderRadius: 5,
		justifyContent: 'center',
		padding: '1px'
	},
	media: {
		height: 160,
		borderRadius: 10,
		margin: theme.spacing(1)
	},
}))

export default function RestaurantData(props) {
	const classes = useStyles()
	let iconStyles = { color: "white", fontSize: "1rem" };

	return (
		<div className={classes.root}>
			<div className={classes.paperDiv}>
				<Grid container spacing={3} >
					{undefined !== props.data && props.data.map((data, index) => (

						<Grid item xs={12} sm={6} md={4} >
							<Card className={classes.card}>
								<CardMedia
									className={classes.media}
									image={data.image_url}
									title={data.name}
								/>
								<CardContent className={classes.cardContent} >
									<Grid container wrap="nowrap" spacing={2}>
										<Grid item xs zeroMinWidth>
											<Typography noWrap gutterBottom variant="body1" component="h2">
												{data.name}
											</Typography>
										</Grid>
										<Grid item>
											{/* <Chip icon={<Rating fontSize='small'/>}  size='small' label={data.rate} color='primary'/> */}
											<Box className={classes.rate} >
												{data.rate}
												<Rating style={iconStyles} />
											</Box>
										</Grid>
									</Grid>
									<Grid container wrap="nowrap" spacing={2}>
										<Grid item xs zeroMinWidth>
											<Typography noWrap variant="body2" color="textSecondary" component="p">
												{data.cuisines}
											</Typography>
										</Grid>
										<Grid item>
										<Typography noWrap variant="body2" color="textSecondary" component="p">
										₹{data.costForTwo} for two
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	)
}