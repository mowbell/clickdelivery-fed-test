

import { IComment } from "./dto/Comment";
import { IUser } from "./dto/User";
import { IPost } from "./dto/Post";

export let statuses: IPost[] = [    
    { 
        message:"Post mensaje número 1",
        user:{
            nombre:"Suzana",
            apellido:"Manrique"
        } as IUser, 
        comments:[
            {
                message:"Comentario 1 Comentario 1 Comentario 1 Comentario 1 Comentario 1 ",
                date:new Date(),
                user:{
                    nombre:"Orlando",
                    apellido:"Martinez"
                } as IUser
            } as IComment,
            {
                message:"Comentario 2 Comentario 2 Comentario 2 Comentario 2 Comentario 2 ",
                date:new Date(),
                user:{
                    nombre:"Alfredo",
                    apellido:"Polo"
                } as IUser
            } as IComment,
            {
                message:"Comentario 3 Comentario 3 Comentario 3 Comentario 3 Comentario 3 ",
                date:new Date(),
                user:{
                    nombre:"Antonio",
                    apellido:"Armas"
                } as IUser
            } as IComment
        ] as IComment[], 
        date:new Date()  
    } as IPost,
    { 
        message:"Post mensaje número 2",
        user:{
            nombre:"Rolando",
            apellido:"Perez"
        } as IUser, 
        comments:[
            {
                message:"Comentario 1 Comentario 1 Comentario 1 Comentario 1 Comentario 1 ",
                date:new Date(),
                user:{
                    nombre:"Antonio",
                    apellido:"Bohorquez"
                } as IUser
            } as IComment,
            {
                message:"Comentario 2 Comentario 2 Comentario 2 Comentario 2 Comentario 2 ",
                date:new Date(),
                user:{
                    nombre:"Mariana",
                    apellido:"Lopez"
                } as IUser
            } as IComment
        ] as IComment[], 
        date:new Date()  
    } as IPost,
    { 
        message:"Post mensaje número 3",
        user:{
            nombre:"Mario",
            apellido:"Negrete"
        } as IUser, 
        comments:[
            {
                message:"Comentario 1 Comentario 1 Comentario 1 Comentario 1 Comentario 1 ",
                date:new Date(),
                user:{
                    nombre:"Miguel",
                    apellido:"Falcón"
                } as IUser
            } as IComment,
            {
                message:"Comentario 2 Comentario 2 Comentario 2 Comentario 2 Comentario 2 ",
                date:new Date(),
                user:{
                    nombre:"Rosa",
                    apellido:"Colmenares"
                } as IUser
            } as IComment,
            {
                message:"Comentario 3 Comentario 3 Comentario 3 Comentario 3 Comentario 3 ",
                date:new Date(),
                user:{
                    nombre:"Federico",
                    apellido:"Ballesteros"
                } as IUser
            } as IComment
        ] as IComment[], 
        date:new Date()  
    } as IPost
    
];



