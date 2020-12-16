import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import logo from '../../logo.svg';

import { 
        Container,
        Row,
        Frame, 
        Logo, 
        ButtonLink, 
        HeaderNavbar, 
        Icon ,
        BarsButton,
        BarsIcon
    } from './style/header';

export default function Header({ children, ...restProps}) {

    return (
        <Container {...restProps}> 
            {children} 
        </Container>
    );
}

Header.Row = function HeaderRow({ children, ...restProps}) {
    return <Row {...restProps}> {children} </Row>;
}

Header.Frame = function HeaderFrame({ children, ...restProps}) {
    return <Frame {...restProps}> {children} </Frame>;
}

Header.Navbar = function HeaderNavBar ({ open, children, ...restProps}) {
    return <HeaderNavbar {...restProps} open={open} >{children}</HeaderNavbar>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>;
}

// Header.Logo = function HeaderLogo({ to, ...restProps}) {
//     return (
//         <ReactRouterLink to ={to}>
//             <Logo {...restProps} />
//         </ReactRouterLink>
//     );
// } 

Header.Logo = function HeaderLogo({ to,children , ...restProps}) {
    return (
        <Logo>
            <ReactRouterLink to ={to} >
                <img src={logo} alt="Jobzella" />
                <h2 className="title">House</h2>
                {children}
            </ReactRouterLink>
        </Logo>

    );
}

Header.Notify = function HeaderNotify({ to, ...restProps}) {
    return (
        <ReactRouterLink to ={to}>
            <Icon {...restProps} />
        </ReactRouterLink>
    );
} 

Header.BarsButton = function HeaderBarsButton({ open, setOpen, children, ...restProps}) {
    return (
        <BarsButton {...restProps} open={open} onClick={() => setOpen(!open)} >
            {children}
        </BarsButton>
    );
} 

Header.BarsIcon = function HeaderBarsIcon({ children, ...restProps}) {
    return (
        <BarsIcon {...restProps} />
    );
} 