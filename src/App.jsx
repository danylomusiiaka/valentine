import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [images, setImages] = useState({
    start: "start.gif",
    no: "no.gif",
    yes: "yes.gif"
  });

  const yesButtonSize = noCount * 20 + 16;

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const imageKeys = Object.keys(images);
      imageKeys.forEach((key) => {
        const img = new Image();
        img.src = images[key];
      });
    };

    preloadImages();
  }, [images]);

  const handleNoClick = () => {
    if (noCount < 9) {
      setNoCount(noCount + 1);
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти впевнена?",
      "Будь ласка",
      "А якщо за сінабончик?",
      "НУ БУДЬ ЛАСКА",
      "або я помру",
      "ок я помер",
      "ти зара спілкуєшся з моїм привидом",
      "будь ласка"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img className="h-[300px]" src={images.yes} alt="yes" />
          <div className="my-4 text-4xl font-bold px-5">УРАААААА!!! Я ЛЮБЛЮ ТЕБЕ!! ;))</div>
        </>
      ) : (
        <>
          {noCount > 0 ? (
            <img className="h-[350px]" src={images.no} alt="no" />
          ) : (
            <img className="h-[300px]" src={images.start} alt="start" />
          )}
          <h1 className="my-4 text-4xl px-5">Будеш моєю валентинкою?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так
            </button>
            {noCount < 9 ? (
              <button
                onClick={handleNoClick}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                {noCount === 0 ? "Ні" : getNoButtonText()}
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
