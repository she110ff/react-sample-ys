import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import { LayoutProvider, Page, Section } from '../libs/layout'

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import  { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel"
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import { layouts } from '../layouts'


export const Contacts = () =>
    <LayoutProvider layouts={layouts}>
        <ContactPage />
    </LayoutProvider>


class ContactPage extends Component {
    render() {
        return (
            <Page layout="home">
                <Section slot="main">
                    <MapWithAMarker
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCX3DlnEZmkiPSj686cJj-vc5lX9lq6BQ&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />       
                    <ContactForm />
                </Section>
            </Page>
        )
    }
}        

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 37.636586, lng: 126.631072 }}
  >
    <Marker
      position={{ lat: 37.636586, lng: 126.631072 }}
    />
  </GoogleMap>
));

class ContactForm extends Component{
    render() {
        return (
            <div className="content_wrap padding_top_5_2857em padding_bottom_6_1429em">
                <div id="sc_form_1_wrap" className="sc_form_wrap ">
                    <div id="sc_form_1" className="sc_form sc_form_style_form_2 aligncenter">
                        <h6 className="sc_form_subtitle sc_item_subtitle">Contact Form</h6>
                        <h2 className="sc_form_title sc_item_title">Get in Touch With Us</h2>
                        <div className="sc_form_descr sc_item_descr">We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</div>
                        <div className="sc_columns columns_wrap">
                            <div className="sc_form_address column-1_3">
                                <div className="sc_form_address_field sc_form_address_field_icon_address">
                                    <span className="sc_form_address_label">Address:</span>
                                    <span className="sc_form_address_data">123, New Lenox, Chicago, IL 60606</span>
                                </div>
                                <div className="sc_form_address_field sc_form_address_field_icon_phone">
                                    <span className="sc_form_address_label">Phone number:</span>
                                    <span className="sc_form_address_data">123-456-7890</span>
                                </div>
                                <div className="sc_form_address_field sc_form_address_field_icon_email">
                                    <span className="sc_form_address_label">Have any questions?</span>
                                    <span className="sc_form_address_data">support@axiomthemes.com</span>
                                </div>
                                <div className="sc_form_address_field sc_form_address_field_hours">
                                    <span className="sc_form_address_label">We are open:</span>
                                    <span className="sc_form_address_data">Monday - Friday 10AM - 8PM</span>
                                </div>
                            </div><div className="sc_form_fields column-2_3">
                                <form id="sc_form_1_form" data-formtype="form_2" method="post" action="include/sendmail.php">
                                    <div className="sc_form_info">
                                        <div className="sc_form_item sc_form_field label_over">
                                            <label className="required" for="sc_form_username">Name</label>
                                            <input id="sc_form_username" type="text" name="username" placeholder="Name"/>
                                        </div>
                                        <div className="sc_form_item sc_form_field label_over">
                                            <label className="required" for="sc_form_email">E-mail</label>
                                            <input id="sc_form_email" type="text" name="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="sc_form_item sc_form_message label_over">
                                        <label className="required" for="sc_form_message">Message</label>
                                        <textarea id="sc_form_message" name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="sc_form_item sc_form_button">
                                        <button className="sc_button sc_button_square sc_button_style_filled sc_button_color_style_2 sc_button_size_large">Send Message</button>
                                    </div>
                                    <div className="result sc_infobox"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
