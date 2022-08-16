console.log("Script conectado correctamente")

// https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

const random = (a, b) => {
    return 0.5 - Math.random();
}

const createCard = (element) => {
    return `
    <div class="card-box card-box-hover">
    <img src="${element.image}" alt="img - ${element.name}">
    <h3>${element.name}</h3>
    <p>${element.description}</p>
    <a href="./pages/${element.name}.html">Learn more</a>
    </div>
`
}

const card = document.getElementById("cards-projects");


const fectAPI = async () => {
    try {

        const data = await fetch(API_URL)
        return await data.json()

    } catch (error) {
        return []
    }
}


const appGlobal = async () => {
    card.innerHTML = "";
    const result = await fectAPI();
    const randomCard = result.sort(random);

    randomCard.slice(-3).forEach(element => {
        card.innerHTML += createCard(element)
    });

}

appGlobal()

