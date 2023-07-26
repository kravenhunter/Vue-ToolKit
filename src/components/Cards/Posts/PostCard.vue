<template>
    
    <div class="post">
 
        <div class="intro">
                <div class="intro-img">
                    <img class="img-title" :src="post.img" :alt="post.name ">
                </div>
                
                <div class="type">
                    <p>{{ post.name }}</p>
                </div>    
                <div class="name">
                    <h4>{{post.title }}</h4>
                </div>  
                <div class="date">
                    <p>{{post.date }}</p>
                </div>  
                
                <div class="desk">
                    <p>{{ post.desctiption }}</p>
                </div>

        </div>
        <div class="profile">
                    <div class="imgprofile">
                        <img class="imgprofile-image" :src="post.profileImg" :alt="post.author ">
                    </div>
                   
                    <p>{{ post.author }}</p>
                </div>
    </div>
</template>

<script setup>
const props = defineProps({

    post:{
        type: Object,
        default: {}
        },
        bgColor:{
        type: String,
        default: '#2183a2'
        },

});

</script>

<style lang="scss" scoped>
.profile{
    display: flex;
    gap:10px;
    padding-left: 20px;
    padding-bottom: 20px;
    .imgprofile{
        width: 50px;
        height: 50px;

        &-image{        
         width: 100%;
        height: 100%;
        border-radius: 50px;
        object-fit: cover;
         
    }
    }
}

.post{
    font-family: sans-serif;
    background: #fff;
    box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
    transition:  .5s ease-in-out; // влючаем  переходы
    &:hover{
        // применяем переходы на конкретном эффекте
        // transform: translate(0, -20px);
            transform: translateY(20px);
        }

    h4{
        
        font-size: 25px;
        margin: 0;
        
    }
    h6{
        text-align: center;
        font-size: 22px;
        width: 100%;        
        margin: 0;
        padding-top: 10px;
    }


    
}
.type{
    p{
        margin-top: 5px;
        margin-bottom: 0;
        color: #ed9440;
        font-size: 18px;
        font-weight: bold;
    }
}
.date{
    p{
        margin-top: 5px;
        margin-bottom: 0;
        
       
    }
}
.intro { 
    padding: 1rem 1rem 2rem 1rem;
 
    display: grid;
     gap: 5px;
    justify-content: center;

    &-img{
        height: 250px;
    }
  .img-title{
         width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }
/*     img{
        

        } */
}
.fa{
    font-size: 27px;
    transition:  .4s; // влючаем  переходы
    &:hover{
        transform: scale(1.3);
        transition: .6s;
    }
}

.checked{
    color: #ff9f43;
}


</style>