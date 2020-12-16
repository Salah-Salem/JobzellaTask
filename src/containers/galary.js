import React from 'react';
import { Galary } from '../components';
import * as ROUTES from '../constants/routes';
import fakeData from  '../fakeData.json';

export function GalaryContainer({ children, ...restProps}) {
    return(
        <Galary>
            <Galary.Row>
                {fakeData.map(item => (
                    <Galary.Frame key={item.id}>
                        <Galary.Image src={item.image} alt= { item.alt }/>
                        <Galary.TextPart>
                            <Galary.Title>{item.title}</Galary.Title>
                            <Galary.SubTitle> {item.subTitle} </Galary.SubTitle>
                            <Galary.Text> {item.desc} </Galary.Text>
                        </Galary.TextPart>
                        <Galary.Line />
                        <Galary.ButtonPart>
                            <Galary.BtnIcon>
                                <Galary.SaveBtn>Save</Galary.SaveBtn>
                                <Galary.ShareBtn>Share</Galary.ShareBtn>
                            </Galary.BtnIcon>
                            <Galary.RentButton to={ROUTES.DETAILS}>Rent</Galary.RentButton>
                        </Galary.ButtonPart>
                    </Galary.Frame>
                ))}
            </Galary.Row>
        </Galary>
    );    
}