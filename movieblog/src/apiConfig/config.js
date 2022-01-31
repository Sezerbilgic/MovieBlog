const config = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ee680a3d6fafa9a71b31039cab18957b',
    originalImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,
    w500Image: (path) => `https://image.tmdb.org/t/p/w500/${path}` 
}

export default config;