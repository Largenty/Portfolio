import React from "react";
import * as data from "../data/data";
import { WorkingData } from "../types/types";
import WorkingCard from "../components/WorkingCard";

const Work = () => {
  return (
    <React.Fragment>
      <div className="flex column height margin-auto full-width ">
        <h2 className="backgroundText work-title">WORKSPACE</h2>
        <div className="flex justify-space-around wrap margin-side-20">
          {data.lastJobData.map((element: WorkingData, key: number) => (
            <WorkingCard key={key} {...element} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
