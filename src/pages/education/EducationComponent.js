import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
             
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Professional & Educational Qualifications
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                I completed my Bachelor of Science (B.Sc.) in Genetic Engineering and Biotechnology at East West University. Currently, I am pursuing my M.Sc. in Chemical Innovation and Regulation at the University of Bologna which is an Erasmus Mundus Joint Master's Degree fully funded by the European Union. This prestigious program, offered in collaboration with the University of Algarve and the University of Barcelona, equips professionals with the skills to manage chemical safety, chemical innovation, and regulation comprehensively.

                </p>
              
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
