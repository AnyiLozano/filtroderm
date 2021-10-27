import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    arrows: {
        fill: '#ee1b5c'
    }
})

const Carousel = props => {
    const {
        dots,
        arrows,
        slidesToShow,
        slidesToScroll,
        responsive,
        autoplay,
        children
    } = props;
    console.log(props)
    const classes = useStyles();

    return (
        <Slider
            dots={dots}
            arrows={arrows}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            responsive={responsive}
            autoplay={autoplay}
            infinite={true}
            speed={500}
            nextArrow={<ArrowForwardIosIcon className={classes.arrows}/>}
            prevArrow={<ArrowBackIosIcon className={classes.arrows}/>}
        >
            {children}
        </Slider>
    )
}

export default Carousel;