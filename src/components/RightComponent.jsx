import React from 'react'

const RightComponent = ({totalTip, totalPerPerson, reset}) => {
  return (
    <>
    <div className='amount-container result-container'>
        <div className="result-message">
            <p>Tip Amount</p>
            <span>/ person</span>
        </div>
        <div className="result-display">
            <p>${totalTip}</p>
        </div>
    </div>
    <div className='person-container result-container'>
        <div className="result-message">
            <p>Total</p>
            <span>/ person</span>
        </div>
        <div className="result-display">
            <p>${totalPerPerson}</p>
        </div>
    </div>

    <button 
    onClick={reset}
    className={`reset-btn ${totalTip !== '0.00' && totalPerPerson !== '0.00' ? 'add-class': ''}`} 
    >
        Reset
    </button>
    </>
  )

}

export default RightComponent