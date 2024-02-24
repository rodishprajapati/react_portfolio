import "./contact.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contactBody">
        <div className="leftSide">
          <div className="contactText">
            <p1 className="contactText_p1">
              Want to<br></br>
            </p1>
            <p2 className="contactText_p2">
              Start<br></br>
            </p2>
            <p3 className="contactText_p3">
              a new <br></br>
            </p3>
            <p4 className="contactText_p4">
              project?<br></br>{" "}
            </p4>
            <p5 className="contactText_p5">Or Just Say Hello</p5>
          </div>
        </div>

        <div className="rightSide">
          <div className="contact_container">
            <div className="title">Contact Me</div>
            <div className="socialmedia">
              <ol>
                <div className="facebook">
                  <FaFacebook className="icons" />
                  <a href="#" className="link">
                    facebook
                  </a>
                </div>
                <div className="instagram">
                  <FaInstagram className="icons" />
                  <a href="#" className="link">
                    instagram
                  </a>
                </div>
                <div className="linkedin">
                  <FaLinkedin className="icons" />
                  <a href="#" className="link">
                    linkedIn
                  </a>
                </div>
                <div className="github">
                  <FaGithub className="icons" />
                  <a href="#" className="link">
                    git
                  </a>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
