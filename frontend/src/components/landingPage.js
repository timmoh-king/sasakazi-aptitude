import axios from "axios";
import { useEffect, useState, useCallback} from "react";
import React from "react";
import Button from "./button";

const LandingPage = () => {
  const [joke, setJoke] = useState("");
  const [randomQuote, setRandomQuote] = useState(1000);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://quotes-villa.p.rapidapi.com/quotes/art",
      headers: {
        "X-RapidAPI-Key": "b7170d6d0emshf166210725d3be3p1dff5bjsn70423d340348",
        "X-RapidAPI-Host": "quotes-villa.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setJoke(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const displayJoke = useCallback(() =>  setRandomQuote(Math.floor(Math.random() * 3000)))

  useEffect(() => {
    const timeOutId = setInterval(displayJoke, 1800);
    return () => clearInterval(timeOutId);
  }, [displayJoke]);

  console.log(randomQuote);


  return (
    <div className="bg-white items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-[10px] mb-[10px] mx-auto items-flex flex-row">
        <div className="mt-[72px]">
          <p className="text-2xl text-start font-[700] text-sasakazi-blue">
            Get Today's Funny
            <span className="text-sasakazi-sky-blue"> Daily Joke</span>
          </p>
          <p className="py-4 text-start text-normal text-sasakazi-black">
            Get all available categories of our Jokes collection which can be
            used to filter jokes based on specific category. Get the joke of the
            day from a collection of most rated and most popular jokes. This
            will surely make your day!!
          </p>
          <div className="flex">
            <Button buttonText="Get Joke" buttonStyle="mx-0 w-[356px]" />
          </div>
        </div>
        <div className="ml-5">
          <img
            className="w-full rounded-md object-cover"
            src="https://thumbs.dreamstime.com/b/print-171406964.jpg"
            alt="laugh illustrator"
          />
        </div>
      </div>
      {joke ?
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 mt-[10px] mb-[10px] mx-auto flex flex-row">
          <p className="text-sasakazi-black text-[24px]">
          <span className="text-3xl font-bold text-sasakazi-blue">"</span>
          {joke[randomQuote].text}
          <span className="text-xl font-bold text-sasakazi-sky-blue">"</span>
        </p>
        <p className="py-2 text-xl text-start mt-8 ml-6 text-sasakazi-black"> ~ {joke[randomQuote].author}</p>   
      </div>
      </div> : 
      <div>
        <p className="py-4 text-start text-xl text-sasakazi-black">No jokes today!!</p>
     </div>}
    </div>
  );
};

export default LandingPage;
