import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Branch from "../../Components/Branch/Branch";
import Comment from "../../Components/Comment/Comment";
const About = () => {
  return (
    <div className="About">
      <Navbar />
      <Branch />
      <Comment />
    </div>
  );
};

export default About;
