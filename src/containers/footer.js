import React from 'react';
import * as ROUTES from '../constants/routes';
import { Footer } from '../components';
import logo from '../logo.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import youtube from '../icons/youtube.svg';
import instagram from '../icons/instagram.svg';
import linked from '../icons/linkedin.svg';
import google_plus from '../icons/google-plus.svg';
import pinterest from '../icons/pinterest.svg';

export function FooterContainer () {
    return(
        <Footer>
            <Footer.Row>
                <Footer.LogoSec>
                    <Footer.Logo to={ROUTES.HOME} src={logo} alt="Jobzella" />
                    <Footer.Title>House </Footer.Title>
                    <Footer.SocialMedia>
                        <Footer.Social to={ROUTES.HOME} src={facebook} alt="facebook" />
                        <Footer.Social to={ROUTES.HOME} src={instagram} alt="instagram"className="custom" />
                        <Footer.Social to={ROUTES.HOME} src={twitter} alt="twitter" />
                        <Footer.Social to={ROUTES.HOME} src={youtube} alt="youtube" />
                        <Footer.Social to={ROUTES.HOME} src={google_plus} alt="google-plus" className="custom" />
                        <Footer.Social to={ROUTES.HOME} src={linked} alt="linkedin" className="custom"/>
                        <Footer.Social to={ROUTES.HOME} src={pinterest} alt="pinterest" />
                    </Footer.SocialMedia>
                </Footer.LogoSec>
                <Footer.GeneInfo >
                <Footer.LogoSec>
                        <Footer.SubTitle>General </Footer.SubTitle>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Blog</Footer.Link>
                        <Footer.Link href="#">Sign up</Footer.Link>
                        <Footer.Link href="#">Help center</Footer.Link>
                        <Footer.Link href="#">From zero to hero</Footer.Link>
                    </Footer.LogoSec>
                    <Footer.LogoSec>
                        <Footer.SubTitle>quick links </Footer.SubTitle>
                        <Footer.Link href="#">Jobs</Footer.Link>
                        <Footer.Link href="#">Companies</Footer.Link>
                        <Footer.Link href="#">Peopel</Footer.Link>
                        <Footer.Link href="#">Events</Footer.Link>
                    </Footer.LogoSec>
                    <Footer.LogoSec>
                        <Footer.SubTitle>help </Footer.SubTitle>
                        <Footer.Link href="#">Help Center</Footer.Link>
                        <Footer.Link href="#">Contact us</Footer.Link>
                    </Footer.LogoSec>
                </Footer.GeneInfo>
                <Footer.Advertisement>
                    <Footer.Title>Download jobzella mobile app</Footer.Title>
                    <Footer.Text>Jobzella mobile app for Android and iphone</Footer.Text>
                    <Footer.Download>
                        <Footer.Google>
                            <Footer.Span>
                                <Footer.SmallText>Android app on</Footer.SmallText>
                                <Footer.StoreTitle>Google Play</Footer.StoreTitle>
                            </Footer.Span>
                        </Footer.Google>
                        <Footer.Store>
                            <Footer.Span>
                                <Footer.SmallText>available on the</Footer.SmallText>
                                <Footer.StoreTitle>App Store</Footer.StoreTitle>
                            </Footer.Span>
                        </Footer.Store>
                    </Footer.Download>
                    <Footer.SubTitle>download free</Footer.SubTitle>
                    <Footer.Lang>
                        <Footer.Select>
                            <Footer.Option>English</Footer.Option>
                            <Footer.Option>Arabic</Footer.Option>
                        </Footer.Select>
                        <Footer.Caret />
                    </Footer.Lang>
                </Footer.Advertisement>
            </Footer.Row>
        </Footer>
    );
}