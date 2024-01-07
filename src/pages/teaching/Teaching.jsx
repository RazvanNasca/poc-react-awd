import Card from "../../components/card/Card";

import "./Teaching.css";

const Teaching = () => {
    
    return (
        <div class="wrapper-container">
            <div class="container">
                <h1>Teaching</h1>
                <div class="row">
                    <div class="col">
                        <Card 
                            title={"Web Programming"} 
                            description={
                                <div class="container">
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-list"></i></div>
                                        <div class="col">
                                            <div class="row licence">Bachelor, 3rd Year, Semester: 1st, Computer Science</div>
                                            <div class="row faculty">Specialisation</div>
                                        </div>
                                    </ul>
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-user-tie"></i></div>
                                        <div class="col">
                                            <div class="row licence">Lect. Dr. Bufnea Darius-Vasile</div>
                                            <div class="row faculty">The course teacher</div>
                                        </div>
                                    </ul>
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-people-group"></i></div>
                                        <div class="col">
                                            <div class="row licence">4th3al2</div>
                                            <div class="row faculty">Microsoft Teams Code</div>
                                        </div>
                                    </ul>
                                </div>
                            } 
                            icon={"fa-brands fa-html5"}
                            button_text={"More info"}
                            button_link={"https://www.cs.ubbcluj.ro/files/curricula/2023/syllabus/IR_sem4_MLR5015_ro_bufny_2023_7665.pdf"}
                        />
                    </div>
                    <div class="col">
                        <Card 
                            title={"Service Oriented Architecture"} 
                            description={
                                <div class="container">
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-list"></i></div>
                                        <div class="col">
                                            <div class="row licence">Masters', 2rd Year, Semester: 1st, Software Engineering</div>
                                            <div class="row faculty">Specialisation</div>
                                        </div>
                                    </ul>
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-user-tie"></i></div>
                                        <div class="col">
                                            <div class="row licence">Lect. Dr. Ioan Lazăr</div>
                                            <div class="row faculty">The course teacher</div>
                                        </div>
                                    </ul>
                                    <ul class="row">
                                        <div class="col-1 icons"><i class="fa-solid fa-people-group"></i></div>
                                        <div class="col">
                                            <div class="row licence">8gbq3kn</div>
                                            <div class="row faculty">Microsoft Teams Code</div>
                                        </div>
                                    </ul>
                                </div>
                            } 
                            icon={"fa-solid fa-sitemap"}
                            button_text={"More info"}
                            button_link={"https://www.cs.ubbcluj.ro/files/curricula/2023/syllabus/IS_sem3_MME8027_en_ilazar_2023_7726.pdf"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;