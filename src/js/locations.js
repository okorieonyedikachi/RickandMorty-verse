const Loc_API = "https://rickandmortyapi.com/api/location"


// console.log(Loc_API);
const fetchPage = () => {
    axios
        .get(Loc_API)
        .then(response => {
            locations = response?.data?.results
            // console.log(locations);
            let output = "";
            for (let location of locations) {
                output += `
                <div class="character-card">
                <div class="inner-section">
                    <div class="image-wrapper">
                        <img src="../../images/Rick--Morty-Season-6EWKSF-feature.avif"/>
                    </div>
                    <div class="content-wrapper">
                        <div class="sub-wrapper">
                            <div class="sub-section">
                                <span>Name:</span>
                                <h2><a href="#">${location?.name}</h2></a>
                            </div>
                            <div class="sub-section">
                                <span>Type:</span>
                                <h2><a href="#" rel="noopener">${location?.type}</h2></a>
                            </div>
                            <div class="sub-section ">
                                <span>Dimension:</span>
                                <h2>${location?.dimension}</h2>
                            </div>
                            <div class="sub-section sub3">
                                <span>Residents:</span>
                                <h2 id="c-list"><a href="#">${location?.residents?.length}</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                `
            }

        document.getElementById("charContainer").innerHTML = output;     
        
        })
        .catch (error => console.error(error))

}

fetchPage()