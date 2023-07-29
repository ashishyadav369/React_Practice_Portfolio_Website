import education_img from "../../assets/education.svg"
import Navbar from "./Navbar";
const Resume = () => {
    return(

      <div class="row-combo">
          <Navbar></Navbar>
        
          <div class="resume-box">
            <div>
              <div class="resume-title">
                <h1 class="for-pseudo">Resume</h1>
              </div>

              <div class="resume-education">
                <h2><img src={education_img} />Education</h2>
                <div class="education-timeline">
                  <article class="education-timeline-item">
                    <h4>Indra Gandhi University</h4>
                    <p class="education-timeline-dura">Aug 2019 - July 2023</p>
                    <p class="education-timeline-sub">
                      Bachelor's Of Technology Computer Science & Engineering
                      <br />
                      Rewari, Haryana
                    </p>
                  </article>
                  <article class="education-timeline-item">
                    <h4>Jain Public School</h4>
                    <p class="education-timeline-dura">2017 - 2018</p>
                    <p class="education-timeline-sub">
                      XII P.C.M <br />
                      Rewari, Haryana
                    </p>
                  </article>
                </div>
              </div>
            </div>
       </div>
      </div>
       
    );
}

export default Resume;