import styled from 'styled-components/macro';
import { NavLink as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div `
    background: white;
    width: 100%;
`;
export const Row = styled.div `
    display: grid;
    grid-template-columns: 1fr 8fr 3fr;
    padding: 0 100px;
    align-items: center;
    background: white;
    height: 6em;

    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        height: 4em;
        padding: 20px;
    }
    @media (max-width: 768px){
        display: flex;
        justify-content: space-between;
        height: 4em;
        padding: 20px;
    }
    @media (max-width: 992px){
        display: flex;
        justify-content: space-between;
        height: 6rem;
        padding: 0 20px;
    }
`;
export const Frame = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a{
        display: flex;
        outline-style: none;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: fit-content;
        text-align: left;
        padding: 0;
        top: 0;
        left: 0;
        position: absolute;
        background: white;
        width: 100%;
        border-top: 2px solid #ccc;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translate(0, 205px)' : 'translateY(-100%)'};
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        text-align: left;
        padding: 0 ;
        top: 0;
        left: 0;
        position: absolute;
        background: white;
        width: 100%;
        border-top: 2px solid #ccc;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translate(0, 205px)' : 'translateY(-100%)'};
    }
`;

export const HeaderNavbar = styled.div `
    display: flex;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        text-align: left;
        padding: 0;
        top: 0;
        left: 0;
        position: absolute;
        background: white;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translate(0, 95px)' : 'translateY(-100%)'};
    }
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        text-align: left;
        padding: 0;
        top: 0;
        left: 0;
        position: absolute;
        background: white;
        width: 100%;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translate(0, 95px)' : 'translateY(-100%)'};
    }
`;

export const Logo = styled.div `
    display: block;
    margin-left: auto;
    margin-right: auto;

    a{
        text-decoration: none;
    }
    h2 {
        color: black;
        text-align: center;
        margin: 0;
        line-height: 0.2;
    }

    @media (max-width: 600px) {
        margin: 0;
        h2{
            width: fit-content;
            font-size: 16px;
        }
    }
    @media (max-width: 768px){
        margin: 0;
        h2{
            width: fit-content;
            font-size: 16px;
        }
    }

`;
export const BarsButton = styled.button `
    display: none;
    outline: none;

    @media (max-width: 600px) {
        display: block;
        border: 0;
        background-color: transparent;
    }
    @media (max-width: 768px) {
        display: block;
        border: 0;
        background-color: transparent;
    }
`;
export const Icon = styled.img `
    height: 25px;
    width: 18px;

    @media (max-width: 600px){
        display: none;
    }
    @media (max-width: 768px){
        display: none;
    }

`;

export const BarsIcon = styled.img`
    height: 25px;
    width: 18px;
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    height: fit-content;
    color: black;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    font-weight: bold;
    margin: auto 20px;
    padding: 10px 0;
    position: relative;
    transition: all 0.5s;

    &:after{
        content: "";
        position: absolute;
        bottom: 5px;
        left: 0;
        height: 2px;
        background-color: #00f;
        width: 0;
        transition: all 0.5s;
    }

    &:hover:after{
        width: 100%;
    }
    &.active{
        &:after{
            width: 100%;
        }
    }

`;