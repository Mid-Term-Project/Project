console.log("Script conectado correctamente")

// https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"



const fectAPI = async ()=>{
    try {

        const data = await fetch(API_URL)
        return await data.json()
        
    } catch (error) {
        return []
    }
}


const apppGlobal = async() =>{

    const result = await fectAPI()
    console.log(result)

}

apppGlobal()

