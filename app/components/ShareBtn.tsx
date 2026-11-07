import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faXmark } from "@fortawesome/free-solid-svg-icons";

function ShareBtn() {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [copied, setCopied] = useState(false);
  
    useEffect(() => {
      setUrl(window.location.href);
    }, []);
  
    useEffect(() => {
      if (!open) return;
  
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
  
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [open]);
  
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
  
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch {
        window.prompt("لینک را کپی کنید:", url);
      }
    };
  
    const encodedURL = encodeURIComponent(url);
    const encodedText = encodeURIComponent("");
  
    return (
      <>
  
        <button
          type="button"
          className="share hover:opacity-80"
          id="share"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon className="text-orange-500 text-xl" icon={faShareNodes} />
        </button>
  
        {open && (
          <div
            className="fixed inset-0 z-[1000] flex items-center
              justify-center bg-black/50 backdrop-blur-sm p-4"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="share-title"
              className="relative w-full max-w-sm rounded-2xl
                bg-white p-6 shadow-2xl"
              dir="rtl"
            >
  
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="بستن"
                className="absolute left-4 top-4 flex h-8 w-8
                  items-center justify-center rounded-full
                  text-gray-500 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <h2
                id="share-title"
                className="mb-2 text-xl font-bold text-gray-900"
              >
                اشتراک‌گذاری
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href={`https://t.me/share/url?url=${encodedURL}&text=${encodedText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl
                    border border-gray-200 p-4 transition
                    hover:bg-sky-50"
                >
                  <span className="font-medium text-gray-800">
                    اشتراک‌گذاری در تلگرام
                  </span>
                </a>
  
  
                <a
                  href={`https://wa.me/?text=${encodedText}%20${encodedURL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl
                    border border-gray-200 p-4 transition
                    hover:bg-green-50 hover:border-green"
                >
  
                  <span className="font-medium text-gray-800">
                    اشتراک‌گذاری در واتساپ
                  </span>
                </a>
  
                <button
                  type="button"
                  onClick={copyLink}
                  disabled={!url}
                  className="flex items-center gap-3 rounded-xl
                    border border-gray-200 p-4 text-right
                    transition hover:bg-orange-50 disabled:opacity-50"
                >
  
                  <span className="font-medium text-gray-800">
                    {copied ? "لینک کپی شد!" : "کپی کردن لینک"}
                  </span>
                </button>
              </div>
  

            </div>
          </div>
        )}
      </>
    );
  }

export default ShareBtn;