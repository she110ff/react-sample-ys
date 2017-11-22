import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import RevSlider, { Slide, Caption } from 'react-rev-slider';

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import { layouts } from '../layouts'


export const Home = () =>
    <LayoutProvider layouts={layouts}>
        <HomePage />
    </LayoutProvider>


class HomePage extends Component {

    render() {
        return (
            <Page layout="home">
                <Section slot="top">
                    <Slider />
                </Section>
                <Section slot="main">
                    <NextEvent />
                    <Welcome />
                    <Mission />
                    <Info />
                    <Upcomming />
                    <GridWrapper />
                    <div className="clear"></div>
                    <CallTo />
                </Section>
            </Page>
        );
    }
}        




export const CallTo = () =>
    <div className="hp1_call_to_action_section">
        <div className="sc_call_to_action sc_call_to_action_style_1 sc_call_to_action_align_left sc_call_to_action_color_style_1 width_100_per">
            <div className="content_wrap">
                <div className="columns_wrap">
                    <div className="sc_call_to_action_featured column-1_2">
                        <img alt="" src="http://placehold.it/520x320" />
                    </div><div className="sc_call_to_action_info column-1_2">
                        <h6 className="sc_call_to_action_subtitle sc_item_subtitle">Lyrics, Chords & Translations</h6>
                        <h2 className="sc_call_to_action_title sc_item_title">Worship Team Resources</h2>
                        <div className="sc_call_to_action_descr sc_item_descr">We’re passionate about Jesus and leading others to worship Him! We hope these resources help equip you and your team as you lead worship.</div>
                        <div className="sc_call_to_action_buttons sc_item_buttons">
                            <div className="sc_call_to_action_button sc_item_button">
                                <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_2 sc_button_size_large">view more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export const GridWrapper = () =>
    <article className="myportfolio-container minimal-light" id="esg-grid-5-1-wrap">
        <div id="esg-grid-5-1" className="esg-grid">
            <ul>
                <li className="filterall filter-home-1 eg-washington-wrapper">
                    <div className="esg-media-cover-wrapper">
                        <div className="esg-entry-media">
                            <img src="http://placehold.it/2400x1600" alt="" />
                        </div>
                        <div className="esg-entry-cover esg-fade" data-delay="0">
                            <div className="esg-overlay esg-fade eg-washington-container" data-delay="0"></div>
                            <div className="esg-center eg-washington-element-0-a esg-falldown" data-delay="0.1">
                                <a className="eg-washington-element-0 esgbox" href="http://placehold.it/2400x1600">
                                    <i className="eg-icon-search"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-1-a esg-falldown" data-delay="0.2">
                                <a className="eg-washington-element-1" href="post-single.html" target="_self">
                                    <i className="eg-icon-link"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-8 esg-none esg-clear"></div>
                            <div className="esg-center eg-washington-element-3 esg-flipup" data-delay="0.1">Truth Does Not Hurt</div>
                            <div className="esg-center eg-washington-element-9 esg-none esg-clear"></div>
                        </div>
                    </div>
                </li>
                <li className="filterall filter-home-1 eg-washington-wrapper">
                    <div className="esg-media-cover-wrapper">
                        <div className="esg-entry-media">
                            <img src="http://placehold.it/2400x1600" alt="" />
                        </div>
                        <div className="esg-entry-cover esg-fade" data-delay="0">
                            <div className="esg-overlay esg-fade eg-washington-container" data-delay="0"></div>
                            <div className="esg-center eg-washington-element-0-a esg-falldown" data-delay="0.1">
                                <a className="eg-washington-element-0 esgbox" href="http://placehold.it/2400x1600" >
                                    <i className="eg-icon-search"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-1-a esg-falldown" data-delay="0.2">
                                <a className="eg-washington-element-1" href="post-single.html" target="_self">
                                    <i className="eg-icon-link"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-8 esg-none esg-clear"></div>
                            <div className="esg-center eg-washington-element-3 esg-flipup" data-delay="0.1">We Give Hope</div>
                            <div className="esg-center eg-washington-element-9 esg-none esg-clear"></div>
                        </div>
                    </div>
                </li>
                <li className="filterall filter-home-1 eg-washington-wrapper">
                    <div className="esg-media-cover-wrapper">
                        <div className="esg-entry-media">
                            <img src="http://placehold.it/2400x1600" alt="" />
                        </div>
                        <div className="esg-entry-cover esg-fade" data-delay="0">
                            <div className="esg-overlay esg-fade eg-washington-container" data-delay="0"></div>
                            <div className="esg-center eg-washington-element-0-a esg-falldown" data-delay="0.1">
                                <a className="eg-washington-element-0 esgbox" href="http://placehold.it/2400x1600">
                                    <i className="eg-icon-search"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-1-a esg-falldown" data-delay="0.2">
                                <a className="eg-washington-element-1" href="post-single.html" target="_self">
                                    <i className="eg-icon-link"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-8 esg-none esg-clear"></div>
                            <div className="esg-center eg-post-2234 eg-washington-element-3 esg-flipup" data-delay="0.1">Through the Never</div>
                            <div className="esg-center eg-washington-element-9 esg-none esg-clear"></div>
                        </div>
                    </div>
                </li>
                <li className="filterall filter-home-1 eg-washington-wrapper">
                    <div className="esg-media-cover-wrapper">
                        <div className="esg-entry-media">
                            <img src="http://placehold.it/2400x1600" alt="" />
                        </div>
                        <div className="esg-entry-cover esg-fade" data-delay="0">
                            <div className="esg-overlay esg-fade eg-washington-container" data-delay="0"></div>
                            <div className="esg-center eg-washington-element-0-a esg-falldown" data-delay="0.1">
                                <a className="eg-washington-element-0 esgbox" href="http://placehold.it/2400x1600">
                                    <i className="eg-icon-search"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-1-a esg-falldown" data-delay="0.2">
                                <a className="eg-washington-element-1" href="post-single.html" target="_self">
                                    <i className="eg-icon-link"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-8 esg-none esg-clear"></div>
                            <div className="esg-center eg-washington-element-3 esg-flipup" data-delay="0.1">Forgiveness & Acceptance</div>
                            <div className="esg-center eg-washington-element-9 esg-none esg-clear"></div>
                        </div>
                    </div>
                </li>
                <li className="filterall filter-home-1 eg-washington-wrapper">
                    <div className="esg-media-cover-wrapper">
                        <div className="esg-entry-media">
                            <img src="http://placehold.it/2400x1600" alt="" />
                        </div>
                        <div className="esg-entry-cover esg-fade" data-delay="0">
                            <div className="esg-overlay esg-fade eg-washington-container" data-delay="0"></div>
                            <div className="esg-center eg-washington-element-0-a esg-falldown" data-delay="0.1">
                                <a className="eg-washington-element-0 esgbox" href="http://placehold.it/2400x1600">
                                    <i className="eg-icon-search"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-1-a esg-falldown" data-delay="0.2">
                                <a className="eg-washington-element-1" href="post-single.html" target="_self">
                                    <i className="eg-icon-link"></i>
                                </a>
                            </div>
                            <div className="esg-center eg-washington-element-8 esg-none esg-clear"></div>
                            <div className="esg-center eg-washington-element-3 esg-flipup" data-delay="0.1">The Answer Is God</div>
                            <div className="esg-center eg-washington-element-9 esg-none esg-clear"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </article>    

export const Upcomming = () =>
    <div className="hp1_upcoming_events_section">
        <div className="content_wrap">
            <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                    <div className="sc_section">
                        <div className="sc_section_inner">
                            <h6 className="sc_section_subtitle sc_item_subtitle">Worship</h6>
                            <h2 className="sc_section_title sc_item_title margin_bottom_1_2em_imp">The sound of our worship</h2>
                            <div id="myplayer"></div>
                        </div>
                    </div>
                </div><div className="column-1_2 sc_column_item sc_column_item_2 even">
                    <div className="sc_section">
                        <div className="sc_section_inner">
                            <h6 className="sc_section_subtitle sc_item_subtitle">Upcoming Events</h6>
                            <h2 className="sc_section_title sc_item_title margin_bottom_1_2em_imp">Conferences & Events</h2>
                            <div className="sc_events_wrap">
                                <div className="sc_events sc_events_style_events-2 sc_slider_nopagination sc_slider_nocontrols width_100_per" data-interval="7691">
                                    <div className="sc_events_item sc_events_item_1 odd first">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Apr</span>
                                            <span className="sc_events_item_day">24</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Church Leaders meeting</a>
                                        </h6>
                                        <span className="sc_events_item_time">1:00 pm - 7:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_2 even">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Apr</span>
                                            <span className="sc_events_item_day">09</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Prayer Day</a>
                                        </h6>
                                        <span className="sc_events_item_time">6:00 pm - 8:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_3 odd">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Mar</span>
                                            <span className="sc_events_item_day">02</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Monthly Band Tryouts</a>
                                        </h6>
                                        <span className="sc_events_item_time">3:00 pm - 7:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_4 even">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Jan</span>
                                            <span className="sc_events_item_day">31</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">WOW Conference</a>
                                        </h6>
                                        <span className="sc_events_item_time">10:00 am - 2:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_5 odd">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Jun</span>
                                            <span className="sc_events_item_day">24</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Seniors Bible Study</a>
                                        </h6>
                                        <span className="sc_events_item_time">4:00 pm - 6:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export const Info = () =>

    <div className="hp1_info_section">
        <div className="sc_section">
            <div className="sc_section_inner">
                <h1 className="sc_title sc_title_regular sc_align_center">Get Connected. What&#8217;s Your Next Step?<br />
                    Follow. Connect. Go.</h1>
                <div className="custom_heading_1">Following Jesus as disciples and connecting with others as part of a spiritual family</div>
                <div className="sc_section aligncenter">
                    <div className="sc_section_inner">
                        <a href="events.html" className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_3 sc_button_size_large width_120">small groups &amp;<br />
                        BIBLE STUDIES</a>
                        <a href="donate-now.html" className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_3 sc_button_size_large width_120">MISSIONS<br />
                        &amp; donation</a>
                        <a href="post-formats.html" className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_3 sc_button_size_large width_120">Musical<br />
                        Worship Team</a>
                    </div>
                </div>
            </div>
        </div>
    </div>    

export const Mission = () =>

    <div className="hp1_mission_section">
        <div className="content_wrap">
            <div className="columns_wrap sc_columns columns_fluid no_margins sc_columns_count_2">
                <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                    <h2 className="sc_title sc_title_regular sc_align_right">Our church mission is to ignite a passion to follow Jesus.</h2>
                </div><div className="column-1_2 sc_column_item sc_column_item_2 even">
                    <div className="sc_section">
                        <div className="sc_section_inner">
                            <p className="tpl_light">
                              “The church is the body of Christ on earth, empowered by the Holy Spirit to continue the task of reaching the lost and discipling the saved, helping them become fully devoted followers of Christ.”
                            </p>
                            <p className="tpl_light">Ephesians 4:1-16</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    

export const Welcome = () =>
    <div className="hp1_welcome_section">
        <div className="content_wrap">
            <div className="columns_wrap">
              <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                <figure className="sc_image sc_image_shape_square">
                    <a href="service-single.html">
                        <img src="http://placehold.it/520x660" alt="" />
                    </a>
                </figure>
              </div>
              <div className="column-1_2 sc_column_item sc_column_item_2 even">
                    <div className="sc_services_wrap">
                        <div className="sc_services sc_services_style_services-5 sc_services_type_icons sc_slider_nopagination sc_slider_nocontrols width_100_per" data-interval="5040" data-slides-min-width="250">
                            <h6 className="sc_services_subtitle sc_item_subtitle">Welcome</h6>
                            <h2 className="sc_services_title sc_item_title">Loving God, Loving Others and Serving the World</h2>
                            <div className="sc_services_descr sc_item_descr">We’d love to meet you! Come check us out this SUNDAY where you can meet us and see if New Life Church might be a good fit for you. Our heart and soul is to introduce and connect people with the living and powerful God.</div>
                            <div className="sc_services_item sc_services_item_1 odd first">
                                <span className="sc_icon icon-house306"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">Follow with us</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                        <p>We would love to see you and your family &amp; friends this weekend in our church at 10 am.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_services_item sc_services_item_2 even">
                                <span className="sc_icon icon-open-book6"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">What We Believe</a></h4>
                                    <div className="sc_services_item_description">
                                        <p>We believe that the Bible is God’s Word. It is accurate, authoritative and applicable to our everyday lives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_services_item sc_services_item_3 odd">
                                <span className="sc_icon icon-avatar110"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">New Here?</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                        <p>Tell us about yourself to begin your journey with connecting to our community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export const NextEvent = () =>
    <div className="hp1_next_event_section tpl_add_bg">
        <div className="content_wrap">
            <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_3 margin_bottom_null">
                <div className="column-1_3 sc_column_item sc_column_item_1 odd first">
                    <div className="sc_section margin_left_6_4286">
                        <div className="sc_section_inner">
                            <h3 className="sc_title sc_title_regular hp1_event_title_1 tpl_light">Next event in:</h3>
                            <h6 className="sc_title sc_title_regular tpl_light font_weight_400">Heart For The House Sunday</h6>
                        </div>
                    </div>
                </div><div className="column-1_3 sc_column_item sc_column_item_2 even">
                    <div id="sc_countdown_1" className="sc_countdown sc_countdown_style_1 aligncenter margin_top_null" data-date="2017-06-08" data-time="12:00:00">
                        <div className="sc_countdown_inner">
                            <div className="sc_countdown_item sc_countdown_days">
                                <span className="sc_countdown_digits">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="sc_countdown_label">Days</span>
                            </div>
                            <div className="sc_countdown_separator">:</div>
                            <div className="sc_countdown_item sc_countdown_hours">
                                <span className="sc_countdown_digits">
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="sc_countdown_label">Hours</span>
                            </div>
                            <div className="sc_countdown_separator">:</div>
                            <div className="sc_countdown_item sc_countdown_minutes">
                                <span className="sc_countdown_digits">
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="sc_countdown_label">Minutes</span>
                            </div>
                            <div className="sc_countdown_separator">:</div>
                            <div className="sc_countdown_item sc_countdown_seconds">
                                <span className="sc_countdown_digits">
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="sc_countdown_label">Seconds</span>
                            </div>
                            <div className="sc_countdown_placeholder hide"></div>
                        </div>
                    </div>
                </div><div className="column-1_3 sc_column_item sc_column_item_3 odd">
                    <div className="sc_section aligncenter margin_top_null">
                        <div className="sc_section_inner">
                            <a href="#" className="sc_button sc_button_square sc_button_style_border sc_button_color_style_4 sc_button_size_large">EVENT DETAIL</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>



class MMSlider extends Component {

    render() {
        return (
            <section className="slider_wrap slider_fullscreen slider_engine_revo slider_alias_newlife-church-home-1">
                <div id="rev_slider_2_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
                    <div id="rev_slider_2_1" className="rev_slider fullwidthabanner tp-overflow-hidden display_none" data-version="5.2.6">
                        <ul>
                            <li data-index="rs-4"
                                data-transition="random"
                                data-slotamount="7"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="500"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description="">
                                <img src="http://placehold.it/1920x768" alt="" title="slider1-3" width="1920" height="768" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                <div className="tp-caption tp-resizeme slide_large_text" id="slide-4-layer-1" data-x="['center','center','center','center']" data-hoffset="['3','0','4','0']" data-y="['top','top','top','top']" data-voffset="['228','228','261','68']" data-fontsize="['75','75','60','50']" data-lineheight="['80','80','70','55']" data-width="['none','none','693','443']" data-height="['none','none','161','none']" data-whitespace="['nowrap','nowrap','normal','normal']" data-transform_idle="o:1;" data-transform_in="y:-50px;opacity:0;s:800;e:Power3.easeInOut;" data-transform_out="opacity:0;s:300;" data-start="1350" data-splitin="none" data-splitout="none" data-responsive_offset="on">Welcome
                                    <br/> We are NewLife&nbsp;church </div>
                                <div className="tp-caption tp-resizeme slide_medium_text" id="slide-4-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['416','416','416','416']" data-fontsize="['24','24','21','24']" data-width="['879','870','691','none']" data-height="['none','71','none','none']" data-whitespace="['normal','normal','normal','nowrap']" data-visibility="['on','on','off','off']" data-transform_idle="o:1;" data-transform_in="y:-50px;opacity:0;s:990;e:Power3.easeInOut;" data-transform_out="opacity:0;s:300;" data-start="2200" data-splitin="none" data-splitout="none" data-responsive_offset="on">NewLife is a church that believes in Jesus, a church that loves God and people. Loving God, Loving People & Serving the World. </div>
                                <div className="tp-caption tp-resizeme slide_button_1" id="slide-4-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','1','0']" data-y="['top','top','top','top']" data-voffset="['528','528','448','290']" data-color="['rgba(0, 10, 0, 1.00)','rgba(0, 10, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 10, 0, 1.00)']" data-width="['848','932','639','438']" data-height="['56','56','57','none']" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:900;e:Power2.easeInOut;" data-transform_out="opacity:0;s:300;" data-start="2800" data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                    <a href="#" className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_2 sc_button_size_large">ABOUT US</a>
                                    <a href="#" className="sc_button sc_button_square sc_button_style_border sc_button_color_style_4 sc_button_size_large">VISIT US</a>
                                </div>
                            </li>
                            <li data-index="rs-5"
                                data-transition="fade"
                                data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="300"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description="">
                                <img src="http://placehold.it/1920x768" alt="" title="slider1-2" width="1920" height="768" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                <div className="tp-caption tp-resizeme" id="slide-5-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-6','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:-50px;opacity:0;s:1200;e:Power2.easeInOut;" data-transform_out="opacity:0;s:300;" data-start="500" data-responsive_offset="on">
                                    <img src="http://placehold.it/543x500" alt="" width="543" height="500" data-ww="['543px','543px','543px','404px']" data-hh="['500px','500px','500px','378px']" data-no-retina />
                                </div>
                            </li>
                            <li
                                data-index="rs-6"
                                data-transition="random"
                                data-slotamount="7"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="500"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description="">
                                <img src="http://placehold.it/1920x768" alt="" title="home1_sl2" width="1920" height="768" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                <div className="tp-caption tp-resizeme slide_large_text" id="slide-6-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['179','179','239','102']" data-fontsize="['100','100','100','75']" data-lineheight="['115','115','115','85']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;" data-transform_out="opacity:0;s:300;" data-start="1350" data-splitin="none" data-splitout="none" data-responsive_offset="on">Conference </div>
                                <div className="tp-caption tp-resizeme slide_medium_text" id="slide-6-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['312','312','312','312']" data-width="['1152','911','911','1152']" data-height="['none','97','97','none']" data-whitespace="normal" data-visibility="['on','on','off','off']" data-transform_idle="o:1;" data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;s:900;e:Power4.easeOut;" data-transform_out="opacity:0;s:300;" data-start="2600" data-splitin="none" data-splitout="none" data-responsive_offset="on">New Life Conference is about championing the church of Jesus Christ. And together, WE are the church. It is for people of all ages who are passionate about the local church and the call of the Kingdom of God. </div>
                                <div className="tp-caption tp-resizeme" id="slide-6-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','2']" data-y="['top','top','top','top']" data-voffset="['403','440','373','216']" data-width="['800','800','694','473']" data-height="['105','105','183','107']" data-whitespace="['nowrap','nowrap','normal','normal']" data-transform_idle="o:1;" data-transform_in="opacity:0;s:3000;e:Power3.easeOut;" data-transform_out="opacity:0;s:300;" data-start="3000" data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                    <div className="sc_countdown sc_countdown_style_2 aligncenter" data-date="2017-05-18" data-time="12:00:00">
                                        <div className="sc_countdown_inner">
                                            <div className="sc_countdown_item sc_countdown_days">
                                                <span className="sc_countdown_digits">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="sc_countdown_label">Days</span>
                                            </div>
                                            <div className="sc_countdown_separator">:</div>
                                            <div className="sc_countdown_item sc_countdown_hours">
                                                <span className="sc_countdown_digits">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="sc_countdown_label">Hours</span></div>
                                            <div className="sc_countdown_separator">:</div>
                                            <div className="sc_countdown_item sc_countdown_minutes">
                                                <span className="sc_countdown_digits">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="sc_countdown_label">Minutes</span>
                                            </div>
                                            <div className="sc_countdown_separator">:</div>
                                            <div className="sc_countdown_item sc_countdown_seconds">
                                                <span className="sc_countdown_digits">
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className="sc_countdown_label">Seconds</span>
                                            </div>
                                            <div className="sc_countdown_placeholder hide"></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li data-index="rs-7"
                                data-transition="random"
                                data-slotamount="7"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-easein="default"
                                data-easeout="default"
                                data-masterspeed="500"
                                data-rotate="0"
                                data-saveperformance="off"
                                data-title="Slide"
                                data-param1=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-param10=""
                                data-description="">
                                <img src="http://placehold.it/1920x768" alt="" title="slider1_1" width="1920" height="768" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                                <div className="tp-caption tp-resizeme" id="slide-7-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['1','1','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:{-250,250};y:{-150,150};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;s:1200;e:Power2.easeInOut;" data-transform_out="opacity:0;s:300;" data-start="500" data-responsive_offset="on">
                                    <img src="http://placehold.it/631x595" alt="" width="631" height="595" data-ww="['631px','631px','631px','401']" data-hh="['595px','595px','595px','359']" data-no-retina /> </div>
                            </li>
                        </ul>
                        <div className="tp-bannertimer" ></div>
                    </div>
                </div>
            </section>

       )
    }

}



const config = {
    delay:9000,
    startwidth:1920,
    startheight:768,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
};

 
class Slider extends Component {

    render() {
        return (
            <RevSlider config={config}>
                 <Slide
                    src="http://placehold.it/1920x768"
                    alt="slidebg1"
                    data-bgfit="cover"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "random",
                        'data-slotamount': "7",
                        'data-masterspeed': "500",
                        'data-hideafterloop': "0",
                        'data-hideslideonmobile': "off",
                        'data-rotate': "0",
                        'data-saveperformance': "off",
                        'data-easein': "default",
                        'data-easeout': "default"
                    }}
                >   
                    <Caption
                        class="tp-caption tp-resizeme skewfromrightshort fadeout" 
                        id="slide-6-layer-1"
                        data-x="['center','center','center','center']" 
                        data-hoffset="['3','0','4','0']" 
                        data-y="['top','top','top','top']" 
                        data-voffset="['228','228','261','68']" 
                        data-fontsize="['75','75','60','50']" 
                        data-lineheight="['80','80','70','55']" 
                        data-width="none" 
                        data-height="none" 
                        data-whitespace="nowarp" 
                        data-transform_idle="o:1;" 
                        data-transform_in="x:{-250,250};y:{-150,150};rX:{-90,90};rY:{-90,90};rZ:{-360,360};sX:0;sY:0;opacity:0;s:1200;e:Power2.easeInOut;" 
                        data-transform_out="opacity:0;s:300;" 
                        data-start="500" 
                        data-splitin="none" 
                        data-splitout="none" 
                        data-responsive_offset="on"
                        data-easing="Power4.easeOut"
                    >
                        Welcome

                    </Caption>
                </Slide>
              
                <Slide
                    src="http://placehold.it/1920x768"
                    alt="slidebg1"
                    data-bgfit="cover"
                    data-bgposition="left top"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "random",
                        'data-slotamount': "7",
                        'data-masterspeed': "1500"
                    }}
                >   
                </Slide>
            </RevSlider>
            )
        }

}