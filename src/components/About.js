import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        style={{
          // backgroundColor: "black",
          color: "black ",
          paddingBottom: "350px",
        }}
      >
        <h2
          className="mb-4"
          style={{ paddingLeft: "100px", paddingTop: "25px" }}
        >
          About us
        </h2>
        <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
          <h5>
            Welcome to our personal notes management project! This project is
            designed to provide you with a convenient platform to manage your
            personal notes in one place. With this project, you can create a
            secure account and login to access your personal notes anytime,
            anywhere. You can add, edit, and delete your notes as you wish.
            <br />
            Our user-friendly interface allows you to organize your notes
            according to your preference, making it easy for you to find what
            you're looking for. We understand the importance of keeping your
            personal information safe, which is why we have implemented robust
            security measures to ensure the confidentiality and privacy of your
            data.
            <br />
            Whether you're a student, a professional, or just someone who likes
            to jot down their thoughts, this project is perfect for you! So why
            wait? Sign up now and start managing your personal notes like a pro!{" "}
            <br />
            <br />
            <br />
          </h5>
          <div className="container aboutcontainer">
            <Link to="/">Create New Note</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
