import React from 'react';
import { Details } from '../components';
import * as ROUTES from '../constants/routes';
import fakeData from  '../fakeData.json';

export function DetailsContainer({ children, ...restProps}) {
    return(
        <Details>
            <Details.Side>
            {fakeData.map(item => (
                <Details.Frame key={item.id}>
                     <Details.Image src={item.image} alt= { item.alt }/>
                     <Details.TextPart>
                         <Details.Title>{item.title}</Details.Title>
                         <Details.SubTitle> {item.subTitle} </Details.SubTitle>
                         <Details.Text> {item.desc} </Details.Text>
                     </Details.TextPart>
                     <Details.Line />
                     <Details.ButtonPart>
                         <Details.BtnIcon>
                             <Details.SaveBtn>Save</Details.SaveBtn>
                             <Details.ShareBtn>Share</Details.ShareBtn>
                         </Details.BtnIcon>
                         <Details.RentButton to={ROUTES.DETAILS}>Rent</Details.RentButton>
                     </Details.ButtonPart>
                 </Details.Frame>
            ))}
            </Details.Side>
            <Details.Descrption>
               <Details.DescFrame>
                   <Details.DescHeader>
                        <Details.TextPart>
                            <Details.Title>{fakeData[1].title}</Details.Title>
                            <Details.SubTitle> {fakeData[1].subTitle} </Details.SubTitle>
                        </Details.TextPart>
                        <Details.ButtonPart>
                            <Details.BtnIcon>
                                <Details.SaveBtn>Save</Details.SaveBtn>
                                <Details.ShareBtn>Share</Details.ShareBtn>
                            </Details.BtnIcon>
                            <Details.RentButton to={ROUTES.DETAILS}>Rent</Details.RentButton>
                        </Details.ButtonPart>
                    </Details.DescHeader>
                    <Details.DescImage src={fakeData[1].image} alt= { fakeData[1].alt }/>
                    <Details.TextPart>
                         <Details.Text> {fakeData[1].totalDesc} </Details.Text>
                     </Details.TextPart>
               </Details.DescFrame>
            </Details.Descrption >
        </Details>
    );    
}