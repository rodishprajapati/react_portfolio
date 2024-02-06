import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="contactText">
          <p1 className="p1">
            Want to<br></br>
          </p1>
          <p2 className="p2">
            Start<br></br>
          </p2>
          <p3 className="p3">
            a new <br></br>
          </p3>
          <p4 className="p4">
            project?<br></br>{" "}
          </p4>
          <p5 className="p5">Or Just Say Hello</p5>
        </div>

        <div className="contact_container">
          <div className="email">
            <a href="mail:rodishprajapati24@gmail.com">
              <u>rodishprajapati24@gmail.com</u>
            </a>
            <div className="socialmedia">
              <ol>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
