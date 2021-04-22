import React, { Component } from 'react'
import Photogallerydashboard from './Components/Dashboard'
import { ThemeContext, ThemeProvider } from './Context/Themecontext'
import Pagecontent from './Components/Pagecontent'

class App extends Component {
	render() {
		return(
			<div>
				<div className="App">
					<ThemeProvider>
						<Pagecontent>
							<Photogallerydashboard />
						</Pagecontent>
					</ThemeProvider>
				</div>
			</div>
		)
	}
}

export default App;