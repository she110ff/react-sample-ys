import React from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom'

export const Footer = () =>
    <footer className="footer_wrap widget_area scheme_original">
        <div className="footer_wrap_inner widget_area_inner">
            <div className="content_wrap">
                <div className="columns_wrap">
                    <aside className="column-1_4 widget widget_text">
                        <h5 className="widget_title">About Our Church</h5>
                        <div className="textwidget">
                            <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
                            <p className="textwidget_info">
                                <strong>E: info@yoursite.com</strong>
                            </p>
                            <p className="textwidget_info">
                                <strong>L: <a href="#">Google Map</a></strong>
                            </p>
                        </div>
                    </aside>
                    <aside className="column-1_4 widget widget_recent_posts">
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
                <aside className="column-1_4 widget null-instagram-feed">
                    <h5 className="widget_title">Instagram</h5>
                    <ul className="instagram-pics instagram-size-large">
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="http://placehold.it/55x55" alt="" title="" />
                            </a>
                        </li>
                    </ul>
                </aside>
                <aside className="column-1_4 widget widget_recent_comments">
                    <h5 className="widget_title">Recent Comments</h5>
                    <ul id="recentcomments">
                        <li className="recentcomments">
                            <span className="comment-author-link">John Dilan</span> on
                            <a href="post-single.html">Persevere: The Book of James</a>
                        </li>
                        <li className="recentcomments">
                            <span className="comment-author-link">John Doe</span> on
                            <a href="post-single.html">The Meanings of Love in the Bible</a>
                        </li>
                        <li className="recentcomments">
                            <span className="comment-author-link">John Doe</span> on
                            <a href="#">The Meanings of Love in the Bible</a>
                        </li>
                    </ul>
                </aside>
                </div>
            </div>
        </div>
    </footer>


export const CopyWrap = () =>
    <div className="copyright_wrap copyright_style_text scheme_original">
        <div className="copyright_wrap_inner">
            <div className="content_wrap">
                <div className="copyright_text">ThemeREX © 2017 All Rights Reserved <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>    