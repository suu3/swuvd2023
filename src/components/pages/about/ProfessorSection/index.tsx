import React, { Fragment } from "react";
import {
  section,
  message,
  image,
  grid,
  professor,
} from "./professor-section.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import CreditArticle from "./CreditArticle";

const ProfessorSection = () => {
  const renderMsgs = professorData.map(({ name, content }, idx) => {
    return (
      <div key={idx} className={message}>
        <h2>{name} 교수님</h2>
        <p>{content}</p>
      </div>
    );
  });
  return (
    <section className={section}>
      <article className={image}>
        <StaticImage
          layout="fixed"
          placeholder="dominantColor"
          alt="background - track line"
          objectFit="cover"
          height={2080}
          src="../_images/background-line.svg"
          // aspectRatio={670 / 948}
        />
      </article>
      <article className={professor}>
        <h1>Professor's congratulatory message</h1>
        <div className={grid}>{renderMsgs}</div>
      </article>
      <CreditArticle />
    </section>
  );
};

export default ProfessorSection;

const professorData = [
  {
    name: "민병철",
    content: (
      <>
        “금”은 두 공간 사이의 경계를 의미한다.졸업전시는 4년간의 대학 생활을
        마무리하는 완주 선이자 새로운 시작을 향한 출발선이다. 스스로 정해둔
        경계를 깨고 금을 넘어서 우리는 각자 꿈을 갖고 다양한 방향으로 나아간다.
        숨이 벅차오르는 고비를 이겨내고 어쩌고 저쩌고 어쩔티비 두 공간 사이의
        경계를 의미한다.졸업전시는 4년간의 대학 생활을 마무리하는 완주 선이자
        새로운 시작을 향한 출발선이다. 스스로 정해둔 경계를 깨고 금방망이
      </>
    ),
  },
  {
    name: "최창섭",
    content: (
      <>
        먼저 4년간의 배움을 결산하는 졸업전시를 축하합니다. 빠르게 변화하는
        사회에서 시각디자이너에게 필요한 역량은 더욱 고도화되고 있습니다.
        여러분들은 변화에 적응하고 기술을 익히며, 사회적 변화에 민감하게 대응할
        수 있어야 합니다. 그러나 빠른 변화들에 대응하기 위해서는 역설적으로
        기본기가 중요합니다. 기본기가 탄탄하다면 변화에 끌려가는 것이 아니라
        변화를 더 나은 창의성을 위해 이용할 수 있을 것입니다. 서울여대
        시각디자인전공에서 공부한 4년이 앞으로 탄탄한 토대가 될 것입니다.
        사회초년생으로서 어려움이 많더라도 실망하지 마시고 계속 정진하시기
        바랍니다.
      </>
    ),
  },
  {
    name: "유영재",
    content: (
      <>
        이제 우리는 새로운 경계를 넘어갑니다. 그리고 그 경계는 바로 알을 깨고
        나오는 새처럼 세상의 넓은 스펙트럼입니다. 이 큰 변화는 쉽지 않을
        것입니다. 취업 준비의 어려움, 다양한 사람들과 원만하게 일하는 법 등을
        배워야 할 책임이 무거울지 모릅니다. <br />
        그러나, 여러분이 대학에서 배운 지식과 졸업전시를 통한 경험은 여러분의
        등대가 될 것입니다. 다시 한 번 졸업전시를 축하 드리며, 여러분의 새로운
        여정이 흥미롭고 성공적이길 진심으로 기원합니다.
      </>
    ),
  },
  {
    name: "이규락",
    content: (
      <>
        매년 지도해오고 있는 졸업전시이지만, 올해는 또 다른 빛깔로, 또 다른
        재능을 꽃 피워낸 여러분들이 대견하고, 또 뿌듯하기까지 합니다. 각자
        주어진 도전 과제와 한계에 맞서다 보니, 훌쩍 더 성장해 있는 스스로를
        발견할 수 있었을 텐데요, <br /> 저는 이 것이 디자인의 매력이고, 이 것이
        졸업전시에서 얻는 기쁨이라 생각합니다. 앞으로도 이 매력과 이 기쁨을
        꾸준히 누릴 수 있길 기원하며, 여러분들 한 명 한 명의 앞날을
        응원하겠습니다.
      </>
    ),
  },
];
