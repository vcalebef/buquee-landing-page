import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        background-color: #F6F6F4;
    }

`

export default myGlobalStyles