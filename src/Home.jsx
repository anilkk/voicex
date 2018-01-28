import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';
import logoWhite from './img/voicex-logo-white.svg';

const Home = () => {
    return (<div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <HeaderNavigation />
            <div className="android-drawer mdl-layout__drawer">
        <span className="mdl-layout-title">
          <img className="voicex-logo-image" src={logoWhite} />
        </span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="https://twitter.com/anilbms75" target="_blank">Twitter</a>
                    <a className="mdl-navigation__link" href="anilkk.github.io/voicex" target="_blank">Github</a>
                    <a className="mdl-navigation__link" href="mailto:anilbms75@gmail.com"  target="_blank">Contact</a>
                </nav>
            </div>
            <div className="android-content mdl-layout__content">
                <a name="top"></a>
                <div className="android-be-together-section mdl-typography--text-center">
                    <div className="logo-font android-slogan">Talk to me, your device.</div>
                    <div className="logo-font android-sub-slogan">welcome to VoiceX, prototype voice interface for any device</div>
                    <div className="logo-font android-create-character">
                        <Link to="/app" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Create voice prototype</Link>
                    </div>

                    <a href="#screens">
                        <button className="android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                            <i className="material-icons">expand_more</i>
                        </button>
                    </a>
                </div>
                <div className="android-screen-section mdl-typography--text-center">
                    <a name="screens"></a>
                    <div className="mdl-typography--display-1-color-contrast">Powering voice interface of all devices</div>
                    <div className="android-screens">
                        <div className="android-wear android-screen">
                            <a className="android-image-link" href="">
                                <img className="android-screen-image" src="images/wear-silver-on.png" />
                                <img className="android-screen-image" src="images/wear-black-on.png" />
                            </a>
                            <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Android Wear</a>
                        </div>
                        <div className="android-phone android-screen">
                            <a className="android-image-link" href="">
                                <img className="android-screen-image" src="images/nexus6-on.jpg" />
                            </a>
                            <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Phones</a>
                        </div>
                        <div className="android-tablet android-screen">
                            <a className="android-image-link" href="">
                                <img className="android-screen-image" src="images/nexus9-on.jpg" />
                            </a>
                            <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Tablets</a>
                        </div>
                        <div className="android-tv android-screen">
                            <a className="android-image-link" href="">
                                <img className="android-screen-image" src="images/tv-on.jpg" />
                            </a>
                            <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Android TV</a>
                        </div>
                        <div className="android-auto android-screen">
                            <a className="android-image-link" href="">
                                <img className="android-screen-image" src="images/auto-on.jpg" />
                            </a>
                            <a className="android-link mdl-typography--font-regular mdl-typography--text-uppercase mdl-typography--text-left" href="">Coming Soon: Android Auto</a>
                        </div>
                    </div>
                </div>
                <div className="android-wear-section">
                    <div className="android-wear-band">
                        <div className="android-wear-band-text">
                            <div className="mdl-typography--display-2 mdl-typography--font-thin">Be part of shaping the future of VoiceX</div>
                            <p className="mdl-typography--headline mdl-typography--font-thin">
                                Help us taking VoiceX to the next level with your design expertise, product management insights or engineering skills.
                                Our next features, bugs and the roadmap are fully open. Feel free to add issues, start pull requests or let us discuss what should be next.
                            </p>
                            <p>
                                <button
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                                    href="https://github.com/anilkk/voicex"
                                    target="_blank">Explore our next steps on Github</button>
                            </p>
                            <p>

                                <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="mailto:anilbms75@gmail.com">
                                    Send us an email &nbsp;<i className="material-icons">chevron_right</i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="android-customized-section">
                    <div className="android-customized-section-text">
                        <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Stay tuned</div>
                        <div className="mdl-typography--font-light">
                            VoiceX is a work-in-progress, and constantly evolving. Sign up with your email to be the first in line when we announce new features.
                            {/*<!-- Begin MailChimp Signup Form -->*/}
                                <div id="mc_embed_signup">
                                    <form action="https://anilkumark.us4.list-manage.com/subscribe/post?u=249f18fdcebc76702337fd7cf&amp;id=f9246d41b5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                        <div id="mc_embed_signup_scroll">
                                            <div className="mc-field-group">
                                                <label htmlFor="mce-EMAIL">Email Address</label>
                                                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                            </div>
                                            <div id="mce-responses" className="clear">
                                                <div className="response hidden" id="mce-error-response"></div>
                                                <div className="response hidden" id="mce-success-response"></div>
                                            </div>
                                            {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                            <div className="mc-input" aria-hidden="true"><input type="text" name="b_249f18fdcebc76702337fd7cf_f9246d41b5" tabIndex="-1" value="" /></div>
                                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                        </div>
                                    </form>
                                </div>
                            {/*<!--End mc_embed_signup-->*/}
                        </div>
                    </div>
                </div>

                <footer className="android-footer mdl-mega-footer">
                    <div className="mdl-mega-footer--middle-section">
                        <p className="mdl-typography--font-light">VoiceX © 2018</p>
                        <p className="mdl-typography--font-light">Powered by bitgrip Gmbh</p>
                    </div>

                    <div className="mdl-mega-footer--bottom-section">
                        <a className="android-link mdl-typography--font-light" href="medium.com/@anilbms75" target="_blank">Blog</a>
                        <a className="android-link mdl-typography--font-light" href="https://twitter.com/anilbms75" target="_blank">@anilbms75</a>
                    </div>

                </footer>
            </div>
        </div>
    </div>);
}


export default Home;