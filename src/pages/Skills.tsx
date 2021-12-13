import React from "react";
import Bar from "../components/Bar";

type BtnData = {
  text: string;
  link?: string;
};

const Skills = () => {
  const techDataFront = [
    { tech: "html", value: "64" },
    { tech: "css", value: "35" },
    { tech: "reactJs", value: "51" },
    { tech: "VueJs", value: "41" },
  ];
  const [skills, setSkills] = React.useState("front-end");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [currentSkills, setCurrentSkills] = React.useState<any>(techDataFront);

  const techDataBack = [
    { tech: "grezg", value: "10" },
    { tech: "grezg", value: "35" },
    { tech: "fds", value: "51" },
    { tech: "gfds", value: "41" },
  ];
  const techDataOther = [
    { tech: "bvcbvbvbcbb", value: "10" },
    { tech: "bbvcbvc", value: "35" },
    { tech: "bvcbvc", value: "4" },
    { tech: "vbcbbvcxbv", value: "41" },
  ];

  React.useEffect(() => {
    const update = () => {
      if (skills === "front-end") {
        setCurrentSkills(techDataFront);
      }
      if (skills === "Back-end") {
        setCurrentSkills(techDataBack);
      }
      if (skills === "other") {
        setCurrentSkills(techDataOther);
      }
      setIsLoading(true);
    };
    update();
  }, [skills]);

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

  const handleClick = (string: string) => {
    setSkills(string);
  };

  return !isLoading ? (
    <div></div>
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
            {btnData.map((element: BtnData, key: number) => (
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
