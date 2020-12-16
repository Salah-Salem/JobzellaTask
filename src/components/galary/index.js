import React from 'react';
import bookmark from '../../icons/bookmark-solid.svg';
import share from '../../icons/share-alt-solid.svg';
import { 
        Container, 
        Row,
        Frame, 
        Image,
        TextPart,
        Title, 
        SubTitle, 
        Text, 
        Line,
        ButtonPart,
        BtnIcon,
        Save,
        Share, 
        ButtonLink
    } from './style/galary';


export default function Galary ({ children, ...restProps}){
    return (
        <Container {...restProps}> {children} </Container>);
}
Galary.Row = function GalaryRow({ children, ...restProps}) {
    return <Row {...restProps}> {children} </Row>;
}

Galary.Frame = function GalaryFrame ({ children, ...restProps}){
    return <Frame {...restProps}> {children} </Frame>;
}

Galary.Image = function GalaryImage ({ children, ...restProps}){
    return <Image {...restProps} /> ;
}

Galary.TextPart = function GalaryTextPart ({ children, ...restProps}){
    return <TextPart {...restProps}> {children} </TextPart>;
}

Galary.Title = function GalaryTitle ({ children, ...restProps}){
    return <Title {...restProps}> {children} </Title>;
}

Galary.SubTitle = function GalarySubTitle ({ children, ...restProps}){
    return <SubTitle {...restProps}> {children} </SubTitle>;
}

Galary.Text = function GalaryText ({ children, ...restProps}){
    return <Text {...restProps}> {children} </Text>;
}

Galary.Line = function GalaryLine ({ children, ...restProps}){
    return <Line {...restProps} />;
}

Galary.ButtonPart = function GalaryButtonPart ({ children, ...restProps}){
    return <ButtonPart {...restProps}> {children} </ButtonPart>;
}

Galary.BtnIcon = function GalaryBtnIcon ({ children, ...restProps}){
    return <BtnIcon {...restProps}> {children} </BtnIcon>;
}

Galary.SaveBtn = function SaveBtn ({ children, ...restProps}){
    return (
        <Save {...restProps}> 
            <img src={bookmark} alt='share' />
            {children} 
        </Save>);
}
Galary.ShareBtn = function ShareBtn ({ children, ...restProps}){
    return (
        <Share {...restProps}> 
            <img src={share} alt='share' />
            {children} 
        </Share>);
}

Galary.RentButton = function HeaderButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>;
}
