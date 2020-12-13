import styled from 'styled-components/macro';
import { NavLink as ReactRouterLink } from 'react-router-dom';

export const Global = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled(Global) `
    background: white;
    height: 64px;
`;

export const Frame = styled(Global) `
    margin: auto 50px;
    padding: 8px 17px;

    a{
        display: flex;
        outline-style: none;
    }
`;

export const HeaderNavbar = styled(Global) `
    padding: 8px 17px;
`;

export const Logo = styled.img `
    height: 32px;
    width: 108px;
    margin-right: 40px;
`;

export const Icon = styled.img `
    height: 25px;
    width: 18px;

    &.ml-3{
        margin-left: 30px;
    }
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
    margin: auto 10px;
    position: relative;
    transition: all 0.5s;

    &:after{
        content: "";
        position: absolute;
        bottom: 0;
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

    &.ml-3{
        margin-left: 30px;
    }
`;