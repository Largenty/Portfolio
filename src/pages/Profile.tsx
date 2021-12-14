import React from "react";
import * as data from "../data/data";
import { BtnLink } from "../types/types";
import Button from "../components/Button";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center align-center column height margin-auto">
        <div className="maxWidth  margin-auto width-70">
          <div>
            <h3>Hi, i'm</h3>
            <h1 className="backgroundText profile-title">Ludovic Argenty</h1>
            <h3>a french developer since 2019.</h3>
          </div>
          <p className="profile-p">
            I really don’t know how to introduce myself correctly but you can
            check my cv, my skills / work, my linkedIn or just play at some
            games.
          </p>

          <div className="flex justify-center mediaButton margin-20">
            {data.btnProfile.map((element: BtnLink, key: number) => (
              <div key={key} className="margin-side-20 ">
                <Button {...element} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
