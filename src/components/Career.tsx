import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Infosys Springboard · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and implemented a Python-based convolutional network using
              EfficientNet-B0 to classify ~5,000 chest X-ray images, achieving
              92% validation accuracy. Managed version control with Git and
              GitHub for all code artifacts, ensuring reproducible experiments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Virtual Intern</h4>
                <h5>IBM-PBEL</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Executed end-to-end Python notebooks for NLP sentiment analysis on
              10,000 text samples, constructing scikit-learn pipelines that
              reached an 85% F1 score. Presented model findings to a virtual
              mentor panel and tracked collaborative work using Git/GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Dev Intern</h4>
                <h5>Shadowfox · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive and user-friendly web applications using
              HTML, CSS, JavaScript, and React. Collaborated with the team to
              design and improve UI/UX features, and conducted code reviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Dev Intern</h4>
                <h5>Vault of Codes · Remote</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a website for clients and internal use. Gained exposure
              to project-based development and client requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
