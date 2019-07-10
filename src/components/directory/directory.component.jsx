import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "nacatamal",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONSci07gXZa-8M9EOuVgq4vsq0anIFqBulk9lbsRuOGZ9CnWLCw",
          id: 1
        },
        {
          title: "cacao drink",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hpJ7L87tfSpwnny06kCxCaGI2drbom2F4qVqBlKv9juuRZzuDg",
          id: 2
        },
        {
          title: "gallopinto",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYjRUZsNv0BgcvovylmwjTVmdAfIuYd4xeJgpD41NGX9gmRL7",
          id: 3
        },
        {
          title: "vigoron",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRwS1JRsJpisbhs9vJ_b7ud7QHfRpvN0pBZDQhE3VRx9qutzQdg",
          size: "large",
          id: 4
        },
        {
          title: "baho",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPcgEZrV8oDUGBm4ZLLOTOXbWE74P34ykBcFk6SbkDctUt6R_",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
