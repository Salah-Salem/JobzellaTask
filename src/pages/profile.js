import React, { Fragment } from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Profile() {
    return (
        <Fragment>
            <HeaderContainer />
            <div style={{padding: '0 50px', height: '500px'}}>
                <h1 style={{textAlign: 'center'}}>Profile page</h1>
            </div>
            <FooterContainer />
        </Fragment>
    )
}