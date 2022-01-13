import { useState, useEffect, useRef, useContext } from "react";
import { LangContext } from "../../contexts/languageContext";
import translations from "../../assets/translations/translation";
import "./InfiniteScroll.css";

export default function InfiniteScroll() {
  const { lang } = useContext(LangContext);
  const [dataImg, setDataImg] = useState([[], [], []]);
  const [pageIndex, setPageIndex] = useState(1);
  const [searchState, setSearchState] = useState("kitten");
  const [firstCall, setFirstCall] = useState(true);

  useEffect(() => {
    if (firstCall) return;
    const infiniteFetchData = () => {
      fetch(
        `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imgsReceived = [];

          data.results.forEach((img) => {
            imgsReceived.push(img.urls.regular);
          });

          const newFreshState = [[], [], []];

          let index = 0;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 10; j++) {
              newFreshState[i].push(imgsReceived[index]);
              index++;
            }
          }

          setDataImg(newFreshState);
        });
    };
    infiniteFetchData();
  }, [searchState]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const searchFetchData = () => {
      fetch(
        `https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=TccZKDXp9rzfJUM7avYkdoikF-6NFDgdYhvZF5HiunQ`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imgsReceived = [];

          data.results.forEach((img) => {
            imgsReceived.push(img.urls.regular);
          });

          const newFreshState = [
            [...dataImg[0]],
            [...dataImg[1]],
            [...dataImg[2]],
          ];

          let index = 0;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 10; j++) {
              newFreshState[i].push(imgsReceived[index]);
              index++;
            }
          }

          setDataImg(newFreshState);
          setFirstCall(false);
        });
    };
    searchFetchData();
  }, [pageIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchState(inpRef.current.value);
    setPageIndex(1);
  };

  const inpRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", infiniteCheck);

    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, []);

  const infiniteCheck = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      setPageIndex((pageIndex) => pageIndex + 1);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch} style={{ marginTop: "50px" }}>
        <label htmlFor="search">
          {translations[lang].infiniteScroll.search}
        </label>
        <input type="text" id="search" ref={inpRef} />
      </form>
      <div className="card-list">
        <div>
          {dataImg[0].map((element, key) => {
            return <img key={key} src={element} alt="unsplash" />;
          })}
        </div>
        <div>
          {dataImg[1].map((element, key) => {
            return <img key={key} src={element} alt="unsplash" />;
          })}
        </div>
        <div>
          {dataImg[2].map((element, key) => {
            return <img key={key} src={element} alt="unsplash" />;
          })}
        </div>
      </div>
    </div>
  );
}
