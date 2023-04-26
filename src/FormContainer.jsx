import { LeftComponent } from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import { useEffect, useState } from 'react'


const FormContainer = () => {
    const [percentageButtons, setButtons] = useState([5, 10, 15, 25, 50])
    const [tipAmount, setTipAmount] = useState('0.00')
    const [totalPeople, setTotalPeople] = useState('0.00')
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('')
    const [tipPercentage, setTipPercentage] = useState('')
  
    
    const handleTipCalculations = () =>  {
        if(bill === 0 || !tipPercentage){
            return;
        }
        // convert percentage to a decimal
        const dec = tipPercentage / 100
        // Multiply the bill amount by the decimal
        const totalTip = ((bill * dec) / people).toFixed(2)
        const total = (+tipAmount * +people + +bill) /+people
        
        if(people === '0' || people < 0 || people === ''){
            return people
        }else{
            setTipAmount(totalTip)
            setTotalPeople(total.toFixed(2))
        }

    }
    useEffect(() => {
        handleTipCalculations()
    },[bill, people, tipPercentage,tipAmount])

    const resetAll = () => {
        setTipAmount('0.00')
        setTotalPeople('0.00')
        setBill('')
        setPeople('')
        setTipPercentage('')
        
    }
return (
    <form  onClick={(e) => e.preventDefault()}>
        <div className="form-control">
            <div className="left-section">
                <LeftComponent  
                percentageButtons={percentageButtons} 
                bill={bill}
                setBill={setBill}
                people={people}
                setPeople={setPeople}
                tipPercentage={tipPercentage}
                setTipPercentage={setTipPercentage}
                />
            </div>
            <div className="right-section">
                <RightComponent  totalTip={tipAmount} totalPerPerson={totalPeople} reset={resetAll}/>
            </div>
        </div>
    </form>
  )
}

export default FormContainer