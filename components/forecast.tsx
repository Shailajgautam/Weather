import React from 'react'


export const Forecast= (data: any) => {

      const weather = data.data;
   
  return (
      <div className="forecast-container pt-2">
      <div className='pt-2 pr-8'>
       <div className='Day1 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className='text-container'>
                  <h1>Day 1</h1>
            </div>
       </div>
       </div>
       <div className='pt-2'>
       <div className='Day2 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>
                  <h1>Day 2</h1>
            </div>
       </div>
       </div>
       <div className='Day3 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day4 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day5 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day6 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day7 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day8 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day9 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>

            </div>
       </div>
       <div className='Day10 info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto'>
            <div className=''>
                  
            </div>
      </div>     
      </div>
  )
}
export default Forecast