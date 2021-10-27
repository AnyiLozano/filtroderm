import React from 'react';
import useComponents from "../components";

const MainLayout = props => {
    const {children} = props;
    const {
        Header,
        Footer
    } = useComponents();

    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer />
        </React.Fragment>
    )
}
export default MainLayout;