import React, {useEffect, useState} from 'react';
import useProductsStyle from './products.style';
import {Container, Grid} from "@material-ui/core";
import 'animate.css';

const Products = () => {
    const [isMobile, setIsMobile] = useState(false);


    const handleSize = () => {
        const width = window.innerWidth;
        console.log(width)
        width <= 599 ? setIsMobile(true) : setIsMobile(false)
    }

    document.addEventListener('resize', () => handleSize());

    useEffect(() => {
        handleSize();
    }, [])
    console.log(isMobile)

    const {
        StyledImage,
        useStyle
    } = useProductsStyle();

    const [hover, setHover] = useState(false);
    const [time, setTime] = useState(0);


    const handleMouse = (type) => {
        if (type === 'over') {
            setHover(true);
        } else {
            setHover(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(time === 0){
                setTime(1);
                if(hover){
                    handleMouse('leave');
                } else {
                    handleMouse('over');
                }
            } else {
                if(hover){
                    handleMouse('leave');
                } else {
                    handleMouse('over');
                }
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [hover, time, setTime]);


    const classes = useStyle();

    return (
        <Container maxWidth="md">
            {
                !isMobile ? (
                    <React.Fragment>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6} className={classes.separator}>
                                {
                                    !hover ? (
                                        <StyledImage
                                            src="/images/Recurso-10.png"/>
                                    ) : (
                                        <React.Fragment>
                                            <div className="slide">
                                                <StyledImage  src="/images/hover.png"/>
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </Grid>
                            <Grid item xs={12} sm={6}  md={6}>
                                <StyledImage className={time === 0 ? "animate__animated animate__fadeInRight animate__delay-3s" : null} src="/images/text1.png"/>
                            </Grid>

                            <Grid item xs={12}  sm={6} md={6} className={[classes.container, classes.separator]}>
                                <StyledImage className={[time === 0 ? "animate__animated animate__fadeInLeft" : null, classes.seven]}  src="/images/text2.png"/>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} className={classes.container}>
                                <StyledImage className={time === 0 ? "animate__animated animate__fadeInRight animate__delay-5s" : null}  src="/images/polvos.png"/>
                            </Grid>
                        </Grid>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Grid container >
                            <Grid item xs={12} sm={6} md={6} className={classes.separator} style={{ display: "flex", justifyContent: "center" }}>
                                {
                                    !hover ? (
                                        <StyledImage className=""
                                                     src="/images/Recurso-10.png"/>
                                    ) : (
                                        <React.Fragment>
                                            <div className="slide" style={{ display: "flex", justifyContent: "center" }}>
                                                <StyledImage src="/images/hover.png"/>
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                            </Grid>
                            <Grid item xs={12} sm={6}  md={6} style={{ display: "flex", justifyContent: "center" }}>
                                <StyledImage className={time === 0 ? "animate__animated animate__fadeInRight animate__delay-3s" : null} src="/images/text1.png"/>
                            </Grid>



                            <Grid item xs={12} sm={6} md={6} className={classes.container} style={{ display: "flex", justifyContent: "center" }}>
                                <StyledImage className={time === 0 ? "animate__animated animate__fadeInRight animate__delay-5s" : null}  src="/images/polvos.png"/>
                            </Grid>
                            <Grid item xs={12}  sm={6} md={6} className={[classes.container, classes.separator]} style={{ display: "flex", justifyContent: "center" }}>
                                <StyledImage className={[time === 0 ? "animate__animated animate__fadeInLeft" : null, classes.seven]}  src="/images/text2.png"/>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                )
            }
        </Container>
    )
}

export default Products;