var currentPage = 1;

const prevButton = document.getElementById("prev");

const nextButton = document.getElementById("next");


const fetchFirstPage = () => {
    const Ep_API = `https://rickandmortyapi.com/api/episode?page=${currentPage}`;
    axios
        .get(Ep_API)
        .then(response => {
            lastPage = response.data.info.pages;
            episodes = response?.data.results
            let output = "";
            for (let ep of episodes) {
                output += `
                <div class="character-card">
                    <div class="image-wrapper">
                        <img src="../../images/Rick--Morty-Season-6EWKSF-feature.avif" alt="${location?.name}">
                    </div>
                    <div class="content-wrapper">
                        <div class="sub-section1">
                            <span class="text-gray text-padding">Name:</span>
                            <a href="https://rickandmortyapi.com/api/character/${ep?.id}" rel="noopener noreferrer" target="_blank">
                                <h2 class="name">${ep?.name}</h2>
                            </a>
                        </div>
                        <div class="sub-section2">
                            <span class="text-gray text-padding">Airdate:</span>
                            <a href="#" rel="noopener noreferrer" target="_blank">${ep?.air_date}</a>
                        </div>
                        <div class="sub-section3">
                            <span class="text-gray text-padding">Episodes:</span>
                            <a href="#" target="_blank">${ep?.episode}</a>
                        </div>
                        <div class="sub-section3 last">
                            <span class="text-gray text-padding">Characters:</span>
                            <a href="#" target="_blank">${ep?.characters?.length}</a>
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

prevButton.addEventListener("click",() => {
    if(currentPage == 1){
        return;
    }
    currentPage--;
    fetchFirstPage()
})

nextButton.addEventListener("click",() => {
    if(currentPage == lastPage) {
        return;
    }
    currentPage++;
    fetchFirstPage()
})


// const navNewTab = (character) => {
//     const characterListString = JSON.stringify(character);
//     localStorage.setItem('characters', characterListString);
//     onclick = 'window.location.href = "${ep?.characters}"' 
//     console.log(character);

// }

// const characterList = {ep?.characters};
//     console.log(characterList);

//     console.log(localStorage);

    

// const myObject = { hello: 'world' };
// // console.log(myObject);
// const myObjectString = JSON.stringify(myObject);
// // console.log(myObjectString);
// localStorage.setItem('objectGreeting', myObjectString);
// // console.log(localStorage);
