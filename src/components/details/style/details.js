import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Global = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div `
    padding: 20px 50px 0 50px;

    @media(max-width: 992px){
        padding: 20px 0;
    }
`;

export const Row = styled.div `
    display: grid;
    grid-template-columns: 4fr 7fr;
    grid-gap:10px;

    @media (max-width: 992px){
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

export const Side = styled(Global)`
    height: 1000px;
    overflow: auto;

    @media(max-width: 992px){
        display: flex;
        flex-direction: row;
        height: 420px;
        width: 100% !important;

    }
`;
export const Descrption = styled.div `
    overflow: auto;
    height: 1000px;

    @media (max-width: 992px){
        display: flex;
        flex-direction: row;
        height: fit-content;
        width: 100% !important;
    }
`;

export const Frame = styled(Global) `
    border-radius: 20px;
    margin-bottom: 10px;
    background-color: white;
    width: fit-content;

    @media(max-width: 992px){
        margin: 5px;
        width: fit-content;
    }
`;

export const DescFrame = styled(Frame) `padding: 20px`;

export const Image = styled.img `
    height: 200px;
    border-radius: 20px;
    width: 100%;
`;

export const TextPart = styled(Global) `
    padding: 0 20px;
`;

export const Title = styled.h1 `
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0;
    color: #8686df;

    @media(max-width: 992px){
        font-size: 16px;
    }
`;

export const SubTitle = styled.h2 `
    font-size: 15px;
    margin: 0;
    color: #9b9b9a;

    @media(max-width: 992px){
        font-size: 14px;
    }
`;

export const Text = styled.p `
    font-size: 12px;
    color: #9b9b9a;
    text-align: justify;
`;

export const Line = styled.div `
    border-bottom: 1px solid #9b9b9a;
    margin: 0 0 10px 0;
`;

export const ButtonPart = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 10px;

    @media(max-width: 992px){
        padding: 0 15px;
    }
`;

export const BtnIcon = styled.div `
    display: flex;
    
    @media(max-width: 992px){
        padding-right: 20px;
    }
`;

export const Save = styled.button `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9b9b9a;
    border: 0;
    background: none;
    cursor: pointer;

    img{
        margin-right: 10px;
        width: 15px;
    }
    @media (max-width: 992px){
        font-size: 15px;

        img{
            margin-right: 8px;
            width: 12px;
        }
    }
`;
export const Share = styled(Save) `

`;

export const ButtonLink = styled(ReactRouterLink)`
    padding: 15px 50px;
    border: 0;
    background-color: #fa7d95;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none;

    @media(max-width: 992px){
        padding: 12px 35px;
        font-size: 15px;
    }
`;

export const DescHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media(max-width:992px){
        margin-bottom: 0px;
    }
`;

export const DescImage = styled(Image) `
    height: 400px;
    margin-bottom: 20px;

`;
