import '../App.scss'

function CardDetailsForm(props) {
    return (
        <form action="" className='card-details-form'>
            <label htmlFor="cardholder-name">Cardholder Name</label><br />
            <input
                type="text"
                required
                value={props.name}
                onChange={(e) => props.setNameValue(e.target.value)}
                id='cardholder-name'
                name='cardholder-name'
                placeholder='e.g. Jane Appleseed' /><br />

            <label htmlFor="card-number">Card Number</label><br />
            <input
                type="text"
                required
                value={props.cardNumber}
                onChange={(e) => props.setCardValue(e.target.value)}
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
                            value={props.expMonth}
                            onChange={(e) => props.setMonthValue(e.target.value)}
                            id='exp-month'
                            name='exp-date'
                            placeholder='MM' />

                        <input
                            type="text"
                            required
                            value={props.expYear}
                            onChange={(e) => props.setYearValue(e.target.value)}
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
                        value={props.cvc}
                        onChange={(e) => props.setCvcValue(e.target.value)}
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
    )
}

export default CardDetailsForm