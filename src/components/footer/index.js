import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( {
    footers: {
        width: '100%',
        marginBottom: '-1vw'
    }
});

const Footer = () => {

    const classes = useStyles();

    return (
        <img src="/images/Recurso-3.png" className={classes.footers} alt="imagefooter" />
    )
}

export default Footer;