const getPromisePuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('No puzzle found')
    }
}

const getCountry = async (countryCode) => {
    const response =  await fetch(`https://restcountries.com/v3.1/all`,{})
        if(response.status === 200) {
            const data = await response.json()
            country = data.find((country) => country.altSpellings[0] === countryCode)
            return country.name.official
            
        } else {
            throw new Error('No Country found')
        }
}


const getLocation = async () =>{
    const response = await fetch('https://ipinfo.io/json?token=bd4b56ec7393ce',{})
        if(response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to get location')
        }
}


const getCurrentCountry = async () => {
    const data = await getLocation()
    const country = await getCountry(data.country)
    return country

}