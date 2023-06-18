import React from "react";
import AbsoluteText from "@/components/common/AbsoluteText";
import {
  wrapper,
  credit,
  picRow,
  membersWrapper,
  memberRow,
  oneMember,
} from "./credit-article.module.scss";
import { useMediaQuery } from "react-responsive";

const CreditArticle = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });
  const renderCredit = creditList.map(({ pic, width, mwidth, member }, idx) => (
    <div key={pic} className={picRow}>
      <span>{pic}</span>
      <div className={membersWrapper} key={idx}>
        {member.map((row, idx) => (
          <div className={memberRow} key={idx}>
            {row.map(({ part, name }, idx) => (
              <div key={idx} className={oneMember}>
                <span
                  style={{
                    width: isMobile ? mwidth : width,
                  }}
                >
                  {part}
                </span>
                <div>
                  {name.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <div className={wrapper}>
      <AbsoluteText text="40TH EXHIBITION_CREDITS" type="left" desktopOnly />
      <article className={credit}>
        <h1>Credit</h1>
        {renderCredit}
      </article>
    </div>
  );
};

export default CreditArticle;

type MemberType = { part: string; name: string[] }[][];

const creditList: {
  pic: string;
  width: number;
  mwith: number;
  member: MemberType;
}[] = [
  {
    pic: "졸업준비위원회",
    width: 120,
    mwidth: 70,
    member: [
      [
        {
          part: "위원장",
          name: ["김유정"],
        },
        {
          part: "부위원장",
          name: ["이 새"],
        },
      ],
      [
        {
          part: "그래픽 팀장",
          name: ["변유나"],
        },
        {
          part: "도록 팀장",
          name: ["이세영"],
        },
        {
          part: "웹 팀장",
          name: ["이미선"],
        },
      ],
      [
        {
          part: "설치 팀장",
          name: ["송주현"],
        },
        {
          part: "행사 팀장",
          name: ["강나경"],
        },
        {
          part: "영상 팀장",
          name: ["박지원"],
        },
      ],
    ],
  },
  {
    pic: "교수",
    width: 67,
    mwidth: 70,
    member: [
      [
        {
          part: "그래픽",
          name: ["민병결 교수님"],
        },
        {
          part: "브랜딩",
          name: ["이규락 교수님"],
        },
      ],
      [
        {
          part: "영상",
          name: ["최창섭 교수님"],
        },
        {
          part: "UX/UI",
          name: ["유병재 교수님"],
        },
      ],
    ],
  },
  {
    pic: "웹사이트 제작",
    width: 67,
    member: [
      [
        {
          part: "디자인",
          name: ["이미선", "원수정", "정소윤"],
        },
      ],
      [
        {
          part: "",
          name: ["백선영", "김연진", "한유진"],
        },
      ],
      [
        {
          part: "개발",
          name: ["변수경"],
        },
      ],
    ],
  },
];
