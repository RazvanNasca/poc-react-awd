import ProfileCard from '../../components/card/ProfileCard';
import Card from '../../components/card/Card';

import "./Home.css";

const Home = () => {
    
    return (
        <div class="wrapper-container">
        <div class="container"> 
            <div class="row"> 
                <div class="col">
                    <Card 
                        title={"About me"} 
                        icon={"fa-solid fa-address-card"} 
                        description={"Hello, I'm Răzvan, an Assistant Professor at the Faculty of Mathematics and Computer Science. With a fervor for web development, my expertise lies in crafting dynamic experiences with React and Angular. Committed to bridging theory and practice, I guide students through the intricacies of modern frontend frameworks. In my classes, we delve into the intersection of precision and creativity, exploring the limitless potential of web development. Join me in navigating the exciting journey where the principles of Computer Science converge with the artistry of React and Angular, shaping the next generation of innovative, user-centric digital solutions."}
                    />
                </div>
                <div class="col">
                    <ProfileCard />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;