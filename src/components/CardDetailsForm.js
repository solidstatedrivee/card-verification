import '../App.scss';
import { useState } from 'react';
import CompleteStateComponent from './CompleteStateComponent';

function CardDetailsForm(props) {

    //Track form error messages and whether the submit button is clicked
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //Use regular expressions as a way to validate the format of inputs
    const nameRegex = /^[a-z ,.'-]+$/i;

    //Below is a regex for validating card numbers. May not be the best practice though. 
    //const numberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    const numberRegex = /\d+/
    const monthRegex = /^(1[0-2]|0[1-9])$/;
    const yearRegex = /^\d{2}$/;
    const cvcRegex = /^\d{3}$/

    //When submit is clicked:
    // - Prevent default browser behavior
    // - Validate all inputs with custom function
    // - Set isSubmit to true. When isSubmit is true and all inputs pass validation the form is submitted.
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(props.name, props.cardNumber, props.expMonth, props.expYear, props.cvc));
        setIsSubmit(true);
    }

    //Validate the inputs against a regex and if they fail return the error value to an object
    const validate = (name, number, month, year, cvc) => {
        const errors = {};
        if (!nameRegex.test(name)) {
            errors.name = 'Cardholder name should not contain numbers';
        } else if (!numberRegex.test(number)) {
            errors.number = 'Wrong format, numbers only'
        } else if (!monthRegex.test(month)) {
            errors.month = 'Invalid month '
        } else if (!yearRegex.test(year)) {
            errors.year = 'Invalid year'
        } else if (!cvcRegex.test(cvc)) {
            errors.cvc = 'Must be three digits'
        }
        return errors;

    }

    return (
        <div className='card-details-container'>
            {/* If the form error object is emppty and the submit button is clicked, display the success component */}
            {Object.keys(formErrors).length === 0 && isSubmit ? <CompleteStateComponent setIsSubmit={setIsSubmit} />
                : <form onSubmit={handleSubmit} className='card-details-form'>
                    <p>{Object.keys(formErrors).length === 0 && isSubmit ? 'Submission successful!' : ''}</p>

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
                                    placeholder='MM'
                                    className={formErrors.month ? 'error-input' : ''}
                                />

                                <input
                                    type="text"
                                    required
                                    value={props.expYear}
                                    onChange={(e) => props.setYearValue(e.target.value)}
                                    id='exp-year'
                                    name='exp-date'
                                    placeholder='YY'
                                    className={formErrors.year ? 'error-input' : ''}
                                /><br />
                            </div>
                            <p className='error-message'>{formErrors.month}</p>
                            <p className='error-message error-year'>{formErrors.year}</p>

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
                                placeholder='e.g. 000'
                                className={formErrors.cvc ? 'error-input' : ''} />
                            <p className='error-message'>{formErrors.cvc}</p>

                        </div>
                    </div>
                    <div className='clear'></div>
                    <input
                        type="submit"
                        value='Confirm' />
                </form>}
        </div>
    )
}

export default CardDetailsForm