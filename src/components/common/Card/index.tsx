import React from "react";
import {
  card,
  image,
  hoverImage,
  text,
  rectangle,
  circle,
} from "./card.module.scss";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from "gatsby-plugin-image";
import classNames from "classnames";
import { Link } from "gatsby";

type CardType = {
  item: {
    uid: number;
    title: string;
    authors: {
      name: string;
      email: string;
    }[];
    project_image: IGatsbyImageData;
  };
};
const Card = ({ item: { uid, title, authors, project_image } }: CardType) => {
  return (
    <Link to={`/project/${uid}`}>
      <div className={card}>
        <div className={image}>
          {/* <StaticImage
            layout="fullWidth"
            alt={title}
            src={"images/dummy.png"}
            aspectRatio={1067 / 716}
          /> */}
          <GatsbyImage image={getImage(project_image)} alt={title} />
        </div>
        <div className={classNames(hoverImage)}>
          <div className={circle} />
          <div className={rectangle} />
          <div className={text}>
            <p>{title}</p>
            <p>
              {authors.map(({ name }, idx) => (
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
