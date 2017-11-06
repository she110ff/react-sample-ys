import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import { layouts } from '../layouts'


export const Sermons = () =>
    <LayoutProvider layouts={layouts}>
        <SermonsPage />
    </LayoutProvider>


class SermonsPage extends Component {
    render() {
        return (
            <Page layout="public">
                <Section slot="top">
                    <Breadcrumbs />
                </Section>
                <Section slot="main">
                    <SermonList />
                    <SideBarWidget />
                </Section>
            </Page>
        );
    }
}        


const Breadcrumbs = () =>
    <div className="top_panel_title top_panel_style_3 title_present breadcrumbs_present scheme_original">
        <div className="top_panel_title_inner top_panel_inner_style_3 breadcrumbs_block_bg4">
            <div className="content_wrap">
                <h1 className="page_title">All sermons</h1>
                <div className="breadcrumbs">
                    <a className="breadcrumbs_item home" href="index.html">Home</a>
                    <span className="breadcrumbs_delimiter"></span>
                    <span className="breadcrumbs_item current">All sermons</span>
                </div>
            </div>
        </div>
    </div>

const SermonList = () =>
    <div  className="content">
        <SermonOdd />
        <SermonEven />
        <nav id="pagination" className="pagination_wrap pagination_pages">
            <span className="pager_current active ">1</span>
            <a href="#" className="">2</a>
            <a href="#" className="">3</a>
            <a href="#" className="pager_next "></a>
            <a href="#" className="pager_last "></a>
        </nav>  
    </div>  

export const SermonOdd = () =>
    <article className="post_item post_item_sermons odd sermons">
        <div className="post_featured">
            <div className="post_thumb" data-title="Good Friday &#038; Easter Sunday">
                <a className="hover_icon hover_icon_link" href="sermons-single.html">
                    <img alt="" src="http://placehold.it/370x288" />
                </a>
            </div>
        </div>
        <div className="post_content clearfix">
            <h4 className="post_title">
                <a href="sermons-single.html">Good Friday &#038; Easter Sunday</a>
            </h4>
            <div className="post_descr">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="post_info">
                    <span className="post_info_item post_info_posted_by">by Jane Doe</span>
                    <span className="post_info_item">
                        <span className="post_info_date">Friday, July 31, 2016</span>
                    </span>
                </div>
                <div className="post_custom_fields">
                    <span className="post-custom_field-key">
                        <a href="https://drive.google.com" download className="custom_field_link">
                            <span className="icon-iconmonstr-download-11-icon"></span>
                        </a>
                    </span>
                    <span className="post-custom_field-key">
                        <a href="media/AxiomthemesblankPDF.pdf" download className="custom_field_link">
                            <span className="icon-iconmonstr-pdf-file-2-icon"></span>
                        </a>
                    </span>
                    <span className="post-custom_field-key">
                        <a href="#popup-video-1" className="sc_popup_link custom_field_link">
                            <span className="icon-iconmonstr-video-camera-icon"></span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div id="popup-video-1" className="sc_popup mfp-with-anim mfp-hide popup-video ">
            <div className="sc_video_player">
                <div className="sc_video_frame sc_video_play_button hover_icon hover_icon_play width_100_per" data-width="100%" data-height="433" data-video="&lt;iframe className=&quot;video_frame&quot; src=&quot;https://player.vimeo.com/video/34767613?autoplay=1&quot; width=&quot;100%&quot; height=&quot;433&quot; webkitAllowFullScreen=&quot;webkitAllowFullScreen&quot; mozallowfullscreen=&quot;mozallowfullscreen&quot; allowFullScreen=&quot;allowFullScreen&quot;&gt;&lt;/iframe&gt;">
                    <img alt="" src="http://placehold.it/370x288" />
                </div>
            </div>
        </div>
    </article>


export const SermonEven = () =>
    <article className="post_item post_item_sermons even sermons  last sermons">
        <div className="post_featured">
            <div className="post_thumb" data-title="Persevere: The Book of James">
                <a className="hover_icon hover_icon_link" href="sermons-single.html">
                    <img alt="" src="http://placehold.it/370x288"/>
                </a>
            </div>
        </div>
        <div className="post_content clearfix">
            <h4 className="post_title">
                <a href="sermons-single.html">Persevere: The Book of James</a>
            </h4>
            <div className="post_descr">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className="post_info">
                    <span className="post_info_item post_info_posted_by">by Jane Doe</span>
                    <span className="post_info_item post_info_posted"> 
                        <span className="post_info_date">Tuesday, September 1, 2016</span>
                    </span>
                </div>
                <div className="post_custom_fields">
                    <span className="post-custom_field-key">
                        <a href="https://drive.google.com" download className="custom_field_link">
                            <span className="icon-iconmonstr-download-11-icon"></span>
                        </a>
                    </span>
                    <span className="post-custom_field-key">
                        <a href="media/AxiomthemesblankPDF.pdf" download className="custom_field_link">
                            <span className="icon-iconmonstr-pdf-file-2-icon"></span>
                        </a>
                    </span>
                    <span className="post-custom_field-key">
                        <a href="#popup-video-2" className="sc_popup_link custom_field_link">
                            <span className="icon-iconmonstr-video-camera-icon"></span>
                        </a>
                    </span>
                    <span className="post-custom_field-key">
                        <a href="#popup-audio-2" className="sc_popup_link custom_field_link">
                            <span className="icon-music"></span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div id="popup-audio-2" className="sc_popup mfp-with-anim mfp-hide popup-audio ">
            <div className="sc_audio_player sc_audio" data-width="" data-height="">
                <div className="sc_audio_container">
                    <audio className="sc_audio" src="media/Dream-Music-Relax.mp3"></audio>
                </div>
            </div>
        </div>
        <div id="popup-video-2" className="sc_popup mfp-with-anim mfp-hide popup-video ">
            <div className="sc_video_player">
                <div className="sc_video_frame sc_video_play_button hover_icon hover_icon_play width_100_per" data-width="100%" data-height="433" data-video="&lt;iframe className=&quot;video_frame&quot; src=&quot;https://player.vimeo.com/video/34767613?autoplay=1&quot; width=&quot;100%&quot; height=&quot;433&quot; webkitAllowFullScreen=&quot;webkitAllowFullScreen&quot; mozallowfullscreen=&quot;mozallowfullscreen&quot; allowFullScreen=&quot;allowFullScreen&quot;&gt;&lt;/iframe&gt;">
                    <img alt="" src="http://placehold.it/370x288"/>
                </div>
            </div>
        </div>
    </article>


export const SideBarWidget = () =>
    <div className="sidebar widget_area scheme_original">
        <div className="sidebar_inner widget_area_inner">
            <aside className="widget widget_categories">
                <h5 className="widget_title">Latest Sermons</h5>
                <ul>
                    <li>
                        <a href="#">Blogger</a> (7)
                    </li>
                    <li>
                        <a href="#">Gallery</a> (25)
                    </li>
                    <li>
                        <a href="#">Home 1</a> (10)
                    </li>
                    <li>
                        <a href="#">Home 2</a> (8)
                    </li>
                    <li>
                        <a href="#">Masonry (2 columns)</a> (15)
                    </li>
                    <li>
                        <a href="#">Masonry (3 columns)</a> (15)
                    </li>
                    <li>
                        <a href="#">Mission</a> (3)
                    </li>
                    <li>
                        <a href="#">Portfolio (2 columns)</a> (15)
                    </li>
                    <li>
                        <a href="#">Portfolio (3 columns)</a> (15)
                    </li>
                    <li>
                        <a href="#">Post formats</a> (11)
                    </li>
                    <li>
                        <a href="#">Sermons</a> (6)
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_recent_posts">
            <h5 className="widget_title">Latest Sermons</h5>
            <article className="post_item with_thumb first">
                <div className="post_thumb">
                    <img alt="" src="http://placehold.it/75x75"/>
                </div>
                <div className="post_content">
                    <h6 className="post_title">
                        <a href="post-single.html">5 Reasons to Love Churches in 2016</a>
                    </h6>
                    <div className="post_info">
                            <span className="post_info_item">
                                <a href="#" className="post_info_date">Tuesday, April 26, 2016</a>
                            </span>
                    </div>
                </div>
            </article>
            <article className="post_item with_thumb">
                <div className="post_thumb">
                    <img alt="" src="http://placehold.it/75x75"/>
                </div>
                <div className="post_content">
                    <h6 className="post_title">
                        <a href="post-single.html">5 Questions for Decision Makers</a>
                    </h6>
                    <div className="post_info">
                            <span className="post_info_item">
                                <a href="#" className="post_info_date">Monday, April 25, 2016</a>
                            </span>
                    </div>
                </div>
            </article>
        </aside>
        <aside className="widget widget_recent_comments">
            <h5 className="widget_title">Recent Comments</h5>
            <ul>
                <li className="recentcomments">
                    <span className="comment-author-link">John Dilan</span> on <a href="post-single.html">Persevere: The Book of James</a>
                </li>
                <li className="recentcomments">
                    <span className="comment-author-link">John Doe</span> on <a href="post-single.html">The Meanings of Love in the Bible</a>
                </li>
                <li className="recentcomments">
                    <span className="comment-author-link">John Doe</span> on <a href="post-single.html">The Meanings of Love in the Bible</a>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_tag_cloud">
            <h5 className="widget_title">Tags</h5>
            <div className="tagcloud">
                <a href="#" title="4 topics">change</a>
                <a href="#" title="3 topics">christian</a>
                <a href="#" title="3 topics">church</a>
                <a href="#" title="7 topics">conferences</a>
                <a href="#" title="9 topics">events</a>
                <a href="#" title="4 topics">family</a>
                <a href="#" title="4 topics">god</a>
                <a href="#" title="11 topics">post format</a>
                <a href="#" title="4 topics">religion</a>
                <a href="#" title="8 topics">sermons</a>
                <a href="#" title="7 topics">worship</a>
            </div>
        </aside>
        <aside className="widget widget_calendar">
            <table className="tpl-calendar">
                <thead>
                <tr>
                    <th className="month_prev">
                        <a href="#" title="View posts for December 2016"></a>
                    </th>
                    <th className="month_cur" colspan="5">January
                        <span>2017</span>
                    </th>
                    <th className="month_next">
                        <a href="#" title="View posts for February 2017"></a>
                    </th>
                </tr>
                <tr>
                    <th className="weekday" scope="col" title="Monday">Mon</th>
                    <th className="weekday" scope="col" title="Tuesday">Tue</th>
                    <th className="weekday" scope="col" title="Wednesday">Wed</th>
                    <th className="weekday" scope="col" title="Thursday">Thu</th>
                    <th className="weekday" scope="col" title="Friday">Fri</th>
                    <th className="weekday" scope="col" title="Saturday">Sat</th>
                    <th className="weekday" scope="col" title="Sunday">Sun</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colspan="6" className="pad">
                        <span className="day_wrap">&nbsp;</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">1</span>
                    </td>
                </tr>
                <tr>
                    <td className="day">
                        <span className="day_wrap">2</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">3</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">4</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">5</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">6</span>
                    </td>
                    <td className="today">
                        <span className="day_wrap">7</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">8</span>
                    </td>
                </tr>
                <tr>
                    <td className="day">
                        <span className="day_wrap">9</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">10</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">11</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">12</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">13</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">14</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">15</span>
                    </td>
                </tr>
                <tr>
                    <td className="day">
                        <span className="day_wrap">16</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">17</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">18</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">19</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">20</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">21</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">22</span>
                    </td>
                </tr>
                <tr>
                    <td className="day">
                        <span className="day_wrap">23</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">24</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">25</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">26</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">27</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">28</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">29</span>
                    </td>
                </tr>
                <tr>
                    <td className="day">
                        <span className="day_wrap">30</span>
                    </td>
                    <td className="day">
                        <span className="day_wrap">31</span>
                    </td>
                    <td className="pad" colspan="5">
                        <span className="day_wrap">&nbsp;</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </aside>
        <aside className="widget widget_search">
            <form method="get" className="search_form" action="#">
                <input type="text" className="search_field" placeholder="Search" value="" name="s" title="Search for:" />
                <button type="submit" className="search_button icon-search"></button>
            </form>
        </aside>
        </div>
    </div>