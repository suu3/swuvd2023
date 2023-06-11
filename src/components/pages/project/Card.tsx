import React from "react";
import {
  card,
  image,
  hoverImage,
  text,
  rectangle,
  circle,
} from "./card.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { Link } from "gatsby";

type CardType = {
  item: {
    id: number;
    title: string;
    authors: string[];
    src: string;
  };
};
const Card = ({ item: { title, authors, src, id } }: CardType) => {
  console.log(src);
  return (
    <Link to={`/project/${id}`}>
      <div className={card}>
        <div className={image}>
          <StaticImage
            layout="fullWidth"
            alt={title}
            src={"./_images/dummy.png"}
            aspectRatio={1067 / 716}
          />
        </div>
        <div className={classNames(hoverImage)}>
          <div className={circle} />
          <div className={rectangle} />
          <div className={text}>
            <p>{title}</p>
            <p>
              {authors.map((name, idx) => (
                <span key={idx}>{name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
