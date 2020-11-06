/** @format */

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Components/Auth/login';
import { Dashboard } from './Components/Staff';
import StudentData from './Components/Staff/StudentData';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					{/* Home page shows default by login page  */}
					<Route exact path='/' component={Login} />

					{/* Go to staff dashboard  */}
					<Route path='/staff/dashboard' component={Dashboard} />

					<Route
						exact
						path='/staff/dashboard/students'
						component={StudentData}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
