<template>
 <div class="wrap-test" >
  <div @scroll="scrolling" id="content">
    <p v-for="i in Array.from({length: 30}, (v, i) => i)">
      {{ i }}
    </p>
  </div>
  <div v-if="bottom">Uhuy! Sampai bawah</div>
</div> 
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  

  const bottom = ref(false)
  const mySCR = e => {
    console.log(window.scrollY);
  };

  const scrolling = (e) => {
       console.log(e);
    const clientHeight = e.target.clientHeight
    const scrollHeight = e.target.scrollHeight
    const scrollTop = e.target.scrollTop
    
		if (scrollTop + clientHeight >= scrollHeight) {
			bottom.value = true
    } else {
      bottom.value = false
    }
  }
  onMounted(() => {
   // window.addEventListener("scroll", mySCR )
   
  });
</script>
<style>
.wrap-test{
    height: 3000px;
    background: #d4caca;
}
  #content {
    height: 200px; 
    overflow: auto; 
    border: 1px solid red; 
    padding: 0 10px;
  }
</style>