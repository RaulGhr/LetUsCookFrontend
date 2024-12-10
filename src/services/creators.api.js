import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

var recipesDemo = [
    {
        Id: "1",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "2",
        Username: "Gordon Ramsay?",
        Img: "https://placedog.net/500/400",
    },
    {
        Id: "3",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "4",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "5",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "6",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },
    {
        Id: "7",
        Username: "Gordon Ramsay",
        Img: "https://dramscotland.co.uk/wp-content/uploads/2021/08/Gordon-Ramsay-.jpg",
    },

];

export const getCreatorsPreview = async () => {
  // return withLogs(axios.get(`${baseUrl}/creators`), 'getCreatorsPreview');


  return recipesDemo;
};
