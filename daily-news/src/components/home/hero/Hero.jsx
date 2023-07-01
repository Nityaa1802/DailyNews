import React, { useEffect, useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {

  console.log("hi");
  const [allPost, setAllPost] = useState(hero);
  async function fetch1 () {
      console.log("hiiii");
        const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c101733fe03f4c33a862784ed7b59129`;
        const requestOption = {
            method: 'GET',
            headers: {
              'Consent-Type': 'application/json',
              'Authorization': 'c101733fe03f4c33a862784ed7b59129',
              "Access-Control-Allow-Origin" : "*",
              
            }
        };
        const response = await fetch(url, requestOption);
        if (!response.ok) {
            throw new Error("Something wen worng");
        }
        const responseJson = await response.json();
        setAllPost(responseJson.articles
          );
      console.log(responseJson);
    
    }
  useEffect(() => {
   fetch1()
  
},[])
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {allPost.slice(0,4).map((item) => {
            return (
              <>
                <Card key={item.title} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
