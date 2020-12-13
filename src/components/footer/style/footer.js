import styled from 'styled-components/macro'; 

export const Global = styled.div `
    display: flex;
    align-items: center;
`;


export const Container = styled.div `
    display: flex;
    background-color: #e5e5e5;
    padding-top:20px;
`;

export const LogoSec = styled.div `
    display: flex;
    flex-direction: column;
`;
export const GeneInfo = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
`;
export const Advertisement = styled(Global) `
    flex-direction: column;
`;
export const Row = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: auto 50px;
    padding-top: 25px;
`;

export const Link = styled.a `
    color: #000;
    margin-bottom: 7px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.h2 `
    font-size: 18px;
    color: #000;
    text-align: center;
    line-height: 0;
    text-transform: uppercase;
`;
export const SubTitle = styled.h3 `
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0;
`;

export const Text = styled.p `
    font-size: 13px;
    color: black;
    text-align: center;
    margin-top: 0;
`;
export const Download = styled.div `
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

export const Store = styled.div `
    display: flex;
    align-items: center;
    margin-left:2px;
    border: 1px solid;
    border-radius: 10px;
    color: white;
    background: #000;

    img{
        width: 30px;
        height: 30px;
        padding: 10px;
    }
`;

export const Google = styled(Global) `
    margin-right: 2px;
    border: 1px solid;
    border-radius: 10px;
    color: white;
    background: #000;;

    img{
        width: 30px;
        height: 30px;
        padding: 10px;
    }
`;

export const Span = styled.span `
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 0;
    color: #e5e5e5;
`;
    
export const StoreTitle = styled.h2 `
    font-size: 22px;
    margin: 0;
`;

export const SmallText = styled.p `
    font-size: 10px;
    text-transform: uppercase;
    margin: 0;
`;
export const Lang = styled.div `
    padding: 20px;
    border: 1px solid;
    width: 75%;
    display: flex;
    margin: 20px auto
`;

export const Select = styled.select `
    display: block;
    font-size: 16px;
    color: #444;
    line-height: 1.3;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 0;
    appearance: none;
    background: transparent;
    outline: none;
`;

export const Option = styled.option ``;

export const Caret = styled.img `
    width: 25px;
    height: 15px;
`;

export const Logo = styled.img `
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`;

export const SocialMedia = styled.div `
    display: flex;
    margin: 50px auto 0;
    align-items: center;
`;

export const Social = styled(Logo)`
    height: 45px;
    width: 30px;
    margin: 0 3px;

    &.custom{
        width: 40px;
    }
`;