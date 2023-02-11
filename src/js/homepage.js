var currentPage = 1;
var lastPage = 99;
let characters;

const thisYear = new Date().getFullYear()
document.getElementById("author").innerHTML = `
   ❮❯ by <a href="https://github.com/FoureyedVeen" target="_blank" class="footer-link">Cosmas Daniella</a> ${thisYear}
`;

const prevButton = document.getElementById("prev");

const nextButton = document.getElementById("next");

const isStatus = (status) => {
    switch (status) {
        case "Alive":
          return 'status-alive'

        case "Dead":
          return 'status-dead'
        
        case "Unknown":
            return 'status-unknown'
    
        default:
            return 'status-unknown'
    }
}
const fetchSixCharacters = () => {
    const SIX_CHARS_API = `https://rickandmortyapi.com/api/character?page=${currentPage}`
    axios
        .get(SIX_CHARS_API)
        .then(res => {
            lastPage = res.data.info.pages;
             characters = res?.data?.results;
             let output = "";
             for (let char of characters) {
                output += `
                <div class="character-card">
                    <div class="image-wrapper">
                        <img src="${char?.image}" alt="${char?.name}">
                    </div>
                    <div class="content-wrapper">
                        <div class="sub-section1">
                            <a href="https://rickandmortyapi.com/api/character/${char?.id}" rel="noopener noreferrer" target="_blank">
                                <h2 class="name">${char?.name}</h2>
                            </a>
                            <span class="status">
                                <span class="status-icon ${isStatus(char?.status)}"></span>
                                ${char?.status}
                                -
                                ${char?.species}
                            </span>
                        </div>
                        <div class="sub-section2">
                            <span class="text-gray text-padding">Last known location:</span>
                            <a href="${char?.location?.url}" rel="noopener noreferrer" target="_blank">${char?.location?.name}</a>
                        </div>
                        <div class="sub-section3">
                            <span class="text-gray text-padding">First seen in:</span>
                            <a href="${char?.origin?.url}" target="_blank">${char?.origin?.name}</a>
                        </div>
                    </div>
                </div>
                `
             }
        document.getElementById("charContainer").innerHTML = output;

        })
        .catch (error => console.error(error))
}


fetchSixCharacters()

prevButton.addEventListener("click",() => {
    // window.alert("clicked")
    if (currentPage == 1) {
        return;
    } 
    currentPage--;
    fetchSixCharacters()
})

nextButton.addEventListener("click",() => {
    if (currentPage == lastPage) {
        return;
    }
    currentPage++;
    fetchSixCharacters()
})

