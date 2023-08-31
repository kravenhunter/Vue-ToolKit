<script setup>
import { ref } from "vue";
const songs = ref([
  {
    artist: "Y2mate.mx",
    songName: "Brave",
    album: "images/album/musican_1.jpg",
    src2: "music/Y2mate.mx - Brave (320 kbps).mp3",
  },
  {
    artist: "Lorn",
    songName: "Acid Rain",
    album: "images/album/musican_2.jpg",
    src2: "src/assets/music/Lorn_–_ Acid_Rain.mp3",
  },
  {
    artist: "Nyanners",
    songName: "Nyans Not Hot",
    album: "images/album/musican_3.jpg",
    src2: "src/assets/music/Nyanners_-_Nyans_Not_Hot(uzimusic.ru).mp3",
  },
]);
const selectedSong = ref([
  {
    artist: "Y2mate.mx",
    songName: "Brave",
    album: "images/album/musican_1.jpg",
    src2: "music/Y2mate.mx - Brave (320 kbps).mp3",
  },
]);
const cerruen = ref(0);
const nextHandler = () => {
  cerruen.value = cerruen.value + 1 <= songs.value.length - 1 ? cerruen.value + 1 : 0;
  selectedSong.value = [];
  selectedSong.value.push({ ...songs.value[cerruen.value] });
};

const docState = ref("saved");
</script>
<template>
  <div class="wrapper">
    <div class="animate_list">
      <add-button title="next" color="dark" :enableSlot="true" @click="nextHandler"> Next Record </add-button>
      <div class="current_record">
        <TransitionGroup tag="ul" name="fade" class="container">
          <div v-for="item in selectedSong" class="block" :key="item">
            <h4>{{ item.artist }}</h4>
            <span>{{ item.songName }}</span>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <div class="other_list">
      <span style="margin-right: 20px">Click to cycle through states:</span>
      <div class="btn-container">
        <Transition name="slide-up">
          <button v-if="docState === 'saved'" @click="docState = 'edited'">Edit</button>
          <button v-else-if="docState === 'edited'" @click="docState = 'editing'">Save</button>
          <button v-else-if="docState === 'editing'" @click="docState = 'saved'">Cancel</button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.other_list {
  margin-top: 50px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.animate_list {
  display: flex;
  gap: 30px;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
