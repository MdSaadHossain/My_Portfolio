import React from "react";
import "./Achievement.css";
import "../organizations/Organizations.css"
import { Fade } from "react-reveal";

import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection, awardstSection } from "../../portfolio";

export default function Achievement({theme}) {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }


  console.log(achievementSection.achivementsCards);
  return (
    <><div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="organizations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Professional Development
            </h1>
          </Fade>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map((card) => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  // footer: card.footerLink,
                }} />
            );
          })}
        </div>
      </div>
    </div><div className="" style={{ 
       width: '90%',
      padding: '20px 10px',
      margin: '0px auto'}} 
  id="achievements">
        <div className="achievement-main-div">
          <div className="organizations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="organizations-header" style={{ color: theme.text }}>
                Award & Achievements
              </h1>
            </Fade>
          </div>
          <div className="achievement-cards-div">
            {awardstSection.achivementsCards.map((card) => {
              return (
                <AchivementCard
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    // footer: card.footerLink,
                  }} />
              );
            })}
          </div>
        </div>
      </div></>
  );
}
