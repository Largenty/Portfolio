import React from "react";
import * as data from "../data/data";
import { BtnLink } from "../types/types";
import Bar from "../components/Bar";

const Skills = () => {
  const lvlArrayName = [
    "hello World",
    "junior",
    "confirmed",
    "senior",
    "master",
  ];
  const lvlArrayNumber: string[] = ["10", "25", "50", "75", "100"];
  const currentWidth = document.body.clientWidth;

  const [skills, setSkills] = React.useState("front-end");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentSkills, setCurrentSkills] = React.useState<any>(data.techFront);

  React.useEffect(() => {
    const update = () => {
      if (skills === "front-end") {
        setCurrentSkills(data.techFront);
      }
      if (skills === "Back-end") {
        setCurrentSkills(data.techBack);
      }
      if (skills === "other") {
        setCurrentSkills(data.techOther);
      }
      setIsLoading(true);
    };
    update();
  }, [skills]);

  // Handler Function
  const handleClick = (string: string) => {
    setSkills(string);
  };

  return !isLoading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <React.Fragment>
      <div className="flex column width-80 margin-auto height">
        <h2 className="skills-title">Skills</h2>
        <div>
          <section className="flex wrap">
            {data.btnSkills.map((element: BtnLink, key: number) => (
              <div className="margin-right " key={key}>
                <button
                  className="btn mt-2"
                  onClick={() => handleClick(element.text)}
                >
                  {element.text}
                </button>
              </div>
            ))}{" "}
          </section>

          <section className="flex wrap justify-space-between margin-top-40   text-transform-capitalize;">
            {(currentWidth < 560 ? lvlArrayNumber : lvlArrayName).map(
              (element: string, key: number) => (
                <p key={key}>{element}</p>
              )
            )}
          </section>

          <section style={{ transition: "all 0.5s" }}>
            {currentSkills
              .sort((a: any, b: any) => b.value - a.value)
              .map((element: any, key: number) => (
                <Bar key={key} {...element} />
              ))}
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
