import axios from 'axios';
import {withLogs, baseUrl, config} from '../utils/api.utils';

export const getRecipesPreview = async () => {
    // return withLogs(axios.get(`${baseUrl}/recipes`), 'getRecipesPreview');
    const recipes = [
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
        {
            Title: "Recepie 2",
            Img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "5",
            PrepTime: "15"
        },
        {
            Title: "Recepie 1",
            Img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            IngredinetsNumber: "7",
            PrepTime: "20"
        },
    ];

    return recipes;
};