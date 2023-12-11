import React from "react";
import { section, text, image } from "./design-section.module.scss";
import AbsoluteText from "@/components/common/AbsoluteText";
import ExplainText from "./ExplainText";
import { StaticImage } from "gatsby-plugin-image";

const DesignSection = () => {
  return (
    <section className={section}>
      <AbsoluteText
        text="40TH EXHIBITION_DESIGN_CONCEPT"
        type="left"
        desktopOnly
      />
      <div>
        <article className={text}>
          <AbsoluteText
            height="222px"
            text="40TH EXHIBITION_DESIGN_CONCEPT"
            type="right"
            mobileOnly
          />
          <ExplainText
            ko={[
              <>“금”은 금색, 선, 깨진 틈 등 다양한 의미를 가집니다. </>,

              <>
                다양한 의미 중 이번 포스터는 “선”의 의미에 집중했습니다. <br />
                졸업전시회는 곧 4년간의 대학 생활을 마무리하는 완주 선이자
                새로운 시작을 향한 출발선입니다.{" "}
              </>,

              <>
                각자의 속도에 맞게 나아가며, 순위에 집착하지 않고, 완주하는
                모두가 축하받는 트랙 위의 마라톤은 꼭 졸업전시회와 비슷합니다.{" "}
              </>,

              <>
                앞으로 나아가는 공은 각자 속도에 맞게 길을 개척해 나가는 47명의
                학우들을, 그늘은 힘들 때 잠깐 쉬어갈 수 있는 안식처를, 허들은
                모두가 한 번쯤 경험하는 크고 작은 어려움을 의미합니다. 때로는
                넘어지더라도 각자의 한계를 뛰어넘어 트랙을 완주하길 바라는
                의도를 담았습니다.
              </>,
              <>
                새로운 시작을 향해 나아가는 47명의 학우분들 앞에 찬란한 금빛
                미래가 펼쳐지길 진심으로 바랍니다.
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
