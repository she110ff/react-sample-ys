import React from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'
//import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

export const Header = () =>

    <header className="top_panel_wrap top_panel_style_3 scheme_original">
        <div className="top_panel_wrap_inner top_panel_inner_style_3 top_panel_position_above">
            <div className="top_panel_top">
                <div className="content_wrap clearfix">
                    <div className="top_panel_top_contact_area">
                        Contact us on 0 800 123-4567 or <a href="mailto:support@axiomthemes.com">support@axiomthemes.com</a>
                    </div>
                    <div className="top_panel_top_user_area">
                        <ul id="menu_user" className="menu_user_nav">
                            <li className="menu_user_login">
                                <a href="#popup_login" className="popup_link popup_login_link icon-user"></a>
                            </li>
                        </ul>
                        <div className="top_panel_top_socials">
                            <div className="sc_socials sc_socials_type_icons sc_socials_shape_square sc_socials_size_tiny">
                                <div className="sc_socials_item">
                                    <a href="#" target="_blank" className="social_icons social_facebook">
                                        <span className="icon-facebook"></span>
                                    </a>
                                </div>
                                <div className="sc_socials_item">
                                    <a href="#" target="_blank" className="social_icons social_twitter">
                                        <span className="icon-twitter"></span>
                                    </a>
                                </div>
                                <div className="sc_socials_item">
                                    <a href="#" target="_blank" className="social_icons social_gplus">
                                        <span className="icon-gplus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="top_panel_top_search">
                            <div className="search_wrap search_style_regular search_state_closed">
                                <div className="search_form_wrap">
                                    <form role="search" method="get" className="search_form" action="#">
                                        <button type="submit" className="search_submit icon-search" title="Open search"></button>
                                        <input type="text" className="search_field" placeholder="Search" value="" name="s" />
                                    </form>
                                </div>
                                <div className="search_results widget_area scheme_original">
                                    <a className="search_results_close icon-cancel"></a>
                                    <div className="search_results_content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top_panel_middle">
                <div className="content_wrap">
                    <div className="contact_logo">
                        <div className="logo">
                            <a href="index.html">
                                <img src="http://placehold.it/122x60" className="logo_main" alt=""/>
                                <img src="http://placehold.it/122x60" className="logo_fixed" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="menu_main_wrap">
                        <nav className="menu_main_nav_area">
                            <ul id="menu_main" className="menu_main_nav">
                                <li className="menu-item menu-item-has-children">
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="#">Pages</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#">Tools</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item">
                                                    <a href="support.html">Support</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="customization.html">Customization</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#">Features</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item">
                                                    <a href="typography.html">Typography</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="shortcodes.html">Shortcodes</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="page-404.html">404 Page</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="events-calendar.html">Events Calendar</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="shop.html">Shop</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/events">
                                        Events
                                    </NavLink>
                                </li>
                                <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                                    <NavLink to="/sermons">
                                        Sermons
                                    </NavLink>
                                    <ul className="sub-menu">
                                        <li className="menu-item current-menu-item">
                                            <a href="sermons.html">All Sermons</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="sermons-boxed.html">Sermons Boxed</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="sermons-fullscreen.html">Sermons Fullscreen</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <NavLink to="/gallery">
                                        Gallery
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <a href="post-formats.html">Contacts</a>
                                </li>
                                <li className="donate-btn menu-item">
                                    <a href="donate-now.html">Give</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>


export const HeaderMobile = () =>
        <div className="header_mobile">
            <div className="content_wrap">
                <div className="menu_button icon-menu"></div>
                <div className="logo">
                    <a href="index.html">
                        <img src="http://placehold.it/122x60" className="logo_main" alt=""/>
                    </a>
                </div>
            </div>
            <div className="side_wrap">
                <div className="close">Close</div>
                <div className="panel_top">
                    <nav className="menu_main_nav_area">
                        <ul id="menu_main_mobile" className="menu_main_nav">
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <a href="index.html">Home 1</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="homepage-2.html">Home 2</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="homepage-3.html">Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Tools</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="support.html">Support</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="customization.html">Customization</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Features</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="typography.html">Typography</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="shortcodes.html">Shortcodes</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="page-404.html">404 Page</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="events-calendar.html">Events Calendar</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="shop.html">Shop</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contacts.html">Contacts</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="events.html">Events</a>
                            </li>
                            <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                                <a href="#">Sermons</a>
                                <ul className="sub-menu">
                                    <li className="menu-item current-menu-item">
                                        <a href="sermons.html">All Sermons</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="sermons-boxed.html">Sermons Boxed</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="sermons-fullscreen.html">Sermons Fullscreen</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#">Gallery</a>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <a href="gallery-grid.html">Grid Gallery</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="gallery-cobbles.html">Cobbles Gallery</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="gallery-masonry.html">Masonry Gallery</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="post-formats.html">Blog</a>
                            </li>
                            <li className="donate-btn menu-item">
                                <a href="donate-now.html">Give</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="search_wrap search_style_regular search_state_fixed">
                        <div className="search_form_wrap">
                            <form role="search" method="get" className="search_form" action="#">
                                <button type="submit" className="search_submit icon-search" title="Start search"></button>
                                <input type="text" className="search_field" placeholder="Search" value="" name="s" />
                            </form>
                        </div>
                        <div className="search_results widget_area scheme_original">
                            <a className="search_results_close icon-cancel"></a>
                            <div className="search_results_content"></div>
                        </div>
                    </div>
                    <div className="login">
                        <a href="#popup_login" className="popup_link popup_login_link icon-user">Login</a>
                    </div>
                </div>
                <div className="panel_bottom">
                    <div className="contact_socials">
                        <div className="sc_socials sc_socials_type_icons sc_socials_shape_square sc_socials_size_small">
                            <div className="sc_socials_item">
                                <a href="#" target="_blank" className="social_icons social_facebook">
                                    <span className="icon-facebook"></span>
                                </a>
                            </div>
                            <div className="sc_socials_item">
                                <a href="#" target="_blank" className="social_icons social_twitter">
                                    <span className="icon-twitter"></span>
                                </a>
                            </div>
                            <div className="sc_socials_item">
                                <a href="#" target="_blank" className="social_icons social_gplus">
                                    <span className="icon-gplus"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mask"></div>
        </div>



export const AboutMenu = ({ match }) =>
    <div classNameName="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>