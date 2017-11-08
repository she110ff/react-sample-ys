import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider } from 'react-page-layout'
import { Page, Section } from 'react-page-layout'

import { layouts } from '../layouts'

export const PageTemplate = ({children}) =>
    <div className="body_wrap">
        <div className="page_wrap">
            <div className="top_panel_fixed_wrap"></div>
            
                {children}
           
        </div>
    </div>



export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>


