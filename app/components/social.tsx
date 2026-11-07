import { useState } from "react";
import EmailModal from "./emailmodal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function Social() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <>
      <section className="social-links relative flex flex-row items-center gap-4">
        <a
          href="https://github.com/ronakserry"
          className="socialBG github"
          id="github"
          target="_blank"
          rel="noreferrer"
        >
          گیت‌هاب
        </a>

        <a
          href="#"
          className="socialBG email"
          id="email"
          onClick={(event) => {
            event.preventDefault();
            setIsEmailOpen(true);
          }}
        >
          ایمیل
        </a>

        <a
          href=""
          className="socialBG telegram"
          id="telegram"
        >
          تلگرام
        </a>

        {isEmailOpen && (
          <div
            className="modalOverlay absolute inset-0 flex items-center justify-center"
            onClick={() => setIsEmailOpen(false)}
          >
            <div
              className="modalContent bg-[#f5f5f5] border rounded-md"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="closeButton pt-2 pr-2 h-4 w-4"
                onClick={() => setIsEmailOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <EmailModal />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Social;
