import React, { useCallback, useState } from "react";
import {
  card,
  image,
  imageInfo,
  hoverImage,
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
  const isMobile = useIsMobile();
  const [clickCnt, setClickCnt] = useState(0);

  const goToDetail = useCallback(() => {
    navigate(`/project/${uid}`);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setClickCnt((prev) => prev + 1);
      if (clickCnt === 0) {
        //한번 클릭
      } else {
        //두번 클릭
        goToDetail();
      }
    } else {
      goToDetail();
    }
  };

  const hoverImageCls = {
    [imageInfo]: true,
    [hoverImage]: !isMobile,
    [clickImage]: isMobile && clickCnt >= 1,
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
              <span key={idx}>
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
