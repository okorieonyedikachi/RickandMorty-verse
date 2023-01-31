const Ep_API = "https://rickandmortyapi.com/api/episode"



// console.log(Ep_API); 

const fetchFirstPage = () => {
    axios
        .get(Ep_API)
        .then(response => {
            episodes = response?.data.results
            // console.log(episodes);
            let output = "";
            for (let ep of episodes) {
                output += `
                <div class="character-card">
                    <div class="inner-section">
                        <div class="image-wrapper">
                            <img src="/Users/cosmasdaniella/Documents/Everything code/RickandMorty-verse/Rick--Morty-Season-6EWKSF-feature.avif"/>
                        </div>
                        <div class="content-wrapper">
                            <div class="sub-section">
                                <span>Name:</span>
                                <h2>${ep?.name}</h2>
                            </div>
                            <div class="sub-section">
                                <span>Airdate:</span>
                                <h2>${ep?.air_date}</h2>
                            </div>
                            <div class="sub-section">
                                <span>Episode:</span>
                                <h2>${ep?.episode}</h2>
                            </div>
                            <div class="sub-section">
                                <span>Characters:</span>
                                <h2 id="c-list"><a href="${ep?.characters}">${ep?.characters?.length}</a></h2>
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

fetchFirstPage()

const navNewTab = (character) => {
    const characterListString = JSON.stringify(character);
    localStorage.setItem('characters', characterListString);
    onclick = 'window.location.href = "${ep?.characters}"' 
    console.log(character);

}

// const characterList = {ep?.characters};
//     console.log(characterList);

//     console.log(localStorage);

    

// const myObject = { hello: 'world' };
// // console.log(myObject);
// const myObjectString = JSON.stringify(myObject);
// // console.log(myObjectString);
// localStorage.setItem('objectGreeting', myObjectString);
// // console.log(localStorage);

