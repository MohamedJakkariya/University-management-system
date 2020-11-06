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
import CallToActionIcon from '@material-ui/icons/CallToAction';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StudentData from './StudentData';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
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
		color: 'black',
	},
}));

export default function Dashboard() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<Typography edge='start' variant='h6' noWrap>
						Dashboard
					</Typography>
					<Box>
						<Button color='inherit'>Welcome Indu</Button>
						<Link to='/'>
							<Button color='inherit'>
								<ExitToAppIcon />
							</Button>
						</Link>
					</Box>
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
				<StudentData />
			</main>
		</div>
	);
}
