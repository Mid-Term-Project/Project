console.log("Script conectado correctamente")

// https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

const random = (a, b) => {
    return 0.5 - Math.random();
}

const createHeroBanner = () => {
    return `
    <div class="container">
            <div class="row">
                <div class="col-6 text-align pr">
                    <h1>Empower Your Business With Stunning Design!</h1>
                    <p class="text">Circle is a digital design and development studio. We design and develop astonishing websites and mobile apps.</p>
                    <div class="button-wrapper">
                        <a href="#" class="btn-get-in-touch">Get in touch</a>
                        <a href="#" class="btn-see-our-work">See our work</a>
                    </div>
                </div>
                <div class="col-6">

                    <div id="images-hero">

                        <img class="img-fluid animated"  src="./images/hero-section/card-1.png" alt="card 1">
                        <img class="img-fluid animated"  src="./images/hero-section/card-2.png" alt="card 2">                
                        <img id="boy" src="./images/hero-section/hero-image.png" alt="Hero Img">
                        
                    </div>
                </div>
            </div>
        </div>
    `
}

const createCompanys = () => {
    return `
    <div class="client-logo">
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/airbnb-logo.svg" alt="AirBnB">
            </a>
           
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/google-logo.svg" alt="Google">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/microsoft-logo.svg" alt="Microsoft">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/fedex-logo.svg" alt="Fedex">
            </a>

            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/amazon-logo.svg" alt="Amazon">
            </a>
            
        </div>
    `
}


const createCard = ({image, name, description, content}) => {

    return `
    <div class="card-box card-box-hover">
    <img src="${image}" alt="img - ${name}">
    <h3>${name}</h3>
    <p>${description}</p>
    <a href="#navbar" onclick="generate('${image}','${name}','${description}','${content}')">Learn more</a>
    </div>
`
}

const createOpinions = () => {
    return `
    <div>
            <img src="../images/testimonial-section/memoji-1.png" alt="Blond girl memoji">
            <img src="../images/testimonial-section/memoji-2.png" alt="Man with hat memoji">
        </div>
        <div id="center">
            <h3>Hear What Our Clients Have to Say</h3>
            <p>"Circle helped us through very stage of our startup. <br>
                We really enjoyed working with you."</p>
            <div>   
                <img id="profilepic" src="../images/testimonial-section/profile.png" alt="Profile pic">
                <div>
                    <p id="name">Kristin Watson<p>
                    <p>Booking.com</p>
                </div>
            </div>
        </div>
        <div>
            <img src="../images/testimonial-section/memoji-3.png" alt="Bearb man memoji">
            <img src="../images/testimonial-section/memoji-4.png" alt="Party man memoji">
        </div>
    `
}

const createServices = () => {
    return `
    <h2>Our Services</h2>
        <div class="cards">
            <div class="card-box">
                <div class="svg">
                    <img src="./images/services-section/icons/1.svg" alt="img">
                </div>
                <h3>User Interface Design</h3>
                <p>Circle provides you with a stunning user interface design that is accessible to everyone.</p>
                <a href="#">Learn more</a>
            </div>

            <div class="card-box">
                <div class="svg">
                    <img src="./images/services-section/icons/2.svg" alt="img">
                </div>
                <h3>User Experience Design</h3>
                <p>Circle always focuses on delivering the best user experience to your customers.</p>
                <a href="#">Learn more</a>
            </div>

            <div class="card-box">
                <div class="svg">
                    <img src="./images/services-section/icons/3.svg" alt="img">
                </div>
                <h3>Application Development</h3>
                <p>We develop high-quality mobile and web applications using the latest technology stack.</p>
                <a href="#">Learn more</a>
            </div>
        </div>
    `
}

const createQuestions = () => {
    return `
    <h2>Do you have any questions?</h2>
        <p>Let us help you!</p>
        <form id="responsive-form">
            <fieldset class="input-form">
                <!-- <label class="text" for="email">Email:</label> -->
                <img id="image-nl" src="./images/newsletter/icon/mail.svg" alt="">
                <input id="icon" class="inputWidth" type="email" placeholder="Enter your email">
            </fieldset>
                <input class="btn-submit btn-get-in-touch" type="submit" value="Submit" placeholder="Subcribe">

        </form>
    `
}

const createPageProject = (image, name, description, content) => {
    return `
    <h1>${name}</h1>
        <div>
            <p>${description}</p>
            <p>Completed on June 22, 2021</p>
        </div>
        <img id="imageback" alt="">
        <img src="${image}" alt="">
        <p id = "projectsText">
                ${content}
        </p>
    `
}

const spa = document.getElementById("spa");
const heroBanner = document.getElementById("hero-banner");
const companys = document.getElementById("companys");
const projects = document.getElementById("projects");
const card = document.getElementById("cards-projects");
const opinions = document.getElementById("opinions");
const services = document.getElementById("services");
const questions = document.getElementById("questions");


const fectAPI = async () => {
    try {

        const data = await fetch(API_URL)
        return await data.json()

    } catch (error) {
        return []
    }
}


const generate = async (image, name, description, content) => {
    spa.innerHTML = "";

    const pageProject = document.createElement("section");
    pageProject.setAttribute("id", "simplify");
    spa.appendChild(pageProject);
    simplify.innerHTML = createPageProject(image, name, description, content);

    const pageProjectList = document.createElement("section");
    pageProjectList.setAttribute("id", "projects");
    spa.appendChild(pageProjectList);
    const h2 = document.createElement("h2")
    const divCardProjects = document.createElement("div");
    h2.innerText = "Other Projects";
    divCardProjects.setAttribute("id","cards-projects");
    divCardProjects.className = "cards";
    const result = await fectAPI();
    result.filter(element => element.name !== name).slice(-3).forEach(element => {
        divCardProjects.innerHTML += createCard(element);
    });
    pageProjectList.appendChild(h2);
    pageProjectList.appendChild(divCardProjects);

    const pageProjectQuestion = document.createElement("section");
    pageProjectQuestion.setAttribute("id", "questions")
    spa.appendChild(pageProjectQuestion);
    pageProjectQuestion.innerHTML = createQuestions();
}



const appGlobal = async () => {
    card.innerHTML = "";
    heroBanner.innerHTML = createHeroBanner();
    companys.innerHTML = createCompanys();
    
    const result = await fectAPI();
    const randomCard = result.sort(random);

    randomCard.slice(-3).forEach(element => {
        card.innerHTML += createCard(element);
    });

    opinions.innerHTML = createOpinions();
    services.innerHTML = createServices();
    questions.innerHTML =createQuestions();

}

appGlobal()

