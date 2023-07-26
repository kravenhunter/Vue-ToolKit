<template>
    
          <div class="places">
              <img :src="image" :alt="name">
              <div class="intro">
                <h1>{{ name }}</h1>
                <p>{{ desk }}</p>
                <router-link
                class="btn"              
                to="#"
                >Read More</router-link>
              </div>
          </div>
  </template>
  
  <script setup>
const props = defineProps({

source: {
    type: String,
    reqired: true
},
name: {
    type: String,
    reqired: true
},
desk: {
    type: String,
    reqired: true
},
image:{
    type: String,
    reqired: true
},
});

  </script>
  
  <style lang="scss" scoped>
  .places{
    width: 280px;
    height: 360px;
    padding: 2rem 1rem;
    background: #fff;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
    transition:  0.5s ease-in-out;
  }
  .places:hover{
    transform: translateY(20px);
  }
  .places:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,176,155,0.5),rgba(150,201,61,1));
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }
  .places:hover:before{
    opacity: 1;
  }
  .places img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top:0 ;
    left: 0;   
  }
  .places .intro{
    position: relative;
    z-index: 3;
    color: #fff;
    transition: 0.5s all;
    transform:  translateY(30px);
    opacity: 0;
  }
    .places:hover .intro{
        opacity: 1;
        transform:  translateY(0px);
    }
    .places .intro h1{
            margin: 0;
    }
    .places .intro p{
        letter-spacing: 1px;
        font-size: 15px;
        margin-top: 8px;
        margin-bottom: 20px;
    }
    .places .intro .btn{
        text-decoration: none;
        padding: 0.5rem 1rem;
        background: #fff;
        color:black;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
    .places .intro .btn:hover{
        box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
    }
  </style>