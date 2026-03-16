import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education 
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering – Computer Science</h4>
                <h5>Sri Jayachamarajendra College of Engineering</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <h3>
              CGPA: 9.06
            </h3>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>11th & 12th</h4>
                <h5>Sadvidya Semi-Residential PU College</h5>
              </div>
              <h3>2022</h3>
            </div>
            <h3>
              Percentage: 85.5%
            </h3>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th</h4>
                <h5>Mysore West Lions Sevanikaten School</h5>
              </div>
              <h3>2020</h3>
            </div>
             <h3>
              Percentage: 85.5%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
