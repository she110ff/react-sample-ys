import React from 'react'
import { Link, Route } from 'react-router-dom'
import { MainMenu, AboutMenu } from './menus'
//import './stylesheets/pages.scss'

const PageTemplate = ({children}) =>
    <div className="body_wrap">
        <div className="page_wrap">
            <div className="top_panel_fixed_wrap"></div>
            <MainMenu />
            {children}
        </div>
    </div>



export const Home = () =>
    <PageTemplate>
        <Slider_2_1 />
        <PageWrap />
    </PageTemplate>


export const PageWrap = () =>
    <div className="page_content_wrap page_paddings_no">
        <div className="content">
            <article className="post_item post_item_single page">
                <section className="post_content">
                    <NextEvent />
                </section>
            </article>
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

export const Slider_2_1 = () =>

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
                <div className="tp-bannertimer"></div>
            </div>
        </div>
    </section>


export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

export const Events = () =>
    <PageTemplate>
      <section className="events">
          <h1>[Event Calendar]</h1>
      </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Product Catalog]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={AboutMenu} />
            <Route exact path="/about" component={Company}/>
            <Route path="/about/history" component={History}/>
            <Route path="/about/services" component={Services}/>
            <Route path="/about/location" component={Location}/>
        </section>
    </PageTemplate>

export const Services = () =>
    <section className="services">
        <h2>Our Services</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Location = () =>
    <section className="location">
        <h2>Our Location</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam.
        </p>
        <p>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const Company = () =>
    <section className="company">
        <h2>About the Company</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>

export const History = () =>
    <section className="history">
        <h2>Our History</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
        <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
            In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
            nunc egestas porttitor.
        </p>
        <p> Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
            quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
            nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
        </p>
    </section>