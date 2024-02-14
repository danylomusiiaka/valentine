import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
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
      "будь ласка",
      ":((((",
      "НУ БУДЬ ЛАСКА",
      "капец сучара",
      ":(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img className="h-[300px]" src="yes.gif" />
          <div className="my-4 text-4xl font-bold">УРАААААА!!! Я ЛЮБЛЮ ТЕБЕ!! ;))</div>
        </>
      ) : (
        <>
          {noCount > 0 ? (

            <img
              className="h-[350px]"
              src="no.gif"
            />
          ) : (
            <img
              className="h-[300px]"
              src="start.gif"
            />
          )}
          <h1 className="my-4 text-4xl">Будеш моєю валентинкою?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Ні" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}