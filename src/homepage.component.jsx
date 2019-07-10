import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <div className="title">VIGORN</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">NACATAMALES</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">GALLOPINTO</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">CACAO</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <div className="title">CHANCHO CON YUCA</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
