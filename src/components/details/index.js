import React from 'react';
import bookmark from '../../icons/bookmark-solid.svg';
import share from '../../icons/share-alt-solid.svg';

import { 
        Container, 
        Side,
        Descrption,
        Frame,
        DescFrame,
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
        ButtonLink,
        DescHeader,
        DescImage
    } from './style/details';


export default function Details ({ children, ...restProps}){
    return (
        <Container {...restProps}> {children} </Container>);
}

Details.Side = function DetailsSide ({ children, ...restProps}){
    return <Side {...restProps}> {children} </Side>;
}

Details.Descrption = function DetailsDescrption ({ children, ...restProps}){
    return <Descrption {...restProps}> {children} </Descrption>;
}

Details.Frame = function DetailsFrame ({ children, ...restProps}){
    return <Frame {...restProps}> {children} </Frame>;
}

Details.DescFrame = function DetailsDescFrame ({ children, ...restProps}){
    return <DescFrame {...restProps}> {children} </DescFrame>;
}

Details.Image = function DetailsImage ({ children, ...restProps}){
    return <Image {...restProps} /> ;
}

Details.TextPart = function DetailsTextPart ({ children, ...restProps}){
    return <TextPart {...restProps}> {children} </TextPart>;
}

Details.Title = function DetailsTitle ({ children, ...restProps}){
    return <Title {...restProps}> {children} </Title>;
}

Details.SubTitle = function DetailsSubTitle ({ children, ...restProps}){
    return <SubTitle {...restProps}> {children} </SubTitle>;
}

Details.Text = function DetailsText ({ children, ...restProps}){
    return <Text {...restProps}> {children} </Text>;
}

Details.Line = function DetailsLine ({ children, ...restProps}){
    return <Line {...restProps} />;
}

Details.ButtonPart = function DetailsButtonPart ({ children, ...restProps}){
    return <ButtonPart {...restProps}> {children} </ButtonPart>;
}

Details.BtnIcon = function DetailsBtnIcon ({ children, ...restProps}){
    return <BtnIcon {...restProps}> {children} </BtnIcon>;
}

Details.SaveBtn = function SaveBtn ({ children, ...restProps}){
    return (
        <Save {...restProps}> 
            <img src={bookmark} alt='share' />
            {children} 
        </Save>);
}
Details.ShareBtn = function ShareBtn ({ children, ...restProps}){
    return (
        <Share {...restProps}> 
            <img src={share} alt='share' />
            {children} 
        </Share>);
}

Details.RentButton = function DetailsButtonLink({ children, ...restProps}) {
    return <ButtonLink {...restProps}> {children} </ButtonLink>;
}
Details.DescHeader = function DetailsDescHeader({ children, ...restProps}) {
    return <DescHeader {...restProps}> {children} </DescHeader>;
}

Details.DescImage = function DetailsDescImage ({ children, ...restProps}){
    return <DescImage {...restProps} /> ;
}
