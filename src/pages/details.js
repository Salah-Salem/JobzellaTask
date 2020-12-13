import React, { Fragment } from 'react';
import { DetailsContainer } from '../containers/details';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Deltails() {
    return (
        <Fragment>
            <HeaderContainer />
            <DetailsContainer />
            <FooterContainer />
        </Fragment>
    )
}