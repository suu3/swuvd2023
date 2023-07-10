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
import useIsMobile from "@/hooks/useIsMobile";

const CreditArticle = () => {
  const isMobile = useIsMobile();

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
        <AbsoluteText
          text="40TH EXHIBITION_CREDITS"
          type="right"
          mobileOnly
          location="top"
        />
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
  mwidth: number;
  member: MemberType;
}[] = [
  {
    pic: "졸업준비위원회",
    width: 140,
    mwidth: 70,
    member: [
      [
        {
          part: "위원장",
          name: ["김희정"],
        },
        {
          part: "부위원장",
          name: [`이 새 `],
        },
        {
          part: "웹 팀장",
          name: ["이미선"],
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
          part: "영상 팀장",
          name: ["박지원"],
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
          part: "회계 팀장",
          name: ["김수미"],
        },
      ],
    ],
  },
  {
    pic: "지도교수",
    width: 75,
    mwidth: 70,
    member: [
      [
        {
          part: "출판",
          name: ["민병걸 교수님"],
        },
        {
          part: "브랜딩",
          name: ["이규락 교수님"],
        },
      ],
      [
        {
          part: "영상",
          name: ["최장섭 교수님"],
        },
        {
          part: "UX/UI",
          name: ["유영재 교수님"],
        },
      ],
    ],
  },
  {
    pic: "웹사이트 제작",
    width: 75,
    mwidth: 70,
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
