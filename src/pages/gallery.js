import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import { layouts } from '../layouts'


export const Galleries = () =>
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
        )
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

const photos = [
  {src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width:4, height:3},
  {src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width:1, height:1},
  {src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width:3, height:4},

  {src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width:3, height:4},
  {src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width:3, height:4},
  {src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width:4, height:3},

  {src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width:3, height:4},
  {src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width:4, height:3},
  {src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width:3, height:3}
]


class Masonry extends Component{

    constructor(){             
        super()                 
        this.state = { currentImage: 0 } 
        this.closeLightbox = this.closeLightbox.bind(this) 
        this.openLightbox = this.openLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
    }
    openLightbox(event, obj) {
        console.log('open')
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        })  
    }
    closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        }) 
    }
    gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,                                                           
        })  
    }
    gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,                                            
        }) 
    }

    render() {
        return (
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
                                <Gallery photos={photos} onClick={this.openLightbox} />
                                <Lightbox images={photos}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.state.currentImage}
                                  isOpen={this.state.lightboxIsOpen}
                                />                                
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
        )
    }
}
