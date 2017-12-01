import React, { Component } from 'react'

import { LayoutProvider, Page, Section, Slot } from '../libs/layout'

import { Header, HeaderMobile, AboutMenu } from '../pages/menus'
import { Footer, CopyWrap } from '../pages/footer'

class HomeLayout extends Component {
    render() {
        return (
            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                    <Header />
                    <HeaderMobile />
                    <Slot name="top" />
                    <HomeLayoutPageContentWrap>
                        <Slot name="main" />
                    </HomeLayoutPageContentWrap>
                    <Footer />
                    <CopyWrap />
                </div>
            </div>

        );
    }
}

const HomeLayoutPageContentWrap = ({children}) =>
    <div className="page_content_wrap page_paddings_no">
        <div className="content">
            <article className="post_item post_item_single page">
                <section className="post_content">
                    {children}
                </section>
            </article>
        </div>
    </div>

class PublicLayout extends Component {
    render() {
        return (
            <div className="body_wrap  sidebar_show sidebar_right">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                    <Header />
                    <HeaderMobile />
                    <Slot name="top"  className="top_panel_title top_panel_style_3 title_present breadcrumbs_present scheme_original" />
                    <PublicLayoutPageContentWrap/>
                    <Footer />
                    <CopyWrap />
                </div>
            </div>

        );
    }
}

const PublicLayoutPageContentWrap = ({children}) =>
    <div className="page_content_wrap page_paddings_no ">
        <Slot name="main" className="content_wrap" >
             {children}
        </Slot>
    </div>

class CTypeLayout extends Component {
    render() {
        return (
            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                    <Header />
                    <HeaderMobile />
                    <Slot name="top" />
                    <CTypeLayoutPageContentWrap>
                        <Slot name="main" />
                    </CTypeLayoutPageContentWrap>
                    <Footer />
                    <CopyWrap />
                </div>
            </div>

        );
    }
}
const CTypeLayoutPageContentWrap = ({children}) =>
    <div className="page_content_wrap page_paddings_yes">
        <div className="content_wrap">
             {children}
        </div>
    </div>





export const layouts = {
    'home': HomeLayout,
    'public': PublicLayout,
    'ctype': CTypeLayout,
};
