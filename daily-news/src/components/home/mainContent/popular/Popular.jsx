
import "./Popular.css"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"

const Popular = () => {
  const [allPost, setAllPost] = useState(popular);
  async function fetch2 () {
    console.log("hiiii");
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c101733fe03f4c33a862784ed7b59129`;
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
      setAllPost(responseJson.articles);
    console.log(responseJson);
  
  }
useEffect(() => {
 fetch2()

},[])
  
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {allPost.slice(0,15).map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.urlToImage} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>Popular</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.publishedAt}</label>
                      </div>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>{val.author}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
