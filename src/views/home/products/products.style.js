import styled from "styled-components";
import {makeStyles} from "@material-ui/core";

const useProductsStyle = () => {
    const StyledImage = styled.img`
      width: 100%;
      
      @media (max-width: 599px){
        width: 75%;
        height: auto;
      }
    `;

    const useStyle = makeStyles({
       container: {
           paddingTop: '10%'
       },
        separator: {
            paddingRight: '10%'
        },
        seven:{
           animationDelay: '7s'
        }
    });



    return {
        StyledImage,
        useStyle
    }
}

export default useProductsStyle;