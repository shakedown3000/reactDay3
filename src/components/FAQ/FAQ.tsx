import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isLastParagraphVisible, setIsLastParagraphVisible] =
    useState<boolean>(true);

  return (
    <>
      <div className="outerWrapperFAQ">
        <div className="weWrappEvenmore because">
          <p>Why is React Great</p>
          <button
            className="visibilityButton"
            onClick={() => setIsVisible((isVisible) => !isVisible)}
          >
            -
          </button>
        </div>

        <div className={`because ${isVisible && "disappear"}`}>
          <div className="weWrappEvenmore">
            <p>Fast learning curve</p>
            <button
              className="visibilityButton"
              onClick={() =>
                setIsLastParagraphVisible(
                  (isLastParagraphVisible) => !isLastParagraphVisible
                )
              }
            >
              +
            </button>
          </div>

          <div className={`because ${isLastParagraphVisible && "disappear"}`}>
            <p>
              React is very a simple and lightweight library that only deals
              with the view layer. It is not a beast like other MV* frameworks
              such as Angular or Ember. Any Javascript developer can understand
              the basics and start developing an awesome web application after
              only a couple of days reading tutorial. As the React guide says
              ‘Thinking in React’ may be a little different than you used to
              since it brings a new approach to the table, but it will become
              much easier and natural as you gain experience with it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
