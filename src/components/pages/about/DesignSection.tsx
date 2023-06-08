import React from "react";
import { section, text, image } from "./design-section.module.scss";
import AbsoluteText from "@/components/common/AbsoluteText";
import ExplainText from "./ExplainText";
import { StaticImage } from "gatsby-plugin-image";

const DesignSection = () => {
  return (
    <section className={section}>
      <AbsoluteText text="40TH EXHIBITION_DESIGN_CONCEPT" type="left" />
      <div>
        <article className={text}>
          <ExplainText
            ko={[
              <>“금”은 두 공간 사이의 경계를 의미한다.</>,
              <>
                졸업전시는 4년간의 대학 생활을 마무리하는 완주 선이자 새로운
                시작을 향한 출발선이다. 스스로 정해둔 경계를 깨고 금을 넘어서
                우리는 각자 꿈을 갖고 다양한 방향으로 나아간다.
              </>,
              <>
                숨이 벅차오르는 고비를 이겨내고 장애물을 넘어 <br />
                앞으로 나아가는 마라톤처럼 우리는 모두 각자의 <br />
                속도에 맞춰 트랙을 완주할 것이다. 비로소 완주하고 났을 때
                모두에게 찬란한 금빛 미래가 펼쳐질 것이다.
              </>,
            ]}
            en={[
              <>“Gold” means the boundary between two spaces.</>,
              <>
                The graduation exhibition is the finishing line of four years of
                university life and the starting line for a new beginning.
                <br />
                Breaking the boundaries we set for ourselves and going beyond
                gold, each of us has a dream and goes in various directions.
              </>,
              <>
                Like a marathon in which we overcome breath-taking obstacles and
                move forward over obstacles, we will all complete the track at
                our own pace. When it is finally completed, a brilliant golden
                future will unfold for everyone.
              </>,
            ]}
          />
        </article>
        <article className={image}>
          <StaticImage
            layout="fullWidth"
            alt="poster"
            src="./_images/poster.png"
            aspectRatio={670 / 948}
          />
        </article>
      </div>
    </section>
  );
};

export default DesignSection;
