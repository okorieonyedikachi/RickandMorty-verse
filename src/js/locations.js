const Loc_API = "https://rickandmortyapi.com/api/location"
// let locations; 

// console.log(Loc_API);
const fetchPage = () => {
    axios
        .get(Loc_API)
        .then(response => {
            locations = response?.data?.results
            console.log(locations);
        })
}

fetchPage()