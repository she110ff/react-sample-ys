import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import { layouts } from '../layouts'


export const Gallery = () =>
    <LayoutProvider layouts={layouts}>
        <GalleryPage />
    </LayoutProvider>


class GalleryPage extends Component {
    render() {
        return (
            <Page layout="public">
                <Section slot="top">
                    <Breadcrumbs />
                </Section>
                <Section slot="main">
                    <Masonry />
                </Section>
            </Page>
        );
    }
}        


const Breadcrumbs = () =>
    <div className="top_panel_title top_panel_style_3 title_present breadcrumbs_present scheme_original">
        <div className="top_panel_title_inner top_panel_inner_style_3 breadcrumbs_block_bg3">
            <div className="content_wrap">
                <h1 className="page_title">Masonry Gallery</h1>
                <div className="breadcrumbs">
                    <a className="breadcrumbs_item home" href="index.html">Home</a>
                    <span className="breadcrumbs_delimiter"></span>
                    <span className="breadcrumbs_item current">Masonry Gallery</span>
                </div>
            </div>
        </div>
    </div>    

const Masonry = () =>
    <div className="content">
        <article className="post_item post_item_single page">
            <section className="post_content tpl_gallery_section">
                <article className="myportfolio-container gallery" id="esg-grid-3-1-wrap">
                    <div id="esg-grid-3-1" className="esg-grid">
                        <article className="esg-filters esg-singlefilters grid-filters margin_bottom_20">
                            <div className="esg-filter-wrapper esg-fgc-3 margin_left_3 margin_right_3">
                                <div className="esg-filterbutton selected esg-allfilter" data-filter="filterall" data-fid="-1">
                                    <span>All</span>
                                </div>
                                <div className="esg-filterbutton" data-fid="123" data-filter="filter-conferences">
                                    <span>conferences</span>
                                    <span className="esg-filter-checked">
                                        <i className="eg-icon-ok-1"></i>
                                    </span>
                                </div>
                                <div className="esg-filterbutton" data-fid="121" data-filter="filter-events">
                                    <span>events</span>
                                    <span className="esg-filter-checked">
                                        <i className="eg-icon-ok-1"></i>
                                    </span>
                                </div>
                                <div className="esg-filterbutton" data-fid="124" data-filter="filter-sermons">
                                    <span>sermons</span>
                                    <span className="esg-filter-checked">
                                        <i className="eg-icon-ok-1"></i>
                                    </span>
                                </div>
                                <div className="esg-filterbutton" data-fid="122" data-filter="filter-worship">
                                    <span>worship</span>
                                    <span className="esg-filter-checked">
                                        <i className="eg-icon-ok-1"></i>
                                    </span>
                                </div>
                                <div className="eg-clearfix"></div>
                            </div>
                        </article>
                        <div className="esg-clear-no-height"></div>
                        <ul>
                            <li className="filterall filter-gallery filter-events filter-worship eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1220" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1220">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-conferences eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-events filter-sermons eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-worship eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-conferences filter-sermons eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-events eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x2200" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x2200">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-sermons eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-worship eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-conferences filter-events eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x2040" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x2040">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-worship eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-events eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>                                                        
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                            <li className="filterall filter-gallery filter-conferences eg-gallery-wrapper">
                                <div className="esg-media-cover-wrapper">
                                    <div className="esg-entry-media">
                                        <img src="http://placehold.it/2400x1600" alt=""/>
                                    </div>
                                    <div className="esg-entry-cover esg-fade" data-delay="0">
                                        <div className="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                                        <div className="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                                            <a className="eg-gallery-element-0 esgbox" href="http://placehold.it/2400x1600">
                                                <i className="eg-icon-plus"></i>
                                            </a>
                                        </div>
                                        <div className="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <article className="esg-filters esg-singlefilters margin_top_50 text_align_center">
                            <div className="esg-pagination esg-fgc-3 margin_left_3 margin_right_3"></div>
                        </article>
                        <div className="esg-clear-no-height"></div>
                    </div>
                </article>
                <div className="clear"></div>
            </section>
        </article>
    </div>

