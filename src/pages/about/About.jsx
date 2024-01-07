import Card from "../../components/card/Card";

import "./About.css";

const About = () => {
    
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <Card 
                        title={"Education"} 
                        description={
                            <div class="container">
                                <ul class="row">
                                    <div class="col-1"><i class="fa-solid fa-spinner"></i></div>
                                    <div class="col">
                                        <div class="row licence">PhD, 2024-Present</div>
                                        <div class="row faculty">Faculty of Mathematics and Computer Science, Babes-Bolyai University</div>
                                    </div>
                                </ul>
                                <ul class="row">
                                    <div class="col-1"><i class="fa-solid fa-graduation-cap"></i></div>
                                    <div class="col">
                                        <div class="row licence">Master's degree - Software Engineering, 2022-2024</div>
                                        <div class="row faculty">Faculty of Mathematics and Computer Science, Babes-Bolyai University</div>
                                    </div>
                                </ul>
                                <ul class="row">
                                    <div class="col-1"><i class="fa-solid fa-graduation-cap"></i></div>
                                    <div class="col">
                                        <div class="row licence">Bachelor's degree - Computer Science, 2019-2022</div>
                                        <div class="row faculty">Faculty of Mathematics and Computer Science, Babes-Bolyai University</div>
                                    </div>
                                </ul>
                            </div>
                        } 
                        icon={"fa-solid fa-school"}
                    />
                </div>
                <div class="col">
                    <Card 
                        title={"Work"} 
                        description={
                            <div class="container">
                                <ul class="row">
                                    <div class="col-1"><i class="fa-solid fa-spinner"></i></div>
                                    <div class="col">
                                        <div class="row licence">Software Developer, 2023-Present</div>
                                        <div class="row faculty">Microfocus</div>
                                    </div>
                                </ul>
                                <ul class="row">
                                    <div class="col-1"><i class="fa-solid fa-chalkboard-user"></i></div>
                                    <div class="col">
                                        <div class="row licence">Assistant Professor, 2024-Present</div>
                                        <div class="row faculty">Faculty of Mathematics and Computer Science, Babes-Bolyai University</div>
                                    </div>
                                </ul>
                            </div>
                        } 
                        icon={"fa-solid fa-briefcase"}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;