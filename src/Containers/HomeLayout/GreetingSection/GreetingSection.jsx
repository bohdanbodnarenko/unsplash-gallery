import React from "react";

import "./GreetingSection.css";

const GreetingSection = props => {
  let color = "";
  if (!props.post.color[2] <= 7) {
    color = "white";
  } else {
    color = "black";
  }
  return (
      <section
        style={{
          backgroundImage: `url(${props.post.urls.full})`,
          color: color
        }}
      >
          <div className="greet-wrapper">
            <h1>Unsplash Gallery Appp</h1>
            <p>
              Beautiful, free photos. Gifted by the world’s most generous
              community of photographers. 🎁
            </p>
            <form onSubmit={props.submit}>
              <input
                name="search"
                className="section-input"
                placeholder="Search free photos..."
              />
            </form>
          </div>
      </section>
  );
};

export default GreetingSection;
