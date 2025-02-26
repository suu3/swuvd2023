import React, { useState } from "react";
import { section, author, projectsStyle } from "./desinger-detail.module.scss";
import Card from "@/components/common/Card";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, Variants } from "framer-motion";

const DesignerDetail = ({ data }) => {
  const { name, enName, email, instagram, projects } = data;
  const isMobile = useIsMobile();
  const [clickCard, setClickCard] = useState(null);

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: 0.5,
      },
    },
  };
  return (
    <section className={section}>
      <div className={author}>
        <span>
          {isMobile && (
            <p>
              SWUVD <br />
              40TH <br />
              EXHIBITION
            </p>
          )}
        </span>
        <div>
          <h1>{name}</h1>
          <h1>{enName}</h1>
          {instagram && (
            <p>
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73379 0H20.2838C24.6838 0 28.2588 3.575 28.2588 7.975V19.525C28.2588 21.6401 27.4186 23.6686 25.923 25.1642C24.4274 26.6598 22.3989 27.5 20.2838 27.5H8.73379C4.33379 27.5 0.758789 23.925 0.758789 19.525V7.975C0.758789 5.8599 1.59901 3.83143 3.09461 2.33582C4.59022 0.840221 6.61869 0 8.73379 0ZM8.45879 2.75C7.14597 2.75 5.88692 3.27152 4.95861 4.19982C4.03031 5.12813 3.50879 6.38718 3.50879 7.7V19.8C3.50879 22.5362 5.72254 24.75 8.45879 24.75H20.5588C21.8716 24.75 23.1307 24.2285 24.059 23.3002C24.9873 22.3719 25.5088 21.1128 25.5088 19.8V7.7C25.5088 4.96375 23.295 2.75 20.5588 2.75H8.45879ZM21.7275 4.8125C22.1834 4.8125 22.6206 4.99358 22.9429 5.31591C23.2652 5.63824 23.4463 6.07541 23.4463 6.53125C23.4463 6.98709 23.2652 7.42426 22.9429 7.74659C22.6206 8.06892 22.1834 8.25 21.7275 8.25C21.2717 8.25 20.8345 8.06892 20.5122 7.74659C20.1899 7.42426 20.0088 6.98709 20.0088 6.53125C20.0088 6.07541 20.1899 5.63824 20.5122 5.31591C20.8345 4.99358 21.2717 4.8125 21.7275 4.8125ZM14.5088 6.875C16.3322 6.875 18.0808 7.59933 19.3701 8.88864C20.6595 10.178 21.3838 11.9266 21.3838 13.75C21.3838 15.5734 20.6595 17.322 19.3701 18.6114C18.0808 19.9007 16.3322 20.625 14.5088 20.625C12.6854 20.625 10.9367 19.9007 9.64743 18.6114C8.35812 17.322 7.63379 15.5734 7.63379 13.75C7.63379 11.9266 8.35812 10.178 9.64743 8.88864C10.9367 7.59933 12.6854 6.875 14.5088 6.875ZM14.5088 9.625C13.4148 9.625 12.3656 10.0596 11.592 10.8332C10.8184 11.6068 10.3838 12.656 10.3838 13.75C10.3838 14.844 10.8184 15.8932 11.592 16.6668C12.3656 17.4404 13.4148 17.875 14.5088 17.875C15.6028 17.875 16.652 17.4404 17.4256 16.6668C18.1992 15.8932 18.6338 14.844 18.6338 13.75C18.6338 12.656 18.1992 11.6068 17.4256 10.8332C16.652 10.0596 15.6028 9.625 14.5088 9.625Z"
                  fill="black"
                />
              </svg>
              <a
                href={`https://www.instagram.com/${instagram}/`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {instagram}
              </a>
            </p>
          )}
          <p>
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4255 2.66667C27.4255 1.2 26.2255 0 24.7588 0H3.42546C1.95879 0 0.758789 1.2 0.758789 2.66667V18.6667C0.758789 20.1333 1.95879 21.3333 3.42546 21.3333H24.7588C26.2255 21.3333 27.4255 20.1333 27.4255 18.6667V2.66667ZM24.7588 2.66667L14.0921 9.32L3.42546 2.66667H24.7588ZM24.7588 18.6667H3.42546V5.33333L14.0921 12L24.7588 5.33333V18.6667Z"
                fill="black"
              />
            </svg>
            {email}
          </p>
        </div>
      </div>
      <div className={projectsStyle}>
        {projects.map(
          (
            { uid, title, category, authors, project_image }: any,
            idx: string
          ) => {
            return (
              <motion.div
                //className="card-container"
                initial={isMobile ? "offscreen" : "onscreen"}
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                key={idx}
              >
                <span>{category}</span>

                <motion.div variants={cardVariants}>
                  <Card
                    {...{ clickCard, setClickCard }}
                    item={{
                      uid,
                      title,
                      authors,
                      project_image,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default DesignerDetail;
