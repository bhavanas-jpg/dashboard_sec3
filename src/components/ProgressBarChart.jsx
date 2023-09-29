import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar"

const ProgressBarChart = () => {
  return (
   <div >
   <p>Active</p>
   <ProgressBar 
     completed={63}
     height= "8px"
     width ="301px"
     baseBgColor="#EEEEEE"
      bgColor="#16C09861"
      isLabelVisible={false}
      animateOnRender={true}
      />
      <span>63%</span>
      <p>Inactive</p>
   <ProgressBar 
     completed={88}
     height= "8px"
     width ="301px"
     baseBgColor="#EEEEEE"
      bgColor="#FF6B6B"
      isLabelVisible={false}
      animateOnRender={true}
      />
      <span>88%</span>
   </div>
  )
}

export default ProgressBarChart