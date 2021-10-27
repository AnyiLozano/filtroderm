import React from 'react';
import {
    AppBar, Container, Drawer, Grid, List, ListItem, ListItemText,
    makeStyles,
    Toolbar
} from "@material-ui/core";
import _ from "lodash";
import useHeader from "./hook";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'transparent',
        position: 'absolute',
        boxShadow: 'none'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        padding: '20px 0',
        width: '20%',
        '@media (min-width: 1540px)': {
            width: '20%',
            marginLeft: '-8vw'
        },
        '@media (min-width: 2100px)': {
            width: '20%',
            marginLeft: '-12vw'
        },
        '@media (max-width: 1200px)': {
            width: '20%',
            marginLeft: '-3vw'
        }
    },
    rouw: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        '@media (max-width: 1200px)': {
            display: 'none'
        }
    },
    lin: {
        textDecoration: 'none',
        paddingRight: '25px',
        fontSize: '25px',
        color: '#00225d',
        textTransform: 'uppercase',
        fontFamily: 'coves light, sans-serif',
        fontWeight: 600
    },
    butom: {
        color: '#00225d',
        display: 'none',
        '@media (max-width: 1200px)': {
            display: 'block'
        }
    }
}));

const Header = () => {
    const {links, handlerOpenDrawer, openDrawer} = useHeader();

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Container className={classes.toolbar}>
                    <img src="/images/Recurso-1@2x.png"
                         alt="logo" className={classes.logo}/>
                    <Grid container className={classes.rouw}>
                        {
                            _.map(links, (item, index) => (

                                <a href={`${item.path}${item.hash}`} key={index} className={classes.lin}>
                                    {
                                        item.name

                                    }
                                </a>
                            ))
                        }
                    </Grid>
                    <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.butom} onClick={(e) => handlerOpenDrawer(e, 'open')}>
                        <MenuIcon />
                    </IconButton>
                </Container>
                <Drawer anchor={"left"} open={openDrawer}>
                    <List>
                        <ListItem>
                                <ListItemText onClick={(e) => handlerOpenDrawer(e,'close')}>Cerrar Menu</ListItemText>
                        </ListItem>
                        {
                            _.map(links, (item, index) => (
                                <ListItem key={index}>
                                    <a href={`${item.path}${item.hash}`}>
                                        <ListItemText>{item.name}</ListItemText>
                                    </a>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

