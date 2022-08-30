import '../App.scss'

function CardDetailsForm() {
    return (
        <form action="" className='card-details-form'>
            <label htmlFor="cardholder-name">Cardholder Name</label><br />
            <input type="text" id='cardholder-name' name='cardholder-name' placeholder='e.g. Jane Appleseed' /><br />
            <label htmlFor="card-number">Card Number</label><br />
            <input type="text" id='card-number' name='card-number' placeholder='e.g. 1234 5678 9123 0000' /><br />
            <div className='exp-cvc-container'>
                <div className='left exp-date-container'>
                    <label htmlFor="exp-date">Exp. Date (MM/YY)</label><br />
                    <div className='exp-input-container'>
                        <input type="text" id='exp-month' name='exp-date' placeholder='MM' />
                        <input type="text" id='exp-year' name='exp-date' placeholder='YY' />
                    </div>
                </div>
                <div className='left cvc-container'>
                    <label htmlFor="">CVC</label>
                    <input type="text" id='cvc' name='cvc' placeholder='e.g. 123' />
                </div>
            </div>
            <div className='clear'></div>
            <input type="submit" value='Confirm' />
        </form>
    )
}

export default CardDetailsForm