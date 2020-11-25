export const getRandomQuote = async () => {
    const promise = await fetch('https://api.tronalddump.io/random/quote')
    if(promise) {
        return promise.json()
    } else {
        return promise.error
    }
}


export const getAllTags= async () => {
    const promise = await fetch('https://api.tronalddump.io/tag')
    if(promise) {
        return promise.json()
    } else {
        return promise.error
    }
}

