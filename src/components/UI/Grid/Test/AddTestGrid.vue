<template>
    <div class="wrapper-autofill">
           <h2 class="heading-2">Правильный Грид LayOut 1</h2>
         
               <div class="grid-container grid-container-fill">
                   <div class="grid-container-element header ">Header</div>                   
                   <div class="grid-container-element sidebar">SideBar</div> 
                   <div class="grid-container-element contentblock ">
            
                   <div class="grid-container-element article ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dicta optio repellat fugit molestias debitis voluptatum ullam. Ab, omnis harum.</div>  
                   <div class="grid-container-element info ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit neque sunt alias quaerat ut pariatur, repudiandae, explicabo eaque repellat id numquam aspernatur ducimus? Exercitationem facere quo blanditiis voluptates corrupti?</div>     
                </div>     

                   <div class="grid-container-element footer ">Footer</div>  
             
               </div>
          
       </div>
   </template>
   
   <script setup>
   
   </script>
   
   <style lang="scss" scoped>
   .infoBlock{
    grid-column: articleBlock;

   }
   .article{
    grid-column: articleBlock;
   }
   .header{
    // координаты блока
    // блок header распологается в строке headerBlock
    grid-row: headerBlock; 
    // блок header распологается в колонках  от sidebar до  contentBlock
    grid-column: left-gutter / right-gutter ;
   }
 
   .sidebar{
    grid-row: bodyBlock;
    grid-column: sidebar ;
   }
   .contentblock{
    grid-row: bodyBlock;
    grid-column: contentBlock ;

    display: grid;
   
    grid-template-columns:
       [l-gutter] 1fr
      [articleBlock] 4fr 
      [infoBlock] 2fr 
      [r-gutter] 1fr;
    grid-column-gap: 2rem;
   }
   .footer{
    grid-row: footer;
    grid-column:  left-gutter / right-gutter ;
   }
 
   .grid-container {
       
       display: grid;
       background-color:#fff4e6;
    
       &-fill{
           /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
           grid-template-rows: repeat(4, 65px);
           grid-column-gap: 2rem;
           grid-row-gap: 1rem; */
      
           column-gap:5px ;
           row-gap: 1rem;
           // 2 строки
           grid-template-rows:
            [headerBlock] 100px
             [bodyBlock] auto
            [footer] 100px;
           grid-template-columns:
            [left-gutter]  1fr
             [sidebar] minmax(300px, 4fr)
             [contentBlock] minmax(300px, 8fr) 
             [rigth-gutter]  1fr ;          
             
          
      
       }
       &-element{
           background-color: #ffd8a8;
           border: 2px solid #ffa94d;
           border-radius: 5px;
         
     
           //color: #fff;
          
       }
   
      
   }
   </style>