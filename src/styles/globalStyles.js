import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: #F6F6F4;
        scroll-behavior: smooth;
    }

`

export default myGlobalStyles