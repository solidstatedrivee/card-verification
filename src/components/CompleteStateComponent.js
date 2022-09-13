import '../App.scss'
import iconComplete from '../images/icon-complete.svg'

function CompleteStateComponent(props) {

    //When the 'Continue' button is clicked, set isSubmit to false so the conditional in CarddDetailsForm (line 52)
    //displays the form again
    const handleClick = () => {
        props.setIsSubmit(false);
    }

    return (
        <div className='complete-state-container'>
            <img src={iconComplete} alt="Completed task icon" />
            <div className='thank-you'>Thank You!</div>
            <div className='details-confirmation'>We've added your card details</div>
            <button className='continue-button' onClick={handleClick}>Continue</button>
        </div>
    )
}

export default CompleteStateComponent