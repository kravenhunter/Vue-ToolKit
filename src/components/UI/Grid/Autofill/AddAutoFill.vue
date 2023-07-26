<template>
 <div class="wrapper-autofill">
        <h2 class="heading-2">Grid AutoFill Blocks</h2>
      
            <div class="grid-container grid-container-fill">
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div> 
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>     
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
                <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
            </div>
         <h2 class="heading-2">Grid AutoFill Blocks 2</h2>
      
      <div class="grid-container grid-container-fill2">
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div> 
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>     
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
          <div class="grid-container-element">Lorem ipsum dolor sit amet.</div>  
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.grid-container-fill2{
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

      
}
.grid-container {
    
    display: grid;
    gap:10px;
    transition: .5s ease-in-out;
    background-color:#fff4e6;

    &-element{
        background-color: #ffd8a8;
        border: 2px solid #ffa94d;
        border-radius: 5px;
        padding: 20px;
        transition: .5s;
        //color: #fff;
       
    }

    &-fill{
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        //для фона
        grid-template-rows: repeat(4, 65px);
        transition: .5s;
    }
   
}
</style>