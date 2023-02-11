const Loc_API = "https://rickandmortyapi.com/api/location"

// console.log(CHARS_API);
// let character;


const fetchFirstPage = () => {
    axios
        .get(Loc_API)
        .then(response => {
            locations = response?.data.results
            console.log(locations);
            let output = "";
            for (let location of locations) {
                output += `
                <div class="character-card">
                    <div class="image-wrapper">
                        <img src="../../images/Rick--Morty-Season-6EWKSF-feature.avif" alt="${location?.name}">
                    </div>
                    <div class="content-wrapper">
                        <div class="sub-section1">
                            <span class="text-gray text-padding">Name:</span>
                            <a href="https://rickandmortyapi.com/api/character/${location?.id}" rel="noopener noreferrer" target="_blank">
                                <h2 class="name">${location?.name}</h2>
                            </a>
                        </div>
                        <div class="sub-section2">
                            <span class="text-gray text-padding">Type:</span>
                            <a href="#" rel="noopener noreferrer" target="_blank">${location?.type}</a>
                        </div>
                        <div class="sub-section3">
                            <span class="text-gray text-padding">Dimension:</span>
                            <a href="#" target="_blank">${location?.dimension}</a>
                        </div>
                        <div class="sub-section3 last">
                            <span class="text-gray text-padding">Residents:</span>
                            <a href="#" target="_blank">${location?.residents?.length}</a>
                        </div>
                    </div>
                </div>
                `
            }

        document.getElementById("charContainer").innerHTML = output; 

        })
        .catch (error => console.error(error))
}

fetchFirstPage()