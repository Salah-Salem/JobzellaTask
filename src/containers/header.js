import React from "react";

import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import bell from '../icons/bell.svg';

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Navbar>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Jobzella" />
                <Header.ButtonLink to={ROUTES.PROJECTS}> Projects </Header.ButtonLink>
                <Header.ButtonLink to={ROUTES.COMUNITY}> Comunity  </Header.ButtonLink>
                <Header.ButtonLink to={ROUTES.COURSES}> Courese </Header.ButtonLink>
            </Header.Navbar>
            <Header.Frame>
                <Header.Notify to={ROUTES.HOME} src={bell} alt="icon" />
                <Header.Notify to={ROUTES.HOME} src={bell} alt="icon" className="ml-3"/>
                <Header.ButtonLink to={ROUTES.PROFILE} className="ml-3"> User </Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}