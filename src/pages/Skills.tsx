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
    <div><p>Loading...</p></div>
  ) : (
    <React.Fragment>
      <div
        className="flex column"
        style={{ height: "100vh", margin: "auto", width: "80%" }}
      >
        <h2
          style={{
            margin: "75px 20px 0 0px",
            textTransform: "uppercase",
            fontSize: "48px",
          }}
        >
          Skills
        </h2>
        <div>
          <section
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {data.btnSkills.map((element: BtnLink, key: number) => (
              <div
                style={{
                  marginRight: "40px",
                }}
                key={key}
              >
                <button
                  className="btn mt-2"
                  onClick={() => handleClick(element.text)}
                >
                  {element.text}
                </button>
              </div>
            ))}{" "}
          </section>

          <section
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "40px",
              textTransform: "capitalize",
            }}
          >
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
