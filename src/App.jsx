import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import RouterConfig from "./RouterConfig/Router";
import cn from "classnames";
import {
	Grid,
	CssBaseline
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Loading from "./Components/Loading/Loading";
import Header from './Components/ContentLeft/Header/Header';
import ContentLeftStyles from "./Assets/Jss/ContentLeftStyles";
import Home from './Components/ContentLeft/Home/Home';
import createBrowserHistory from "history/createBrowserHistory";
import Back from './Components/Back/Back';
const history = createBrowserHistory();
class App extends Component {
	render() {
		let { classes } = this.props;
		return (
			<Router history={history} basename="/">
				<Fragment>
					<CssBaseline />
					<Grid container>
						
						<Grid item xs={12} md={6} style={{ boxShadow : "0 0 6px 2px #00000080"}}>
							<div className={cn(classes.size, classes.background, classes.position)}>	
								<Header/>
								<Home />
							</div>
						</Grid>
						<Grid item xs={12} md={6} style={{ overflowY : "auto", position: "relative" }}>
							<Back />
							{this.RouterOutlet(RouterConfig)}
						</Grid>
					</Grid>
				</Fragment>
			</Router>
		);
	}
	RouterOutlet = (routes) => {
		let res = <Loading />;
		if (routes.length > 0) {
			res = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={`${process.env.PUBLIC_URL}${route.path}`}
						component={route.component}
						exact={route.exact}
					/>
				)
			})
		}
		return <Switch>{res}</Switch>;
	}
}

export default withStyles(ContentLeftStyles)(App);
