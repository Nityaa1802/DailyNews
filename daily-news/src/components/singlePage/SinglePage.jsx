import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../dummyData"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"

const SinglePage = () => {
  const { title } = useParams()


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
  
  }, [])
  const item=allPost.ilter(function(item) {
    return item.title == {title}; });

  return (
    <>
      {item ? (
        <main>
          <SinglePageSlider />
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src={item.authorImg} alt='' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              <img src={item.cover} alt='' />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div>
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default SinglePage
