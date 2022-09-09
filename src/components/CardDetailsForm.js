import '../App.scss';
import { useState, useEffect } from 'react';

function CardDetailsForm(props) {

    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const nameRegex = /^[a-z ,.'-]+$/i;
    const numberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(props.name, props.cardNumber, props.expMonth, props.expYear, props.cvc));
        setIsSubmit(true);
        console.log(isSubmit);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(props.name);
        }
    }, [formErrors])

    const validate = (name, number, month, year, cvc) => {
        const errors = {};
        if (!nameRegex.test(name)) {
            errors.name = 'Cardholder name should not contain numbers';
        } else if (!numberRegex.test(number)) {
            errors.number = 'Wrong format, numbers only'
        }
        return errors;

    }

    return (
        <form onSubmit={handleSubmit} className='card-details-form'>
            <label htmlFor="cardholder-name">Cardholder Name</label><br />
            <input
                type="text"
                required
                value={props.name}
                onChange={(e) => props.setNameValue(e.target.value)}
                id='cardholder-name'
                name='cardholder-name'
                placeholder='e.g. Jane Appleseed'
                className={formErrors.name ? 'error-input' : ''}
            />
            <p className='error-message'>{formErrors.name}</p>
            <br />

            <label htmlFor="card-number">Card Number</label><br />
            <input
                type="text"
                required
                value={props.cardNumber}
                onChange={(e) => props.setCardValue(e.target.value)}
                id='card-number'
                name='card-number'
                placeholder='e.g. 0000 0000 0000 0000'
                className={formErrors.number ? 'error-input' : ''}
            />
            <p className='error-message'>{formErrors.number}</p>
            <br />

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