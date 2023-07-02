import React from "react";
import "./features.css";
import { BsArrowRight } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
const Features = () => {
  return (
    <section className="features">
      <div className="container flex feature-container-odd">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature1.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Easy-to-use Recruitment<br></br> Software
          </h1>
          <p className="feature-desc">
            No steep learning curves or bloated interfaces. TalentX platform is
            simple yet powerful; accessible and relevant to all recruiters.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Customizable pipeline:</strong> Customize your recruitment
              pipeline based on your process with a slick drag-and-drop
              interface.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Kanban board:</strong> Get an overview of your recruitment
              progresses in one single-board view.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature-2 */}
      <div className="container flex feature-container-even">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature2.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Post your jobs on 2,500+<br></br> Free & Premium<br></br> Channels
          </h1>
          <p className="feature-desc">
            Share your job openings on 2,500+ free and premium<br></br>{" "}
            channels, including local, global, and specialized job<br></br>{" "}
            platforms such as Indeed, LinkedIn, Monster, CareerJet,<br></br>{" "}
            JobStreet, and many more.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>2,500+ job boards:</strong> Global, local and specialized
              free and premium platforms integrated natively.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>
                Manage all your sponsored job advertising campaigns
              </strong>{" "}
              from a single platform.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature 3 */}
      <div className="container flex feature-container-odd">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature3.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            AI Powered<br></br> Recommendations
          </h1>
          <p className="feature-desc">
            TalentX AI Engine simplifies the whole hiring process by<br></br>{" "}
            suggesting the best candidates for a given job while<br></br>{" "}
            automating redundant tasks.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Matching recommendations:</strong> Score candidates'
              profiles based on job requirements to facilitate your screening
              process.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Candidates' profiles enrichment:</strong>
              Enrich candidates' profiles with LinkedIn and other social media
              data for better matching recommendations
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature4 */}
      <div className="container flex feature-container-even">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature4.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Candidates' Profiles<br></br> Enrichment
          </h1>
          <p className="feature-desc">
            Collect insights beyond resume. TalentX AI Engine<br></br> browses
            the web in search of data on 20+ social media<br></br> and public
            platforms to automatically enrich candidates'<br></br> profiles.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Data enrichment done seamlessly</strong> during the
              candidate creation.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>20+ social and public platforms </strong>
              including LinkedIn, Facebook, Twitter, GitHub, Medium and many
              more.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature5 */}
      <div className="container flex feature-container-odd">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature5.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Progressive Mobile<br></br> Application
          </h1>
          <p className="feature-desc">
            Access TalentX from your computer, phone, or tablet to<br></br>
            ensure you never miss any activity, wherever you are.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Recruit on the go:</strong> Access all TalentX features
              from all your devices.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Receive notifications: </strong>
              Get notified for reminders, and specific events.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature 6 */}
      <div className="container flex feature-container-even">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature6.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Customize or Link your<br></br> Branded Career Page
          </h1>
          <p className="feature-desc">
            Portray your company's brand in your favorite language<br></br> and
            proudly communicate who you are to visiting top<br></br> talent.
            Showcase your company culture and display your<br></br> values by
            creating or linking your Career Page for an<br></br> efficient
            recruitment process.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>No development required:</strong> Our Career Page can be
              set up and customized with no technical resources.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>
                Fast setup and compatibility with all web platforms:{" "}
              </strong>
              WordPress, Wix, Squarespace, and others.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/* feature 7 */}
      <div className="container flex feature-container-odd">
        <div className="feature-img-wrapper">
          <img
            src="../public/images/Features/feature7.png"
            className="feature-img"
          ></img>
        </div>
        <div className="feature-container-desc flex">
          <h1 className="feature-text-1">
            Candidate Onboarding &<br></br>Placement Management
          </h1>
          <p className="feature-desc">
            Track and manage every new hire or placement<br></br> throughout
            every step of their employment experience<br></br>, from offer
            letter to onboarding and beyond. Leverage<br></br> the full
            potential of Manatal's recruiting software and customize the
            onboarding milestones to reflect your own<br></br> process.
          </p>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Keep track of onboarding events</strong> such as starting
              dates, probation periods, or end of employment.
            </p>
          </div>
          <div className="checked-items flex">
            <BsCheckCircle className="tick-icon" />
            <p>
              <strong>Customize onboarding milestones </strong>
              for a given job.
            </p>
          </div>
          <div className="flex feature-link">
            <a href="#">
              Try it For Free <hr></hr>
            </a>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
