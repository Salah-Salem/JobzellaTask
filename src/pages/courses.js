import React, { Fragment } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Courses() {
    return (
        <Fragment>
            <HeaderContainer />
            <h1>Courses page</h1>
            <FooterContainer />
        </Fragment>
    )
}