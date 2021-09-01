import React from "react";
import { Fragment } from "react";
import "./About.css"
import { AboutContent } from '../AboutContent/AboutContent';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export const About = (props) => {
    var hideButtons = true;
    return(
        <Fragment>
        <Header hideButtons={hideButtons} />
        <AboutContent />
        <Footer />
        </Fragment>
    )
}