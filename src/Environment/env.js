export const getLinkToPosts = (count) => {
    return `https://api.unsplash.com/photos/?page=1&per_page=${count}&client_id=c53f8d1f0fad5f5502c97e66087d49c7a656d0a59774a2989dd17288f200adc5`
}

export const getLinkToSearchPosts = (searchKey, count) => {
    return `https://api.unsplash.com/search/photos/?page=1&per_page=${count}&query=${searchKey}&client_id=c53f8d1f0fad5f5502c97e66087d49c7a656d0a59774a2989dd17288f200adc5`
}

export const getLinkToRandomPost = () => {
    return `https://api.unsplash.com/photos/random/?page=1&per_page=1&&client_id=c53f8d1f0fad5f5502c97e66087d49c7a656d0a59774a2989dd17288f200adc5`
}

export const getDownloadLink = (id) => {
    return `https://unsplash.com/photos/${id}/download?force=true`
}

export const getLinkToPost = (id) => {
    return `https://api.unsplash.com/photos/${id}?page=1&per_page=100&&client_id=c53f8d1f0fad5f5502c97e66087d49c7a656d0a59774a2989dd17288f200adc5`
}