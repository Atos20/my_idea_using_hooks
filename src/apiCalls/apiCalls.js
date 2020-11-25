export const getRandomQuote = async () => {
    const promise = await fetch('https://api.tronalddump.io/random/quote')
    if(promise.status === 200) {
        return promise.json()
    } else {
        return promise.error
    }
}

export const getAllTags= async () => {
    const promise = await fetch('https://api.tronalddump.io/tag')
    if(promise.status === 200) {
        return promise.json()
    } else {
        return promise.error
    }
}
export const getRandomMeme= async () => {
    const promise = await fetch('https://api.tronalddump.io/random/meme')
    if(promise.status === 200) {
        return await promise.blob()
    } else {
        return promise.error
    }
}

