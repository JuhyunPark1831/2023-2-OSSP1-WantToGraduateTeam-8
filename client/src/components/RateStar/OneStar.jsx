//OnewStar.jsx
import React, { useEffect, useState } from 'react'

export default function OneStar({handleStarCnt, isFill}) { 
  const handleOnClick = () => {
    handleStarCnt && handleStarCnt()
  }

  return (
    <svg onClick={() => handleOnClick()} width="65" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Star 1" d="M28.8678 2.87467C30.2974 -0.224822 34.7026 -0.224827 36.1322 2.87466L42.4245 16.5162C43.0071 17.7794 44.2043 18.6492 45.5857 18.813L60.504 20.5818C63.8936 20.9837 65.2549 25.1732 62.7488 27.4907L51.7194 37.6904C50.698 38.6349 50.2408 40.0423 50.5119 41.4067L53.4397 56.1414C54.1049 59.4893 50.541 62.0786 47.5626 60.4114L34.4538 53.0736C33.2399 52.3941 31.7601 52.3941 30.5462 53.0736L17.4374 60.4114C14.459 62.0786 10.8951 59.4893 11.5603 56.1415L14.4881 41.4067C14.7592 40.0423 14.302 38.6349 13.2806 37.6904L2.25115 27.4907C-0.254846 25.1732 1.10641 20.9837 4.49599 20.5818L19.4143 18.813C20.7957 18.6492 21.9929 17.7794 22.5755 16.5162L28.8678 2.87467Z" fill={!isFill ? "#DFDFDF" : '#FAE846'}/>
    </svg>
  )
}