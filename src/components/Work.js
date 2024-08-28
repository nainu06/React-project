import React from 'react'

import PickMeals from './assets/pick-meals-image.png'
import ChooseMeals from './assets/choose-image.png'
import DeliveryMeals from './assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Non tinciduct magna non et elit. Dolor turpis molestie dui magnis'
        },
        {
            image: ChooseMeals,
            title: 'Choose Who Ofter',
            text: 'Non tinciduct magna non et elit. Dolor.'
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Non tinciduct magna non et elit. Dolor turpis.'
        },
    ]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur. Non tinciduct magna non et elit. Dolor turpis molestie dui magnis
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info' key={data.id}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt={data.title || 'Work Image'}/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work