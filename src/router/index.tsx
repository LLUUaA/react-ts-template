import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, index) => {
                        return <Route key={index} {...route} />
                    })
                }
            </Switch>
        </Router>
    )
}