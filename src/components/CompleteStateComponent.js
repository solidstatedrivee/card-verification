import '../App.scss'
import iconComplete from '../images/icon-complete.svg'

function CompleteStateComponent() {
    return (
        <div className='complete-state-container'>
            <img src={iconComplete} alt="Completed task icon" />
            <div className='thank-you'>Thank You!</div>
            <div className='details-confirmation'>We've added your card details</div>
            <button className='continue-button'>Continue</button>
        </div>
    )
}

export default CompleteStateComponent