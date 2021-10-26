import React from "react";
import "./containt.css";
function Containt(params) {
  return (
    <>
      <div className="containt">
        <div className="div_sec">
          <h3>ABOUT ME</h3>
          <div className="body_sec"></div>
          my name is <span className="span_">akshay</span>.i am a web devoloper
          and machine learning devoloper I alwaya sbeen pationated to learn new
          skills which adds value in my life .this is my personal portfolio
          website and thanks to going through this.
        </div>
        <div className="div_sec">
          <h3>Experience</h3>
          <div className="body_sec"></div>
          <div className="intern1">
            <span className="first">1.Internship elite techno groups:</span>
            <p>projects:</p>
            <ul className="projects">
              <li>
                Inventory management
                <a href="https://github.com/akshaysutar8860/ETGinventorymanage">
                  code
                </a>
              </li>
              <li>
                summer olympic data analysis
                <a href="https://github.com/akshaysutar8860/summer_olympic_data_analysis">
                  code
                </a>
              </li>
              <li>
                Brest cancer detection
                <a href="https://github.com/akshaysutar8860/Breast-cancer-detection">
                  code
                </a>
                <li>
                  <a href="https://github.com/akshaysutar8860/Breast-cancer-detection">
                    certificate of completion
                  </a>
                </li>
              </li>
            </ul>
          </div>
          <div className="intern2">
            <span className="first">2.Ineuron data analysis Internship:</span>
            <p>projects:</p>
            <ul className="projects">
              <li>
                Google app store analysis
                <a href="//">code</a>
                <li>
                  <a href="//"> Offer letter and Experience letter</a>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="div_sec">
          <h3>Qualification</h3>
          <div className="body_sec"></div>
          <p>
            SSC:
            <p>School name:malage vidyalai malage bk</p>
            <p>Marks:90%</p>
            HSC:
            <p>School name:Devchand college arjunnagar</p>
            <p>Marks:68.40%</p>
          </p>
        </div>
        <div className="div_sec">
          <h3>Skills</h3>
          <div className="body_sec"></div>
          <p>
            web devolopment,machine learning,deep learning,artificial
            intelligence,data science
          </p>
          <p>languages:</p>
          <p>C,C++,java,python,php,javascript</p>
          <p>Frameworks/libraries:</p>
          <p>React,sklearn,pandas,keras</p>
        </div>
        <div className="div_sec">
          <h3>CERTIFICATIONS AND EVENTS</h3>
          <div className="body_sec"></div>
          <p>
            1:kaggle certified:
            <a href="//"> certificates</a>
          </p>
          <p>
            2:linkdin project management
            <a href="https://github.com/akshaysutar8860/files/blob/main/Project%20Management%20Institute%20(PMI)%C2%AE.pdf">
              {" "}
              certificate
            </a>
          </p>
          <p>
            3:linkedin project management:
            <a href="https://github.com/akshaysutar8860/files/blob/main/LinkedIn%20Learning%20Certificate.pdf">
              {" "}
              certificate
            </a>
          </p>
          <p>
            4:java certification:
            <a href="https://github.com/akshaysutar8860/files/blob/main/UC-d7363024-7c80-4019-b095-6f97c2209db1.pdf">
              {" "}
              certificate
            </a>
          </p>
          <p>
            4:aws innavate data edition conference:
            <a href="https://github.com/akshaysutar8860/files/blob/main/068404e50f2f3cfb.png">
              {" "}
              certificate
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Containt;
