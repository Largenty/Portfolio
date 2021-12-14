import React from "react";
import * as data from "../data/data";
import { WorkingData } from "../types/types";
import WorkingCard from "../components/WorkingCard";

const Work = () => {
  return (
    <React.Fragment>
      <div
        className="flex column"
        style={{ height: "100vh", margin: "auto", width: "100%" }}
      >
        <h2
          style={{ margin: "75px 20px", textAlign: "center", fontSize: "48px" }}
          className="backgroundText"
        >
          WORKSPACE
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            margin: "0px 20px",
          }}
        >
          {data.lastJobData.map((element: WorkingData, key: number) => (
            <WorkingCard key={key} {...element} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
