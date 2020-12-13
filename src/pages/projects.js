import React, { Fragment } from 'react';
import { FooterContainer } from '../containers/footer';
import { GalaryContainer } from '../containers/galary';
import { HeaderContainer } from '../containers/header';

export default function Projects() {

    return (
        <Fragment>
            <HeaderContainer />
            <GalaryContainer />
            <FooterContainer />
        </Fragment>
    )
}