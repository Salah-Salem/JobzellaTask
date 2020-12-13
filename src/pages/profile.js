import React, { Fragment } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Profile() {
    return (
        <Fragment>
            <HeaderContainer />
            <h1>Profile page</h1>
            <FooterContainer />
        </Fragment>
    )
}