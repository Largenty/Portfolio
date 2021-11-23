import React from "react";
import Button from "../components/Button";

const Profile = () => {
  const cvLink = { text: "CV", link: "/cv" };
  const linkedInLink = { text: "LinkedIn", link: "/linkedIn" };
  const gamesLink = { text: "Games", link: "/games" };
  return (
    <React.Fragment>
      <div
        className="flex justify-center align-center column"
        style={{ height: "100vh", margin: "auto" }}
      >
        <div className="maxWidth" style={{ maxWidth: "70%", margin: "auto" }}>
          <div>
            <h3>Hi, i'm</h3>
            <h1
              style={{
                fontSize: "48px",
                textAlign: "inherit",
                display: "inline",
              }}
              className="backgroundText"
            >
              Ludovic Argenty
            </h1>
            <h3>a french developer since 2019.</h3>
          </div>
          <p
            style={{
              marginTop: "20px",
              fontSize: "12px",
              textAlign: "justify",
            }}
          >
            I really don’t know how to introduce myself correctly but you can
            check my cv, my skills / work, my linkedIn or just play at some
            games.
          </p>

          <div className="flex justify-center mediaButton" style={{ margin: "20px" }}>
            <div style={{ margin: "0 20px" }}>
              <Button {...linkedInLink} />
            </div>
            <div style={{ margin: "0 20px" }}>
              <Button {...cvLink} />
            </div>
            <div style={{ margin: "0 20px" }}>
              <Button {...gamesLink} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
