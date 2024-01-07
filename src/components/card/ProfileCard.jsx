import razvan from './../../razvan.jpeg';

import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <>
            <div class="profile-card-container">
                <p><img class="img-thumbnail" src={razvan} alt="Card image cap"/></p>
                <p class="name">Răzvan-Alexandru Nașca</p>
                <p class="role">Assistant Professor</p>
                <p class="faculty">Faculty of Mathematics and Computer Science</p>
            </div>
        </>
    )
};

export default ProfileCard;