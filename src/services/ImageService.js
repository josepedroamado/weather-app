import axios from 'axios';

const unsplashAPI = axios.create({
    baseURL: 'https://api.unsplash.com/'
});

const APIkey = "ENlTULy-zfdBF-IoPMJnZK1t7X98CauakiVlHi6HHuw";

export async function getImage(searchTerm) {
    try {
        var fetchedImage = await unsplashAPI.get(`search/photos?client_id=${APIkey}&query=${searchTerm}&page=1&per_page=1&orientation=landscape`).then(({ data }) => data);
        return fetchedImage.results[0].urls.regular;
    }
    catch (error) {
        console.error(error);
    }
}