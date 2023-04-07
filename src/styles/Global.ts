import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
* {
    margin:0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .3s linear;
        outline: none;
        border: none;
        list-style: none;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
}


`;