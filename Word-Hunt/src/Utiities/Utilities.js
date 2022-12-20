import axios from "axios";

export const dictionaryAPI = (lang, word, setData) => {
  try {
    const arr = [
      {
        word: "hello",
        phonetic: "həˈləʊ",
        phonetics: [
          {
            text: "həˈləʊ",
            audio:
              "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
          },
          {
            text: "hɛˈləʊ",
          },
        ],
        origin:
          "early 19th century: variant of earlier hollo ; related to holla.",
        meanings: [
          {
            partOfSpeech: "exclamation",
            definitions: [
              {
                definition:
                  "used as a greeting or to begin a phone conversation.",
                example: "hello there, Katie!",
                synonyms: [],
                antonyms: [],
              },
            ],
          },
          {
            partOfSpeech: "noun",
            definitions: [
              {
                definition: "an utterance of ‘hello’; a greeting.",
                example: "she was getting polite nods and hellos from people",
                synonyms: [],
                antonyms: [],
              },
            ],
          },
          {
            partOfSpeech: "verb",
            definitions: [
              {
                definition: "say or shout ‘hello’.",
                example: "I pressed the phone button and helloed",
                synonyms: [],
                antonyms: [],
              },
            ],
          },
        ],
      },
    ];
    return arr;
  } catch (error) {
    console.log(error);
  }
};

// export const dictionaryAPI = async (lang, word, setData) => {
// Homework: check if word exists in the local storage.
// ifExist: Return the data instead of calling endpoint.
// !ifExist: Call endpoint and store data in the localstorage.
// P.S: Use word as the key for storing in LS.
//   try {
//     const { data } = await axios.get(
//       `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const debouncedSearch = (callback, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    console.log(this);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(context, args);
    }, delay);
  };
};
