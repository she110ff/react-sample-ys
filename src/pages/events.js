import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider, Page, Section } from '../libs/layout'

import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import { layouts } from '../layouts'


export const Events = () =>
    <LayoutProvider layouts={layouts}>
        <EventPage />
    </LayoutProvider>


class EventPage extends Component {
    render() {
        return (
            <Page layout="ctype">
                <Section slot="top">
                    <Breadcrumbs />
                </Section>
                <Section slot="main">
                    <EventList />
                </Section>
            </Page>
        )
    }
}        


const Breadcrumbs = () =>
    <div className="top_panel_title top_panel_style_3 title_present breadcrumbs_present scheme_original">
        <div className="top_panel_title_inner top_panel_inner_style_3 breadcrumbs_block_bg3">
            <div className="content_wrap">
                <h1 className="page_title">All Events</h1>
                <div className="breadcrumbs">
                    <a className="breadcrumbs_item home" href="index.html">Home</a>
                    <span className="breadcrumbs_delimiter"></span>
                    <a className="breadcrumbs_item all" href="#">Upcoming Events</a>
                    <span className="breadcrumbs_delimiter"></span>
                    <span className="breadcrumbs_item current">All Events</span>
                </div>
            </div>
        </div>
    </div>



class EventList extends Component{

    render() {
        return (
        <div className="content">
            <section className="post tribe_events_wrapper">
                <article className="post_content">
                    <div id="tribe-events-pg-template">
                        <div id="tribe-events" className="tribe-no-js" data-live_ajax="1" data-datepicker_format="0" data-category="">
                            <div className="tribe-events-before-html"></div>
                            <span className="tribe-events-ajax-loading">
                                <img className="tribe-events-spinner-medium" src="js/vendor/the-events-calendar/images/tribe-loading.gif" alt="Loading Events" />
                            </span>
                            <div id="tribe-events-content-wrapper" className="tribe-clearfix">
                                <input type="hidden" id="tribe-events-list-hash" value=""/>
                                <div id="tribe-events-bar">
                                    <form id="tribe-bar-form" className="tribe-clearfix" name="tribe-bar-form" method="post" action="#">
                                        <div id="tribe-bar-collapse-toggle">
                                            Find Events<span className="tribe-bar-toggle-arrow"></span>
                                        </div>
                                        <div id="tribe-bar-views">
                                            <div className="tribe-bar-views-inner tribe-clearfix">
                                                <h3 className="tribe-events-visuallyhidden">Event Views Navigation</h3>
                                                <label>View As</label>
                                                <select className="tribe-bar-views-select tribe-no-param" name="tribe-bar-view">
                                                    <option selected value="#" data-view="list">
                                                        List </option>
                                                    <option value="#" data-view="month">
                                                        Month </option>
                                                    <option value="#" data-view="day">
                                                        Day </option>
                                                </select>
                                            </div>
                                         </div>

                                        <div className="tribe-bar-filters">
                                            <div className="tribe-bar-filters-inner tribe-clearfix">
                                                <div className="tribe-bar-date-filter">
                                                    <label className="label-tribe-bar-date" for="tribe-bar-date">Events From</label>
                                                    <input type="text" name="tribe-bar-date" className="position_relative" id="tribe-bar-date" value="" placeholder="Date"/>
                                                    <input type="hidden" name="tribe-bar-date-day" id="tribe-bar-date-day" className="tribe-no-param" value=""/> </div>
                                                <div className="tribe-bar-search-filter">
                                                    <label className="label-tribe-bar-search" for="tribe-bar-search">Search</label>
                                                    <input type="text" name="tribe-bar-search" id="tribe-bar-search" value="" placeholder="Search"/> </div>
                                                <div className="tribe-bar-submit">
                                                    <input className="tribe-events-button tribe-no-param" type="submit" name="submit-bar" value="Find Events" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div id="tribe-events-content" className="tribe-events-list">
                                    <h2 className="tribe-events-page-title">Upcoming Events</h2>
                                    <div id="tribe-events-header" data-title="Upcoming Events &#8211; Events &#8211; New Life Church" data-startofweek="1" data-view="list" data-baseurl="#">
                                        <ul className="tribe-events-sub-nav">
                                            <li className="tribe-events-nav-previous tribe-events-nav-left tribe-events-past" aria-label="previous events link">
                                                <a href="#" rel="prev">
                                                    <span>&laquo;</span> Previous Events
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tribe-events-loop">
                                        <span className='tribe-events-list-separator-month'>
                                            <span>June 2016</span>
                                        </span>
                                        <div className="type-tribe_events tribe-clearfix tribe-events-first">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="Listen to the Wind Words" rel="bookmark">
                                                    Listen to the Wind Words
                                                </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">June 19, 2016</span> -
                                                        <span className="tribe-event-date-end">June 21, 2016</span>
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>,
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                            <span className="tribe-country-name">United States</span>

                                                            </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>
                                        </div>
                                        <span className="tribe-events-list-separator-month">
                                            <span>June 2019</span>
                                        </span>
                                        <div className="type-tribe_events tribe-clearfix">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="Seniors Bible Study">
                                                    Seniors Bible Study </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">June 24, 2019 @ 4:00 pm</span> -
                                                        <span className="tribe-event-time">6:00 pm</span>
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>,
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                 <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                                <span className="tribe-country-name">United States</span>
                                                             </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                               </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>                          
                                        </div>
                                        <span className="tribe-events-list-separator-month">
                                            <span>January 2020</span>
                                        </span>
                                        <div className="type-tribe_events tribe-clearfix">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="WOW Conference">
                                                    WOW Conference  
                                                </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">January 31, 2020 @ 10:00 am</span> - 
                                                        <span className="tribe-event-time">2:00 pm</span> 
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>, 
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                                <span className="tribe-country-name">United States</span>
                                                            </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                               </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>                                                        
                                        </div>
                                        <span className="tribe-events-list-separator-month">
                                            <span>March 2020</span>
                                        </span>
                                        <div className="type-tribe_events tribe-clearfix">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="Monthly Band Tryouts">
                                                    Monthly Band Tryouts
                                                </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">March 2, 2020 @ 3:00 pm</span> -
                                                        <span className="tribe-event-time">7:00 pm</span>
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>,
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                                <span className="tribe-country-name">United States</span>
                                                            </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="monthly-band-tryouts" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>                              
                                        </div>
                                        <span className='tribe-events-list-separator-month'>
                                            <span>April 2020</span></span>
                                        <div className="type-tribe_events tribe-clearfix">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="Prayer Day">
                                                    Prayer Day
                                                </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">April 9, 2020 @ 6:00 pm</span> -
                                                        <span className="tribe-event-time">8:00 pm</span>
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>,
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                                <span className="tribe-country-name">United States</span>
                                                            </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>
                                        </div>
                                        <div className="type-tribe_events tribe-clearfix tribe-events-last">
                                            <h2 className="tribe-events-list-event-title">
                                                <a className="tribe-event-url" href="event-single.html" title="Church Leaders meeting">
                                                    Church Leaders meeting
                                                </a>
                                            </h2>
                                            <div className="tribe-events-event-meta">
                                                <div className="author location">
                                                    <div className="tribe-event-schedule-details">
                                                        <span className="tribe-event-date-start">April 24, 2020 @ 1:00 pm</span> -
                                                        <span className="tribe-event-time">7:00 pm</span>
                                                    </div>
                                                    <div className="tribe-events-venue-details">
                                                        <span className="author fn org">City Hall</span>,
                                                        <address className="tribe-events-address">
                                                            <span className="tribe-address">
                                                                <span className="tribe-street-address">45 Montgomery St.</span>
                                                                 <br/>
                                                                <span className="tribe-locality">Washington</span>
                                                                <span className="tribe-delimiter">,</span>
                                                                <span className="tribe-country-name">United States</span>
                                                            </span>
                                                        </address>
                                                        <a className="tribe-events-gmap" href="http://maps.google.com/maps?f=q&#038;source=s_q&#038;hl=en&#038;geocode=&#038;q=45+Montgomery+St.+Washington+United+States" title="Click to view a Google Map" target="_blank">+ Google Map</a>
                                                    </div>
                                                 </div>
                                            </div>
                                            <div className="tribe-events-event-image">
                                                <a href="event-single.html">
                                                    <img src="http://placehold.it/315x210" alt="" />
                                                </a>
                                            </div>
                                            <div className="tribe-events-list-event-description tribe-events-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&hellip;</p>
                                                <a href="event-single.html" className="tribe-events-read-more">Find out more &raquo;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tribe-events-footer">
                                        <ul className="tribe-events-sub-nav">
                                            <li className="tribe-events-nav-previous tribe-events-nav-left tribe-events-past" aria-label="previous events link">
                                                <a href="#" rel="prev">
                                                    <span>&laquo;</span> Previous Events
                                                </a>
                                            </li>
                                            <li className="tribe-events-nav-previous tribe-events-nav-right" aria-label="next events link">
                                                <a href="#" rel="next">  Next Events
                                                    <span>&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="tribe-events-ical tribe-events-button" title="Use this to share calendar data with Google Calendar, Apple iCal and other compatible apps" href="#">+ Export Listed Events</a>
                                </div>
                                <div className="tribe-clear"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
        )
    }
}
