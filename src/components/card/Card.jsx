import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, button_text, button_link, icon }) => {
    return (
        <div class="card">
            <h5 class="card-header card-title">
                <i class={icon}></i> { title }</h5>
            <div class="card-body">
                <p class="card-text card-description">
                    { description }
                </p>
                {button_text && <a href={button_link} target="_blank" class="btn button">{ button_text }</a> }
            </div>
        </div>
    );
};

Card.prototype = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    icon: PropTypes.string.isRequired,
}

export default Card;