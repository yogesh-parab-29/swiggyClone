import React, { useState } from "react";

// import React from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="section">
        <h1>{title}</h1>
        {isVisible ? (
          <>
            <button
              onClick={() => {
                setIsVisible(true);
              }}
            >
              Hide
            </button>
            <h5>{description}</h5>
          </>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>
    </>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("team");
  return (
    <>
      <Section
        title={"About instamart"}
        description={
          "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
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
        title={"Instamart team"}
        description={
          "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        }
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
        description={
          "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
        }
        isVisible={sectionConfig === "career"}
        setIsVisible={() => {
          sectionConfig !== "career"
            ? setSectionConfig("career")
            : setSectionConfig(null);
        }}
      />
    </>
  );
};

export default Instamart;
