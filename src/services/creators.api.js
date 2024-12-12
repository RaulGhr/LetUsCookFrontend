import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

var creatorsDemo = [
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

export const getCreatorsPreview = async (search) => {

  const response = await axios.get(`${baseUrl}/users/filter?username=${search}`, config)

//   console.log("creatorsPreviewApi",response);
  

if (response.status === 200) {
    return response.data;
}
return [];
};


export const getUserPreview = async () => {

    // endpoint urile de pe backend o sa returneze un user cu id username profile picture si description
    var user = {
      Id: 1,
      Username: "JohnDoe",
      ProfilePicture: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Description: "Passionate home chef and food lover.",
    }
    return user;
}
  
  // avem endpoint de pe back cu following count 
  
export const getFollowingCount = async () => {
    const followingCount = 123;
    return followingCount;
}
  
  // avem endpoint de pe back cu followers count
  
export const getFollowersCount = async () => {
    const followersCount = 456;
    return followersCount;
}
  
export const getUserData = async () => {
  
    // am creat o entitate cu toate campurile


    const userPrev = await getUserPreview(); 
    const followersCount = await getFollowersCount(); 
    const followingCount = await getFollowingCount(); 

    const user = {
        Id: userPrev.Id,
        Description: userPrev.Description,
        ProfilePicture: userPrev.ProfilePicture,
        Username: userPrev.Username,
        FollowersCount: followersCount,
        FollowingCount: followingCount,
    };

    return user;
};
