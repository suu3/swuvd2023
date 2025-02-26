import React from "react";
import { section, desktopOnly } from "./concept-section.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import AbsoluteText from "@/components/common/AbsoluteText";
import ExplainText from "./ExplainText";
import useIsMobile from "@/hooks/useIsMobile";

const ConceptSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className={section}>
      <div>
        <StaticImage
          layout="fixed"
          placeholder="dominantColor"
          alt="background - track line"
          src="./_images/background-track.svg"
          objectFit="cover"
          height={1080}
        />
      </div>
      <AbsoluteText
        text="40TH EXHIBITION_CONCEPT"
        desktopOnly={false}
        type={isMobile ? "right" : "left"}
      />
      <article>
        <Title />
        <ExplainText
          ko={[
            <>
              실제로 그어진 임시의 선이라는 뜻을 가진 ‘금‘은 표면의 깨어진
              자국을 뜻하기도 한다. <br className={desktopOnly} />
              우리가 의식적으로 스스로에게 그어뒀던 금은 지금, 졸업전시라는 이름
              아래 ‘출발선’ 이라는
              <br className={desktopOnly} /> 새로운 직선으로 거듭난다. 이제는 그
              금을 밟아 완전히 깨뜨리고 앞으로 나아갈 차례다.
            </>,
            <>
              깨진 조각 틈새로 방출될 우리의 가능성은 무궁무진하며 다채롭다.
              <br /> 금 위에 선 47명의 졸업생들, 함께 손을 잡고 내딛는 첫
              발걸음이 금(金)빛 미래를 향한 도약이 될 것이다.
            </>,
          ]}
          en={[
            <>
              ‘Gold’, which means a temporary line drawn actually, also means a
              cracked mark on the surface.
              <br />
              The gold we consciously drew on ourselves is now the ‘starting
              line’ under the name of the graduation exhibition.
              <br />
              reborn as a new straight line. now that It's time to step on the
              gold and break it completely and move forward.
            </>,
            <>
              Our possibilities to be released through the cracks of broken
              pieces are endless and colorful.
              <br />
              47 graduates standing on the gold, the first step to take together
              holding hands will be a leap towards a golden future.
            </>,
          ]}
        />
      </article>
    </section>
  );
};

export default ConceptSection;

const Title = () => (
  <svg
    width="728"
    height="110"
    viewBox="0 0 728 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.462 76.3375H65.464V95.4115H19.462V76.3375ZM11.302 102.144H73.726V69.6055H11.302V102.144ZM70.972 50.4295C73.42 39.0055 73.42 30.6415 73.42 23.5015V16.7695H11.608V23.5015H65.158C65.158 30.6415 65.158 39.0055 62.506 50.4295H1V57.1615H84.13V50.4295H70.972Z"
      fill="#FFBE39"
      stroke="#FFBE39"
      strokeWidth="0.5"
    />
    <path
      d="M716.93 57.1069L722.398 61.1166C717.477 65.582 711.28 70.6853 706.541 73.8749L702.349 70.5942C706.906 67.1312 713.285 61.2078 716.93 57.1069ZM694.33 11.3597L701.893 12.8177C699.706 17.192 697.155 21.9307 695.059 24.938L689.317 23.48C691.049 20.1081 693.236 15.0049 694.33 11.3597ZM681.936 39.61V47.5383H712.647V39.61H681.936ZM681.936 26.3961V34.3244H712.647V26.3961H681.936ZM675.648 20.9283H719.208V53.0972H675.648V20.9283ZM694.056 50.0899H700.253V88C700.253 91.4629 699.615 93.1944 697.337 94.1968C694.968 95.1993 691.322 95.2904 685.581 95.2904C685.399 93.5589 684.579 91.0073 683.759 89.2758C687.859 89.367 691.505 89.367 692.598 89.2758C693.783 89.2758 694.056 89.0024 694.056 88V50.0899ZM672.185 61.0255H687.404V66.7667H672.185V61.0255ZM685.855 61.0255H687.039L688.224 60.8433L691.96 62.3925C688.68 76.8821 681.48 86.4508 672.367 91.6452C671.547 90.1871 669.451 87.9089 668.084 86.9064C676.65 82.4411 683.212 74.0571 685.855 62.1191V61.0255ZM699.433 50.5456C701.985 63.3949 708.546 79.0693 724.494 85.9951C723.218 87.271 721.213 89.8226 720.302 91.5541C704.718 83.5346 698.157 67.0401 695.697 55.1932L699.433 50.5456ZM653.412 11.5419L659.427 13.8202C655.964 20.5638 651.681 28.7655 648.127 33.7776L643.479 31.7728C646.76 26.4873 651.043 17.5565 653.412 11.5419ZM663.619 21.9307L669.36 24.5735C663.072 34.6889 654.232 47.6294 647.398 55.5577L643.206 53.1883C650.04 45.0778 658.607 31.4994 663.619 21.9307ZM638.831 30.497L642.477 26.1227C647.398 30.5881 652.957 36.6938 655.326 40.8858L651.407 45.9891C649.129 41.6148 643.661 35.1446 638.831 30.497ZM660.065 42.7995L664.986 40.7035C668.813 46.7181 672.55 54.5553 673.825 59.5674L668.449 62.0279C667.264 56.9247 663.71 48.8141 660.065 42.7995ZM638.102 51.8214C646.031 51.4569 657.422 50.9101 668.904 50.2722V56.0134C658.06 56.7424 647.124 57.3803 638.831 57.9271L638.102 51.8214ZM662.434 64.853L667.446 63.3038C669.816 68.4982 671.729 75.2418 672.276 79.616L666.991 81.2564C666.535 76.8821 664.621 70.0474 662.434 64.853ZM643.57 63.5772L649.311 64.5796C648.127 73.2369 646.031 81.9854 643.115 87.8177C642.021 87.0887 639.287 85.904 637.92 85.2661C640.836 79.7072 642.568 71.5055 643.57 63.5772ZM653.23 54.4642H659.245V95.2904H653.23V54.4642Z"
      fill="#FFBE39"
    />
    <path d="M335.29 50.1914H211.34V57.4114H335.29V50.1914Z" fill="#FFBE39" />
    <path
      d="M354.988 67.7714V50.1914H348.238V67.7714H354.988Z"
      fill="#FFBE39"
    />
    <path
      d="M472.191 67.7714V50.1914H465.441V67.7714H472.191Z"
      fill="#FFBE39"
    />
    <path
      d="M472.188 50.1914H348.238V57.4114H472.188V50.1914Z"
      fill="#FFBE39"
    />
    <path
      d="M492.551 67.7714V50.1914H485.801V67.7714H492.551Z"
      fill="#FFBE39"
    />
    <path
      d="M609.758 67.7714V50.1914H603.008V67.7714H609.758Z"
      fill="#FFBE39"
    />
    <path
      d="M609.759 50.1914H485.809V57.4114H609.759V50.1914Z"
      fill="#FFBE39"
    />
    <path d="M188.08 50.1914H82.5898V57.4114H188.08V50.1914Z" fill="#FFBE39" />
    <path
      d="M195.289 67.7714V50.1914H188.069V67.7714H195.289Z"
      fill="#FFBE39"
    />
    <path
      d="M216.219 67.7714V50.1914H208.999V67.7714H216.219Z"
      fill="#FFBE39"
    />
    <path
      d="M335.219 67.7714V50.1914H327.999V67.7714H335.219Z"
      fill="#FFBE39"
    />
  </svg>
);
