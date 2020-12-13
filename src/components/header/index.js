import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { 
        Container,
        Frame, 
        Logo, 
        ButtonLink, 
        HeaderNavbar, 
        Icon 
    } from './style/header';

export default function Header({ children, ...restProps}) {
    return  <Container {...restProps}> {children} </Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps}) {
    return <Frame {...restProps}> {children} </Frame>;
}

Header.Navbar = function HeaderNavBar ({ children, ...restProps}) {
    return <HeaderNavbar {...restProps} >{children}</HeaderNavbar>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>;
}

Header.Logo = function HeaderLogo({ to, ...restProps}) {
    return (
        <ReactRouterLink to ={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
} 

Header.Notify = function HeaderNotify({ to, ...restProps}) {
    return (
        <ReactRouterLink to ={to}>
            <Icon {...restProps} />
        </ReactRouterLink>
    );
} 