import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

var recipesDemo = [
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },

];

export const getCreatorsPreview = async () => {
  // return withLogs(axios.get(`${baseUrl}/creators`), 'getCreatorsPreview');


  return recipesDemo;
};
