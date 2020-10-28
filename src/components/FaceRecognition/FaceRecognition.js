import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  const boxList = boxes.map((face, index) => {
    return <div key={index} className='bounding-box' style={{top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol}}></div>
  })

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}
        {boxList}
      </div>
    </div>
  );
}

export default FaceRecognition;