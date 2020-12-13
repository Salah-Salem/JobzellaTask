import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Global = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    margin: auto 50px;
    padding-top: 25px;
`;

export const Frame = styled(Global) `
    border-radius: 20px;
    background-color: white;
`;

export const Image = styled.img `
    height: 200px;
    border-radius: 20px;
`;

export const TextPart = styled(Global) `
    padding: 0 20px;
`;

export const Title = styled.h1 `
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0;
    color: #8686df;
`;

export const SubTitle = styled.h2 `
    font-size: 15px;
    margin: 0;
    color: #9b9b9a;
`;

export const Text = styled.p `
    font-size: 12px;
    color: #9b9b9a;
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
`;

export const BtnIcon = styled.div `display: flex;`;

export const Save = styled.button `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9b9b9a;
    border: 0;
    background: none;
    cursor: pointer;
    outline-style: none;

    img{
        margin-right: 10px;
        width: 15px;
`;
export const Share = styled(Save) ``;

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
`;
