import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Weather from "./components/Weather";

export default () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Weather} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};
