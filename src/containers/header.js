import React, { useState } from "react";

import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import bell from '../icons/bell.svg';
import bars from '../icons/bars.svg';

export function HeaderContainer({children}) {
    const [open , setOpen ] = useState(false);
    return (
        <Header>
            <Header.Row>
                {/* <Header.Logo to={ROUTES.HOME} src={logo} alt="Jobzella"/> */}
                <Header.Logo to={ROUTES.HOME}></Header.Logo>
                <Header.Navbar className="test" open={open} setOpen={setOpen} >
                    <Header.ButtonLink to={ROUTES.PROJECTS}> Projects </Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.COMUNITY}> Comunity  </Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.COURSES}> Courese </Header.ButtonLink>
                </Header.Navbar>
                <Header.Frame open={open} setOpen={setOpen}>
                    <Header.Notify to={ROUTES.HOME} src={bell} alt="icon" />
                    <Header.Notify to={ROUTES.HOME} src={bell} alt="icon"/>
                    <Header.ButtonLink to={ROUTES.PROFILE}> User </Header.ButtonLink>
                </Header.Frame>
                <Header.BarsButton open={open} setOpen={setOpen} > 
                    <Header.BarsIcon src={bars} />
                </Header.BarsButton>
                {children}
            </Header.Row>
        </Header>
    );
}