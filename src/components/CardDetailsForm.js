import { useState } from 'react'
import '../App.scss'

function CardDetailsForm() {
    const [name, setName] = useState('Jane Appleseed');
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [expMonth, setExpMonth] = useState('00');
    const [expYear, setExpYear] = useState('00');
    const [cvc, setCvc] = useState('000');

    return (
        <>
            <form action="" className='card-details-form'>
                <label htmlFor="cardholder-name">Cardholder Name</label><br />
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id='cardholder-name'
                    name='cardholder-name'
                    placeholder='e.g. Jane Appleseed' /><br />

                <label htmlFor="card-number">Card Number</label><br />
                <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    id='card-number'
                    name='card-number'
                    placeholder='e.g. 0000 0000 0000 0000' /><br />

                <div className='exp-cvc-container'>
                    <div className='left exp-date-container'>
                        <label htmlFor="exp-date">Exp. Date (MM/YY)</label><br />
                        <div className='exp-input-container'>
                            <input
                                type="text"
                                required
                                value={expMonth}
                                onChange={(e) => setExpMonth(e.target.value)}
                                id='exp-month'
                                name='exp-date'
                                placeholder='MM' />

                            <input
                                type="text"
                                required
                                value={expYear}
                                onChange={(e) => setExpYear(e.target.value)}
                                id='exp-year'
                                name='exp-date'
                                placeholder='YY' />
                        </div>
                    </div>
                    <div className='left cvc-container'>
                        <label htmlFor="">CVC</label>
                        <input
                            type="text"
                            required
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            id='cvc'
                            name='cvc'
                            placeholder='e.g. 000' />
                    </div>
                </div>
                <div className='clear'></div>
                <input
                    type="submit"
                    value='Confirm' />
            </form>
            <div>
                <div>Cardholder Name: {name}</div>
                <div>Card Number: {cardNumber}</div>
                <div>Expiration Month: {expMonth}</div>
                <div>Expiration Year: {expYear}</div>
                <div>CVC: {cvc}</div>
            </div>
        </>
    )
}

export default CardDetailsForm