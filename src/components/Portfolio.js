import Navbar from "./Navbar";
import { useState } from "react";
import {statDataBadge, statDataProject, statDataCertificates, statDataAll} from "./data";
import Card from "./Card";

function FilterCards(text) {

    if(text === "Select Category") {
        return statDataAll;
    } else if(text === "Projects") {
        return statDataProject;
    } else if(text === "Certification") {
        return statDataCertificates;
    } else if(text === "All") {
        return statDataAll;
    } else {
        return statDataBadge;
    }

}
const Portfolio = () => {
  const [classSel, setClassSel] = useState("dropdown-hidden");
  const [text, setText] = useState("Select Category");
  const [textFilter, setTextFilter] = useState("All");
let data = "All";

  const [allCards, setAllCards] = useState("all-cards__visible");

  return (
    <div class="row-combo">
      <Navbar></Navbar>
      <div className="portfolio-box">
        
          <div className="portfolio-details">
            <h1 className="for-pseudo">Portfolio</h1>
            <div className="dropdown-select">
              <div
                className="dropdown-search"
                onClick={() => {
                  if (classSel === "dropdown-visible") {
                    setClassSel("dropdown-hidden");
                  } else {
                    setClassSel("dropdown-visible");
                  }
                }}
              ><span>{text}</span></div>
              <ul className={classSel}>
                <li onClick={() => {
                    setText("All");
                    setClassSel("dropdown-hidden");
                    setTextFilter("All");
                }}>All</li>
                <li onClick={() => {
                    setText("Certification");
                    setClassSel("dropdown-hidden");
                    setTextFilter("Certification")
                }}> Certification</li>
                <li onClick={() => {
                    setText("Projects");
                    setClassSel("dropdown-hidden");
                    setTextFilter("Projects")
                }}>Projects</li>
                <li onClick={() => {
                    setText("Badge");
                    setClassSel("dropdown-hidden");
                    setTextFilter("Badge")
                }}>Badge</li>
              </ul>
            </div>
            <div>
            </div>
          </div>
          <div className="card-collection">
           {/* {data = FilterCards(text)} */}
           {FilterCards(textFilter).map((val, index) => {
                return <Card {...val} key={index}></Card>
           })}
          </div>
        </div>

    </div>
  );
};

export default Portfolio;
