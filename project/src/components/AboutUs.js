import React, { useState } from "react";
import img from "../resources/img/dev.jpg";
// import resumePdf from "../resources/others/resume.pdf"

// import React from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  const handleDownload = () => {
    // Logic to trigger the download action
    const link = document.createElement("a");
    // link.href = {resumePdf}; // Replace with the actual path to your resume file
    link.download = "Yogesh_Parab_Resume.pdf";
    link.click();
  };
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="section-block">
        <div
          className="section-title"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          <h1>{title}</h1>
        </div>
        {isVisible ? (
          <>
            <h4>{description}</h4>

            {title === "Tummy Eat team" ? (
              <div className="about-info">
                <div className="info-brief">
                  <h3>Hello All,</h3>
                  <h4>
                    I am <span onClick={handleDownload}>Yogesh Parab</span>, a
                    front end developer with 2.5+ years of experience in web
                    development ,where I have been part of AEM(CMS) and now in
                    mission to excel MERN stack.
                  </h4>
                  <p>
                    P.S. :- Please adjust with the pic on the right. It's been a
                    while since I have been away from programming and had a nice
                    picture of myself.{" "}
                  </p>
                </div>
                <div className="info-image">
                  <img src={img} alt="" />
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const About = () => {
  const [sectionConfig, setSectionConfig] = useState("team");
  return (
    <>
      <div className="about-container ">
        <div className=" about-section section">
          <Section
            title={"About Tummy Eats"}
            description={
              "This is a React based project which covers most of the major fundamental concepts used, that are present in these days application.It covers major hooks like useState, useEffect, useParam and many more.It has route configurations as well as redux toolKit involvement for better integration. \n It covers major javascript concept from events like click,scroll to async await for fetching promise,as well as array and object destructring."
            }
            isVisible={sectionConfig === "about"}
            setIsVisible={() => {
              {
                sectionConfig !== "about"
                  ? setSectionConfig("about")
                  : setSectionConfig(null);
              }
            }}
          />
          <Section
            title={"Tummy Eat team"}
            description={""}
            isVisible={sectionConfig === "team"}
            setIsVisible={() => {
              sectionConfig !== "team"
                ? setSectionConfig("team")
                : setSectionConfig(null);
            }}
            // setSectionConfig("team")}
          />
          <Section
            title={"Career section"}
            description={"Careen in making!!"}
            isVisible={sectionConfig === "career"}
            setIsVisible={() => {
              sectionConfig !== "career"
                ? setSectionConfig("career")
                : setSectionConfig(null);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
