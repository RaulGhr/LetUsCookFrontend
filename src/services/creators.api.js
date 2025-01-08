import axios from 'axios';
import {withLogs, baseUrl, config, authConfig} from '../utils/api.utils';


export const getCreatorsPreview = async (search) => {

  const response = await axios.get(`${baseUrl}/users/filter?username=${search}`, config)

if (response.status === 200) {
    return response.data;
}
return [];
};


export const getUserPreview = async (user_id) => {

    const response = await axios.get(`${baseUrl}/users/filter?id=${user_id}`, config);
    return response.data;
}
  
  // avem endpoint de pe back cu following count 
  
export const getFollowingCount = async (user_id) => {
    const response = await axios.get(`${baseUrl}/user_follows/following_count/${user_id}`, config);
    return response.data.following_count;
}
  
  // avem endpoint de pe back cu followers count
  
export const getFollowersCount = async (user_id) => {
    const response = await axios.get(`${baseUrl}/user_follows/follower_count/${user_id}`, config);
    return response.data.follower_count;
}
  
export const getUserData = async (user_id = null, username= null) => {
  
    // am creat o entitate cu toate campurile

    var userPrev = null;
    if(user_id){
         userPrev = await getUserPreview(user_id); 
    }
    else if(username){
         userPrev = await getCreatorsPreview(username);
         userPrev = userPrev[0];
        //  console.log(userPrev);
         user_id = userPrev.id;
    }
    else{
        return null;
    }

    const followersCount = await getFollowersCount(user_id); 
    const followingCount = await getFollowingCount(user_id);
    // console.log(followersCount);
    // console.log(followingCount);
    // console.log(userPrev); 

    const user = {
        Id: userPrev.id,
        Description: userPrev.description,
        ProfilePicture: userPrev.profileImage,
        Username: userPrev.username,
        FollowersCount: followersCount,
        FollowingCount: followingCount,
    };

    return user;
};

export const isUserFollowing = async (user_id, token) => {
    // console.log("isFollowing",user_id, token);
    const response = await axios.get(`${baseUrl}/user_follows/is_following?user_id=${user_id}`, authConfig(token));
    return response.data.is_following;
}

export const followUser = async (user_id, token) => {
    const response = await axios.post(`${baseUrl}/user_follows/follow`, { "followed_user_id": user_id }, authConfig(token));
    return response.data;
}

export const unfollowUser = async (user_id, token) => {
    const response = await axios.post(`${baseUrl}/user_follows/unfollow`, { "followed_user_id": user_id }, authConfig(token));
    return response.data;
}
