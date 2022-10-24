import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    box-sizing: inherit;
    font-size: 62.5%;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Lobster', cursive; */
}
body{
    background-color:#1b1b1b;
    font-family: 'Inter', sans-serif;

}
button{
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    padding: 1.2rem 3rem;
    cursor: pointer;
    border:3px solid #23d997;
    background: transparent;
    font-family: 'Inter', sans-serif;
    transition: all .1s ease-in-out;
    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    }
    &:active,&:link{
        transform: translateY(0px);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;

    }
    h3{
        color:#fff;
    }
    h4{
        font-size: 3.2rem;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem
    }
    a{
        font-size: 1.8rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }



`;

export default GlobalStyle;
