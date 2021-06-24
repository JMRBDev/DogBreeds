import axios from 'axios';

const breedsService = {
    listAllBreeds: async () => {
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/list/all');

            return res.data.message;
        } catch (err) {
            return {error: err.message};
        }
    },

    listImages: async (breed, subBreed) => {
        try {
            const res = await axios.get(`https://dog.ceo/api/breed/${breed}${subBreed ? `/${subBreed}` : ''}/images`);

            return res.data.message;
        } catch (err) {
            return {error: err.message};
        }
    }
};

export default breedsService;