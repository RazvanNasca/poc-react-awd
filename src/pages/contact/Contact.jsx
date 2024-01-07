import Card from '../../components/card/Card';

import "./Contact.css";

const Contact = () => {
    
    return (
        <div class="wrapper-container">
           <div class="container">
             <div class="row">
                <div class="col">
                    <Card title={"Email"} description={"razvan.nasca[at]stud.ubbcluj.ro"} button_text={"Send me an email"} button_link={"mailto:razvan.nasca@stud.ubbcluj.ro"} icon={"fa-solid fa-envelope"}/>
                </div>
                <div class="col">
                    <Card title={"Office"} description={"Teodor Mihali Street No.58-60, 400591, Cluj Napoca, Romania"} icon={"fa-solid fa-location-dot"}/>
                </div>
                <div class="col">
                    <Card 
                        title={"Links"} 
                        description={
                            <div class="container">
                                <div class="col"><a href="https://www.cs.ubbcluj.ro/" target='_blank'>Faculty</a></div>
                                <div class="col"><a href="https://www.cs.ubbcluj.ro/files/orar/2023-1/" target='_blank'>Timetable</a></div>
                            </div>
                        } 
                        icon={"fa-solid fa-link"}
                    />
                </div>
             </div>
            </div> 
        </div>
    );
};

export default Contact;