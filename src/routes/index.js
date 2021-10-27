import React from "react";
import MainLayout from "../layout";
import {
    Route as DefaultRoute,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import useScreens from "../views";

const Route = ({
                   component: Component,
                   layout: Layout = Component.Layout || MainLayout,
                   propsLayout = Component.props,
                   ...rest
               }) => {
    return (
        <DefaultRoute
            {...rest}
            render={(props) => (
                <Layout {...propsLayout}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}

const Routes = () => {
    const {
        Home,
    } = useScreens();

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}
export default Routes;