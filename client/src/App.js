/** @format */

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './auth/login';
import { Dashboard } from './staff';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					{/* Home page shows default by login page  */}
					<Route exact path='/' component={Login} />

					{/* Go to staff dashboard  */}
					<Route path='/staff/dashboard' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
