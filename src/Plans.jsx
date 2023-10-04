import React from 'react'
import Card from './Card'

function Plans() {
    const planDetails=[{
        plan:"FREE",
        price:"$0",
        features:[" Single User"," 5GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
      },
      {
        plan:"PLUS",
        price:"$9",
        features:[" 5 Users"," 50GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
      },
      {
        plan:"PRO",
        price:"$49",
        features:[" Unlimited Users"," 150GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Unlimited Free Subdomain"," Monthly Status Reports"],
      }]
  return (
    <div>
      <h1>PRICING CARD</h1>
      <div className="container">
        {planDetails.map((data,index) => (
            <Card key={index} name={data.plan} price={data.price} features={data.features} />
        ))}
      </div>
    </div>
  )
}

export default Plans
