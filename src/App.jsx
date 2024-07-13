import { useState, useEffect } from "react";

const Spinner = ({ text }) => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white z-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mb-4"></div>
      <p>{text}</p>
    </div>
  </div>
);

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;  

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({
    start: "start.gif",
    no: "no.gif",
    yes: "yes.gif"
  });

  useEffect(() => {
    const preloadImages = () => {
      const imageKeys = Object.keys(images);
      let loadedCount = 0;

      imageKeys.forEach((key) => {
        const img = new Image();
        img.src = images[key];
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageKeys.length) {
            setLoading(false);
          }
        };
      });
    };
    preloadImages();
  }, [images]);

  if (loading) {
    return <Spinner text="Загружаю твою валентинку 🎀" />;
  }


  const handleNoClick = () => {
    if (noCount < phrases.length) {
      setNoCount(noCount + 1);
    }
  };

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
  
  const getNoButtonText = () => {
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
            {noCount < phrases.length ? (
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
