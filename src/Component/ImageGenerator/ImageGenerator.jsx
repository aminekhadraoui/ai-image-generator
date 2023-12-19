import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import image from '../assest/default_image.png';
import { Configuration, OpenAIApi } from "openai";
import DiamondAnimation from './DiamondAnimation';
function ImageGenerator() {
  const [image_url, set_image_url] = useState('/');
  let inputRef = useRef(null);
  const [loading,setLoading] = useState(false)
    const api_key = "[api key]"
  
    const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true)
    try {
      const response = await fetch(
        'https://api.openai.com/v1/images/generations', 
        {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
          Authorization: `Bearer ${api_key}`,
          'User-Agent': 'Opera',
        },
        
        body:JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 4,
          size: '512x512',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      let data_array = data.data
      console.log(data_array);
      set_image_url(data_array[0].url)
      setLoading(false)
      // Update the image_url state with the generated image URL
      
      // Assuming the URL property in the response contains the image URL
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ai-image-generator">
      <DiamondAnimation 
      img={image_url === '/' ? image : image_url}/>
      
      
      <div className="img-loading">
        <div className="image">
          <img src={image_url === '/' ? image : image_url} alt="" />
          
        </div>
        <div className="loading">
          <div className={loading ? "loading-bar-full":"loading-bar"}>

          </div>
          
          <div className="load-4">
       <div className={loading ? "loading-text":"display-none"}>
        <div className="ring-1"></div>
      </div>
          </div>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Please provide detailed information about your requirements"
        />
        <div className="generate-btn" onClick={()=>{imageGenerator()}}>
          Generate
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
