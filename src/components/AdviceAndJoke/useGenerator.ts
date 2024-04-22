import { useEffect } from "react";
import { useDataStore } from "./Store";
import axios from "axios";

const useGenerator = (reload: boolean, joke: boolean, advice: boolean) => {
  const { setData } = useDataStore();
  //fetch the Joke
  useEffect(() => {
    if (joke) {
      axios
        .get("https://icanhazdadjoke.com/slack")
        .then((res) => setData(res.data.attachments[0].text))
        .catch((err) => setData(err));
    }
  }, [, reload, joke]);

  //fetch the Advice
  useEffect(() => {
    if (advice) {
      axios
        .get(`https://api.adviceslip.com/advice`)
        .then((res) => setData(res.data.slip.advice))
        .catch((err) => setData(err));
    }
  }, [reload, advice]);
};

export default useGenerator;
