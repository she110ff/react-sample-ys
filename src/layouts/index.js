import React, { Component } from 'react'

import { Slot } from 'react-page-layout';

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
            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                    <Header />
                    <HeaderMobile />
                    <Slot name="top" />
                    <PublicLayoutPageContentWrap>
                        <Slot name="main" />
                    </PublicLayoutPageContentWrap>
                    <Footer />
                    <CopyWrap />
                </div>
            </div>

        );
    }
}

const PublicLayoutPageContentWrap = ({children}) =>
    <div className="page_content_wrap page_paddings_no">
        <div className="content_wrap">
             {children}
        </div>
    </div>




export const layouts = {
    'home': HomeLayout,
    'public': PublicLayout,
};
