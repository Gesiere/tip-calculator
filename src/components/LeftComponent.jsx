import { useEffect, useState } from 'react'
import dollarSign from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'


export function LeftComponent({
  percentageButtons,
  bill,
  setBill,
  people,
  setPeople,
  tipPercentage,
  setTipPercentage
  
}) {




  return (
    <>

      <div className="form-control">
        <div className="bill-input">
          <label htmlFor="bill" className="form-label">
            Bill
          </label>
          <div className="input-container">
            <img src={dollarSign} alt="A dollar sign" />
            <input
              type="number"
              name="bill"
              onChange={(e) => setBill(e.target.value)}
              value={bill}
              placeholder='0'
            />
          </div>
        </div>
      </div>
      <div className="tip-percentages">
        <p className="title">Select Tip %</p>
        <div className="percentage-values">
          {percentageButtons.map((button, index) => {
            return (
      
              <input
                type="button"
                value={`${button}%`}
                key={index}
                className={`percentage-btn ${tipPercentage === button ? 'showClass' : ''}`}
                onClick={(e) => setTipPercentage(button)}

              />
            )
          })}
          <input 
          placeholder="Custom"
          maxLength="2"
          name='custom'
          type='text'
          className="percentage-btn custom"
          onChange={(e => setTipPercentage(e.target.value))}
          >
          
          </input>
        </div>
      </div>
      <div className="people">
        <div className="top">
          <label htmlFor="people" className="form-label">
            Number of People
          </label>
          <p className={`${people === '0' ? 'show-element' : ''} `}>Can't be Zero</p>
        </div>
        <div className="input-container">
          <img src={personIcon} alt="An image icon" />
          <input
            maxLength="4"
            type="number"
            name="person"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder='0'
          />
        </div>
      </div>
    </>
  )
}


export default LeftComponent