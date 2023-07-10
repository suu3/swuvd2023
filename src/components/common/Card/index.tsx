import React, { useCallback, useState } from "react";
import {
  card,
  image,
  imageInfo,
  clickImage,
  text,
  rectangle,
  circle,
} from "./card.module.scss";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { navigate } from "gatsby";
import useIsMobile from "@/hooks/useIsMobile";

type CardType = {
  clickCard: null | number;
  setClickCard: any;
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

const Card = ({
  clickCard,
  setClickCard,
  item: { uid, title, authors, project_image },
}: CardType) => {
  const isMobile = useIsMobile();

  const goToDetail = useCallback(() => {
    navigate(`/project/${uid}`);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setClickCard(uid);
      if (clickCard === uid) {
        goToDetail();
      }
    } else {
      goToDetail();
    }
  };

  const hoverImageCls = {
    [imageInfo]: true,
    // [hoverImage]: !isMobile,
    [clickImage]: isMobile && clickCard === uid,
  };

  return (
    // <Link to={`/project/${uid}`}>
    <div className={card} onClick={handleClick}>
      <div className={image}>
        <GatsbyImage
          layout="fixed"
          objectFit="cover"
          sizes="100%"
          image={getImage(project_image)}
          alt={title}
        />
      </div>
      <div className={classNames(hoverImageCls)}>
        <div className={circle} />
        <div className={rectangle} />
        <div className={text}>
          <p>{title}</p>
          <p>
            {authors.map(({ name }, idx) => (
              <span key={name}>
                {name}
                {idx !== authors.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
