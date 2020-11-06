/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StudentData from './StudentData';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		flexGrow: 1,
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
}));

export default function Dashboard() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<Typography edge='start' variant='h6' noWrap>
						Dashboard
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper,
				}}>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<Router>
						<List>
							{/* <Link  className={classes.link}>
								<ListItem button>
									<ListItemIcon>
										<SupervisedUserCircleIcon />
									</ListItemIcon>
									<ListItemText primary='Faculties' />
								</ListItem>
							</Link> */}
							<Link className={classes.link}>
								<ListItem button>
									<ListItemIcon>
										<AccountTreeIcon />
									</ListItemIcon>
									<ListItemText primary='Departments' />
								</ListItem>
							</Link>
							<Link className={classes.link} to='/staff/dashboard/students'>
								<ListItem button>
									<ListItemIcon>
										<PeopleAltIcon />
									</ListItemIcon>
									<ListItemText primary='Students' />
								</ListItem>
							</Link>
							<Link className={classes.link}>
								<ListItem button>
									<ListItemIcon>
										<CallToActionIcon />
									</ListItemIcon>
									<ListItemText primary='Requests' />
								</ListItem>
							</Link>
						</List>
						<Divider />
						<List>
							<Link className={classes.link}>
								<ListItem button>
									<ListItemIcon>
										<EmailIcon />
									</ListItemIcon>
									<ListItemText primary='Go Mail' />
								</ListItem>
							</Link>
							<Link className={classes.link}>
								<ListItem button>
									<ListItemIcon>
										<TodayIcon />
									</ListItemIcon>
									<ListItemText primary='Calender' />
								</ListItem>
							</Link>
						</List>
					</Router>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Route path='/staff/dashboard/students' component={StudentData} />
			</main>
		</div>
	);
}
