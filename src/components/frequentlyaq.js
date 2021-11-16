import "./../styles/frequentlyaq.css";
import { useState } from "react";

const Frequentlyaq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="faq-main">
        <div className="question">
          <p className="quuestion-sub">{question}</p>
          <div
            className={"faq-dd " + (show ? "" : "faq-hide")}
            onClick={() => setShow((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              alt="Caret icon for questions."
              data-icon="caret-down"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="dropdown-ic"
            >
              <path
                fill="#F99D78"
                d="M12,17c-0.207,0-0.413-0.063-0.588-0.191l-11-8l1.177-1.617L12,14.764l10.412-7.572l1.177,1.617l-11,8 C12.413,16.937,12.207,17,12,17z"
              ></path>
            </svg>
          </div>
        </div>
        <div className={"answer " + (show ? "" : "hide")}>
          <p>{answer}</p>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Frequentlyaq;
