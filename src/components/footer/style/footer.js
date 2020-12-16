import styled from 'styled-components/macro'; 

export const Global = styled.div `
    display: flex;
    align-items: center;
`;


export const Container = styled.div `
    background-color: #e5e5e5;
    padding:20px 50px 0 50px;
    overflow: hidden;

`;

export const Row = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
    @media (max-width: 768px){
        grid-template-columns: auto;
    }
    @media (max-width: 992px){
        grid-template-columns: auto;
    }
`;

export const LogoSec = styled.div `
    display: flex;
    flex-direction: column;
`;
export const GeneInfo = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-top: 2px solid #131313;
        border-bottom: 2px solid #131313;
        padding: 20px 0;
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-top: 2px solid #131313;
        border-bottom: 2px solid #131313;
        padding: 20px 0;
    }
    @media (max-width: 992px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border-top: 2px solid #131313;
        border-bottom: 2px solid #131313;
        padding: 20px 0;
    }
`;
export const Advertisement = styled(Global) `
    flex-direction: column;
`;

export const Link = styled.a `
    color: #000;
    margin-bottom: 7px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.h2 `
    font-size: 18px;
    color: #000;
    text-align: center;
    line-height: 0;
    text-transform: uppercase;

    @media (max-width: 992px){
        font-size: 16px;
    }
    @media (max-width: 1200px){
        font-size: 16px;
    }
`;
export const SubTitle = styled.h3 `
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0;
`;

export const Text = styled.p `
    font-size: 13px;
    color: black;
    text-align: center;
    margin-top: 0;
`;
export const Download = styled.div `
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

export const Store = styled.div `
    display: flex;
    align-items: center;
    margin-left:2px;
    border: 1px solid;
    border-radius: 10px;
    color: white;
    background: #000;

    img{
        width: 30px;
        height: 30px;
        padding: 10px;
    }
`;

export const Google = styled(Global) `
    margin-right: 2px;
    border: 1px solid;
    border-radius: 10px;
    color: white;
    background: #000;;

    img{
        width: 30px;
        height: 30px;
        padding: 10px;
    }
`;

export const Span = styled.span `
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 0;
    color: #e5e5e5;
`;
    
export const StoreTitle = styled.h2 `
    font-size: 22px;
    margin: 0;

    @media (max-width: 992px){
        font-size: 15px;
    }

    @media (max-width: 1200px){
        font-size: 15px;
    }
`;

export const SmallText = styled.p `
    font-size: 10px;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: 992px){
        font-size: 8px;
    }

    @media (max-width: 1200px){
        font-size: 8px;
    }
`;
export const Lang = styled.div `
    padding: 20px;
    border: 1px solid;
    width: 75%;
    display: flex;
    margin: 20px auto
`;

export const Select = styled.select `
    display: block;
    font-size: 16px;
    color: #444;
    line-height: 1.3;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 0;
    appearance: none;
    background: transparent;
    outline: none;
`;

export const Option = styled.option ``;

export const Caret = styled.img `
    width: 25px;
    height: 15px;
`;

export const Logo = styled.div `
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    a{
        text-decoration: none;
    }
    h2 {
        color: black;
        text-align: center;
        margin: 0;
    }

    @media (max-width: 992px){
        width: 25%;
        h2{
            font-size: 18px;
        }
`;

export const SocialMedia = styled.div `
    display: flex;
    margin: 50px auto 0;
    align-items: center;

    // @media (max-width: 600px){
    //     margin: 0 auto;
    // }
    // @media (max-width: 768px){
    //     margin: 0 auto;
    // }
    // @media (max-width: 992px){
    //     margin: 0 auto;
    // }
`;

export const Social = styled.img`
    height: 45px;
    width: 30px;
    margin: 0 3px;

    &.custom{
        width: 40px;
    }
`;