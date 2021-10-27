import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Products from "./products";
import useComponents from "../../components";
import _ from "lodash";
import useHome from "./hook";


const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '42vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    mision: {
        width: '100%',
        padding: '80px 0px 80px 20px',
        '@media (max-width: 414px)': {
            padding: '20px 0px 20px 5px',
        }
    },
    background: {
        width:'100%',
    },
    cajas: {
        position: 'absolute',
        left: '4vw',
        top: '8vw',
        width: '31%'
    },
    text: {
        position: 'absolute',
        right: '11vw',
        top: '17vw',
        width: '50%'
    },
    product: {
        backgroundImage: 'url(/images/Recurso-12.png)',
        backgroundSize: '100% 100%',
        paddingTop: '10%',
        marginTop: '-1.5%',
        '@media (max-width: 768px)': {
            backgroundImage: 'none',
        }
    },
    title: {
        color: '#00225D',
        fontWeight: 400,
        textTransform: 'uppercase',
        fontStyle: 'normal',
        textShadow: '0px 0px 10px rgb(0 0 0 / 30%)',
        textAlign: 'center',
        lineHeight: '1.2',
        fontSize: '2rem'
    },
    span: {
        background: '#fff',
        zIndex: 100,
        position: 'relative',
        padding: '0 15px'
    },
    lines: {
        '&:after': {
            content: '',
            position: 'absolute',
            width: '80%',
            height: 4,
            left: '10%',
            top: '50%',
            background: '#00225D',
            zIndex: 50
        }
    },
    terms: {
        paddingTop: '5%',
        width: '100%'
    },
    carousel: {
        width: '70% !important',
        marginRight: 10,
        height: 69
    },
    center: {
        display: 'flex !important',
        justifyContent: 'center'
    },
    face: {
        width: '3%',
        position: "fixed",
        zIndex: '1',
        bottom: '6vw',
        right: '1vw',
        '@media (max-width: 1200px)': {
            width: '10%',
            bottom: '16vw',
            zIndex: '1000',
        }
    },
    insta: {
        width: '3%',
        position: "fixed",
        zIndex: '1',
        bottom: '2.7vw',
        right: '1vw',
        '@media (max-width: 1200px)': {
            width: '10%',
            bottom: '5vw',
            zIndex: '1000',
        }

    },
})

const Home = () => {
    const classes = useStyle();

    const {
        Carousel
    } = useComponents();

    const {
        carousel
    } = useHome();

    return (
        <React.Fragment>
            <img src="/images/header-2.png" alt="banner" className={classes.background} />
            <img src="/images/Recurso-4.png" alt="cajas" className={classes.cajas} />
            <img src="/images/Recurso-4@2x-1.png" alt="text" className={classes.text} />
            <div className={classes.product} id="productos">
                <div className="lines">
                    <h2 className="title-products">
                        <span className="span-page">DESCUBRE NUESTROS PRODUCTOS DERMOCOSMÉTICOS</span>
                    </h2>
                </div>
                <Products />
                <img src="/images/Recurso-11.png" alt="terms" className={classes.terms}/>
            </div>
            <div className="lines" id="compra-aqui">
                <h2 className="title-carousel">
                    <span className="span-page">¿dónde puedes encontrar la protección ideal para tu piel?</span>
                </h2>
            </div>
            <Container>
                <Carousel
                    dots={false}
                    arrows={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay={true}
                    responsive={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,

                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,

                            }
                        }
                    ]}
                >
                    {
                        _.map(carousel, (item, index) => (
                                <Grid item lg={12} key={index}>
                                    <a href={item.url} target="_blank" rel="noreferrer" className={classes.center}>
                                        <img src={item.image} alt="drogerias"  className={classes.carousel}/>
                                    </a>
                                </Grid>

                        ))
                    }
                </Carousel>
            </Container>
            <a href="https://es-la.facebook.com/Filtroderm/?ref=page_internal" target="_blank" rel="noreferrer">
                <img src="/images/faceboo.png" alt="facebook" className={classes.face} />
            </a>
            <a href="https://www.instagram.com/filtrodermcolombia/" target="_blank" rel="noreferrer">
                <img src="/images/insta.png" alt="instagram" className={classes.insta} />
            </a>
        </React.Fragment>
    )
}

export default Home;