import {useState} from "react";
import PropTypes from "prop-types";

const useHeader = () => {
    const links = [
        {
            id: 1,
            name: 'Inicio',
            path: '/',
            hash: ''
        },
        {
            id: 1,
            name: 'Productos',
            path: '/',
            hash: '#productos'
        },
        {
            id: 1,
            name: 'Compra aquí',
            path: '/',
            hash: '#compra-aqui'
        },
    ];

    const [openDrawer, setOpenDrawer] = useState(false);

    // Handlers
    const handlerOpenDrawer = (e, type) => {
        if(type === 'close'){
            setOpenDrawer(false);
        }else{
            setOpenDrawer(true);
        }

        return false;
    }

    handlerOpenDrawer.propTypes = {
        type: PropTypes.string.isRequired
    }

    return {
        links,
        handlerOpenDrawer,
        openDrawer
    }
}

export default useHeader;