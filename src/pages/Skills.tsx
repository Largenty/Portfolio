import React from "react";
import { useParams } from "react-router-dom";
import Bar from "../components/Bar";
import Button from "../components/Button";

type BtnData = {
  text: string;
  link?: string;
};

const Skills = () => {
  const urlParams = useParams();
  console.log(urlParams);
  const lvlArrayName = [
    "hello World",
    "junior",
    "confirmed",
    "senior",
    "master",
  ];
  const lvlArrayNumber = ["10", "25", "50", "75", "100"];
  const currentWidth = document.body.clientWidth;

  const btnData = [
    { text: "front-end" },
    { text: "Back-end" },
    { text: "other" },
  ];

  const techDataFront = [
    { tech: "html", value: "64" },
    { tech: "css", value: "35" },
    { tech: "reactJs", value: "51" },
    { tech: "VueJs", value: "41" },
  ];

  const techDataBack = [
    { tech: "grezg", value: "64" },
    { tech: "grezg", value: "35" },
    { tech: "fds", value: "51" },
    { tech: "gfds", value: "41" },
  ];

  return (
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
            {btnData.map((element: BtnData, key: number) => (
              <div
                style={{
                  marginRight: "40px",
                }}
              >
                <Button key={key} {...element} />
              </div>
            ))}
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
          <section>
            {techDataFront
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
