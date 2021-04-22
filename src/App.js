import React, { Component } from 'react'
import Photogallerydashboard from './Components/Dashboard'
import { ThemeProvider } from './Context/Themecontext'
import Pagecontent from './Components/Pagecontent'
import Signupform from './Components/Signupform'
import {auth} from './firebase/config'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		auth.onAuthStateChanged(userAuth => {
			this.setState({ user: userAuth});
		});
	}

	render() {
		return(
			<div>
				<div className="App">
					{
						this.state.user ? (<ThemeProvider>
							<Pagecontent>
							<Photogallerydashboard userData={this.state.user} />
							</Pagecontent>
						</ThemeProvider>) : (<Signupform />)
					}
				</div>
			</div>
		)
	}
}

export default App;