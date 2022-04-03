import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 text-start my-3 my-lg-5">
        <div className="col">
          <h4>
            What is Context API <span style={{ color: "red" }}>?</span>
          </h4>
          <p>
            The React Context API, introduced with React v.16.3, allows us to
            pass data through our component trees, giving our components the
            ability to communicate and share data at different levels. On the
            other-hand The React Context API is a way for a React app to
            effectively produce global variables that can be passed around. This
            is the alternative to "prop drilling" or moving props from
            grandparent to child to parent, and so on. Context is also touted as
            an easier, lighter approach to state management using Redux.
          </p>
        </div>
        <div className="col">
          <h4>
            What are Semantic Elements <span style={{ color: "red" }}>?</span>
          </h4>
          <p>
            HTML was originally created as a markup language to describe
            documents on the early internet. As the internet grew and was
            adopted by more people, its needs changed. Where the internet was
            originally intended for sharing scientific documents, now people
            wanted to share other things as well. Very quickly, people started
            wanting to make the web look nicer.
          </p>
        </div>
        <div className="col">
          <h4>
            What is the difference between inline and inline-block elements{" "}
            <span style={{ color: "red" }}>?</span>
          </h4>
          <p>
            Compared to display: inline , the major difference is that display:
            inline-block allows to set a width and height on the element. Also,
            with display: inline-block , the top and bottom margins/paddings are
            respected, but with display: inline they are not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
