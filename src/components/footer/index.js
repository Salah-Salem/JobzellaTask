import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import caret from "../../icons/caret-down.svg";
import iphone from "../../icons/iphone.svg";
import google_play from '../../icons/google-play.svg';
import logo from '../../logo.svg';

import { 
    Container, 
    Row, 
    LogoSec,
    GeneInfo,
    Advertisement,
    Link, 
    Title,
    SubTitle, 
    Text,
    Download,
    Store,
    Google,
    Span,
    SmallText,
    StoreTitle,
    Logo,
    Lang,
    Select,
    Caret,
    Option,
    SocialMedia,
    Social
    } from './style/footer'

export default function Footer ({ children, ...restProps}){
    return <Container {...restProps}> {children} </Container>;
}

Footer.Row = function FooterRow ({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.LogoSec = function FooterLogoSec ({children, ...restProps}){
    return <LogoSec {...restProps}>{children}</LogoSec>
}

Footer.GeneInfo = function FooterGeneInfo ({children, ...restProps}){
    return <GeneInfo {...restProps}>{children}</GeneInfo>
}

Footer.Advertisement = function FooterAdvertisement ({children, ...restProps}){
    return <Advertisement {...restProps}>{children}</Advertisement>
}

Footer.Link = function FooterLink ({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle ({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.SubTitle = function FooterSubTitle ({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Footer.Text = function FooterText ({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}
Footer.Download = function FooterDownload ({children, ...restProps}){
    return <Download {...restProps}>{children}</Download>
}
Footer.Store = function FooterStore ({children, ...restProps}){
    return (
        <Store {...restProps}>
                <img src={iphone} alt='App-store' />
                {children}
        </Store>);
}
Footer.Google = function FooterGoogle ({children, ...restProps}){
    return (
        <Google {...restProps}>
            <img src={google_play} alt='google-play' />
            {children}
        </Google>
        );
}

Footer.Span = function FooterSpan ({children, ...restProps}){
    return <Span {...restProps}>{children}</Span>
}

Footer.StoreTitle = function FooterStoreTitle ({children, ...restProps}){
    return <StoreTitle {...restProps}>{children}</StoreTitle>
}

Footer.SmallText = function FooterSmallText ({children, ...restProps}){
    return <SmallText {...restProps}>{children}</SmallText>
}

Footer.Lang = function FooterLang ({children, ...restProps}){
    return <Lang {...restProps}>{children}</Lang>
}

Footer.Select = function FooterSelect ({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

Footer.Option = function FooterOption ({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
}

Footer.Caret = function FooterCart ({children, ...restProps}){
    return <Caret {...restProps} src={caret} alt='Caret' />
}

Footer.Social = function FooterSocial({ to, ...restProps}) {
    return (
        <ReactRouterLink to ={to}>
            <Social {...restProps} />
        </ReactRouterLink>
    );
} 

Footer.Logo = function FooterLogo({ to,children , ...restProps}) {
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

Footer.SocialMedia = function FooterSocialMedia ({children, ...restProps}){
    return <SocialMedia {...restProps}>{children}</SocialMedia>
}