import axios from 'axios';

const getGithubData = async (url) => {
    const rawData = await axios.get(url);
    console.log(rawData.data);
};

module.exports = getGithubData;