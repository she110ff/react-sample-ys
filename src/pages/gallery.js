import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import Lightbox from 'react-images'

import { layouts } from '../layouts'

import AutoResponsive  from 'autoresponsive-react'


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
                    <Gallery />
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




const Gallery = () =>
        <div class="content">
            <article class="post_item post_item_single page">
                <section class="post_content tpl_gallery_section">
                    <article class="myportfolio-container gallery" >
                        <div  class="esg-grid">
                            <article class="esg-filters esg-singlefilters grid-filters margin_bottom_20">
                                <div class="esg-filter-wrapper esg-fgc-3 margin_left_3 margin_right_3">
                                    <div class="esg-filterbutton selected esg-allfilter" >
                                        <span>All</span>
                                    </div>
                                    <div class="esg-filterbutton" data-fid="123" data-filter="filter-conferences">
                                        <span>conferences</span>
                                        <span class="esg-filter-checked">
                                            <i class="eg-icon-ok-1"></i>
                                        </span>
                                    </div>
                                    <div class="esg-filterbutton" data-fid="121" data-filter="filter-events">
                                        <span>events</span>
                                        <span class="esg-filter-checked">
                                            <i class="eg-icon-ok-1"></i>
                                        </span>
                                    </div>
                                    <div class="esg-filterbutton" data-fid="124" data-filter="filter-sermons">
                                        <span>sermons</span>
                                        <span class="esg-filter-checked">
                                            <i class="eg-icon-ok-1"></i>
                                        </span>
                                    </div>
                                    <div class="esg-filterbutton" data-fid="122" data-filter="filter-worship">
                                        <span>worship</span>
                                        <span class="esg-filter-checked">
                                            <i class="eg-icon-ok-1"></i>
                                        </span>
                                    </div>
                                    <div class="eg-clearfix"></div>
                                </div>
                            </article>
                            <div class="esg-clear-no-height"></div>

                            <WaterfallSampleComponent />
                    </div>
                </article>
            </section>
        </article>
    </div>

let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let styleList = {};
let getItemStyle = function() {
  return {
    width: 150,
    height: parseInt(Math.random() * 20 + 12, 10) * 10,
    color: '#3a2d5b',
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset',
    backgroundColor: '#5c439b',
    borderColor: '#796b1d',
    fontSize: '80px',
    lineHeight: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '1px 1px 0px #816abe',
    userSelect: 'none'
  };
};

const events = ['clickItemHandle'];

arrayList.map(function(i) {
  styleList[i] = getItemStyle();
});


class WaterfallSampleComponent extends Component {
  constructor(props) {
    super(props);
    this.bindEventMapContext();
    this.state = {
      styleList: styleList
    };
  }

  bindEventMapContext() {
    events.forEach(i => {
      this[i] = this[i].bind(this);
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
      });
    }, false);
  }

  clickItemHandle(e) {
    let nodes = e.target.parentNode.childNodes;

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] === e.target) {
        styleList[i].width = styleList[i].width === '310px' ? '150px' : '310px';
        this.setState({
          styleList: styleList
        });
      }
    }
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || this.props.containerWidth,
      itemClassName: 'item',
      transitionDuration: '.8',
      transitionTimingFunction: 'easeIn'
    };
  }

  render() {
    return (
      <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
        {
          arrayList.map(i => {
            const ih = 200 + Math.floor(Math.random()*10)*15
            const no = 10 + Math.floor(Math.random()*10)*23
            const src = "https://unsplash.it/250/"+ih+"?image="+i
            this.state.styleList[i].height = ih
            return <div key={i} onClick={this.clickItemHandle} className="item" style={this.state.styleList[i]}>
                <img src={src} />
            </div>;
          })
        }
      </AutoResponsive>
    );
  }
}
