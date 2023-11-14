const mongoose = require('mongoose');
const Product = require('./Models/Product');



let products = [
    {
        category : 'Gadgets',
        name : 'iPad Pro',
        price : '120000',
        img : 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    },
    {
        category : 'Gadgets',
        name : 'iPhone 15',
        price : '80000',
        img : 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'Macbook',
        price : '200000',
        img : 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'Air Pods',
        price : '30000',
        img : 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'iWatch',
        price : '40000',
        img : 'https://images.unsplash.com/photo-1600948891299-30a7f822e6d8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXdhdGNofGVufDB8fDB8fHww',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'Playstation 5',
        price : '50000',
        img : 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'Xbox one',
        price : '50000',
        img : 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveHxlbnwwfHwwfHx8MA%3D%3D',
        desc : 'This is a dummy text',
        reviews : [],
        author : "653ca6c5f3eb04f593e494fa"
    }, 
    {
        category : 'Gadgets',
        name : 'Alexa',
        price : '12000',
        img : 'https://images.unsplash.com/photo-1583505093722-15596e9ada6f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxleGF8ZW58MHx8MHx8fDA%3D',
        desc : 'This is a dummy text',
        reviews : [],
        author :  "653ca6c5f3eb04f593e494fa"
    }, 


]



async function seedDB()
{
    await Product.insertMany(products);
    console.log("DB Seeded!")
}



module.exports = seedDB;