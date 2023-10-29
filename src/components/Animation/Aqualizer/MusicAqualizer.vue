<script setup>
import NextPlayIcon from "@/components/Icons/NextPlayIcon.vue";
import PauseIcon from "@/components/Icons/PauseIcon.vue";
import PlayIconInCirle from "@/components/Icons/PlayIconInCirle.vue";
import PrevPlayIcon from "@/components/Icons/PrevPlayIcon.vue";
import { computed, onMounted, ref } from "vue";
// import PlayIconInCirle from "../../../assets/music/";
const songs = [
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
];
const selectedSong = ref([
  {
    artist: "Y2mate.mx",
    songName: "Brave",
    album: "images/album/musican_1.jpg",
    src2: "music/Y2mate.mx - Brave (320 kbps).mp3",
  },
]);
const player = new Audio();
const currentSongObject = ref(null);

const previosSong = ref(null);
const currentIndex = ref(0);
const isPlay = ref(false);
const audioPlayer = ref({});

const duration = ref("0:00");
const correntTime = ref("0:00");
const isSpinNext = ref(false);
const isSpinBack = ref(false);
const playPromise = ref(null);

const isPlaying = ref(false);

const propgresBar = ref(0);

const prevExisted = computed(() => !!songs[currentIndex.value - 1]);
const nextExisted = computed(() => !!songs[currentIndex.value + 1]);

const timeConvert = (timeNum) => {
  const totalMin = Math.floor(timeNum / 60);
  let totalSec = Math.floor(timeNum % 60);
  totalSec < 10 && (totalSec = `0${totalSec}`);

  return `${totalMin}:${totalSec}`;
};
const onPlaying = (e) => {
  // console.log(e.target?.currentTime);
  console.log(e);
  propgresBar.value = `${(e.target?.currentTime / e.target?.duration) * 100}%`;
  correntTime.value = timeConvert(e.target?.currentTime);
};

const initializeSong = () => {
  resetData();

  currentSongObject.value = songs[currentIndex.value];

  audioPlayer.value.src = currentSongObject.value?.src2;
  audioPlayer.value.onloadedmetadata = () => {
    correntTime.value = timeConvert(audioPlayer.value.currentTime);
    duration.value = timeConvert(audioPlayer.value.duration);
  };
  setTimeout(() => (previosSong.value = currentSongObject.value), 500);
};
const resetData = () => {
  propgresBar.value = "0%";

  correntTime.value = "0:00";
  duration.value = "0:00";
  isPlay.value = true;
};
const getSong = () => {
  propgresBar.value = "0%";
  audioPlayer.value.onloadedmetadata = () => {
    propgresBar.value = "0%";
    correntTime.value = timeConvert(audioPlayer.value.currentTime);
    duration.value = timeConvert(audioPlayer.value.duration);
  };
  return !!currentSongObject.value;
};
const play = (val) => {
  isPlaying.value = val;

  isPlaying.value &&
    (playPromise.value = audioPlayer.value.play().then(() => {
      isPlay.value = !isPlay.value;
    }));
  console.log("audioPlayer.value.onloadedmetadata", audioPlayer.value.onloadedmetadata);
  !isPlaying.value &&
    playPromise.value &&
    playPromise.value.then(() => {
      audioPlayer.value.pause();
      console.log(audioPlayer.value);
      isPlay.value = !isPlay.value;
    });
};

const prev = () => {
  currentIndex.value = currentIndex.value - 1;
  isSpinBack.value = !isSpinBack.value; // true
  initializeSong();

  // play();
  setTimeout(() => (isSpinBack.value = false), 1500);
};

const next = () => {
  currentIndex.value = currentIndex.value + 1;
  isSpinNext.value = !isSpinNext.value; // true
  initializeSong();
  //play(true);
  setTimeout(() => (isSpinNext.value = false), 1500);
};

onMounted(() => {
  initializeSong();
});
</script>
<template>
  <div class="aqualizer_block" v-if="currentSongObject">
    <audio id="player" preload="none" ref="audioPlayer" @timeupdate="onPlaying" :src="currentSongObject.src2"></audio>
    <div class="album_block">
      <img :class="{ spin_next: isSpinNext, spin_back: isSpinBack }" :src="previosSong?.album" :alt="previosSong?.songName" />
      <span></span>
    </div>
    <div class="aqualizer_wrapper">
      <div class="title_block">
        <div class="name_block">
          <ul class="title_song" v-for="(el, i) in songs" :key="i">
            <Transition name="slide-up">
              <li v-if="el.artist == currentSongObject.artist">
                <h4>{{ el.artist }}</h4>
                <span>{{ el.songName }}</span>
              </li>
            </Transition>
          </ul>
        </div>

        <div class="progress_block">
          <span class="current">{{ correntTime }}</span>
          <div class="progress_area">
            <div class="progress_bar"></div>
          </div>
          <span class="current">{{ duration }}</span>
        </div>
      </div>
      <div class="aqualizer">
        <div class="prev_block">
          <add-button title="Profile" color="default" :enableSlot="true" @click="prev" :disabled="!prevExisted">
            <PrevPlayIcon size="35" />
          </add-button>
        </div>
        <div class="play_block">
          <add-button v-if="isPlay" title="Profile" color="default" :enableSlot="true" @click="play(true)">
            <PlayIconInCirle size="40" />
          </add-button>
          <add-button v-else title="Profile" color="default" :enableSlot="true" @click="play(false)">
            <PauseIcon size="40" />
          </add-button>
        </div>
        <div class="next_block">
          <add-button title="Profile" color="default" :enableSlot="true" @click="next" :disabled="!nextExisted">
            <NextPlayIcon size="35" />
          </add-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aqualizer_block {
  max-width: 500px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 150px;
}
.aqualizer_block {
  & .aqualizer_wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 20%;

    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 15px 15px 15px 90px;
    display: grid;
  }
}

.title_block {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 15px;
  align-content: start;
  & span {
    font-size: 15px;
    font-style: italic;
  }
  & .name_block {
    position: relative;
    & ul {
      list-style: none;
    }
    & .title_song {
      position: absolute;
    }
  }
  & .progress_block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    & .progress_area {
      height: 6px;
      width: 70%;
      background-color: var(--color-grey);
      cursor: pointer;
      & .progress_bar {
        position: relative;
        height: 6px;
        width: v-bind(propgresBar);
        background-color: var(--danger);
      }
      & .progress_bar::before {
        content: "";
        position: absolute;
        height: 13px;
        width: 13px;
        background: var(--second);
        right: -5px;
        border-radius: 50%;
        transform: translateY(-26%);
      }
    }
  }
}

.aqualizer_wrapper {
  & .aqualizer {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
    column-gap: 50px;
    padding-right: 25px;
  }
}

.aqualizer_block {
  & .album_block {
    position: relative;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;

      &.spin_next {
        transition: all 1.4s;
        rotate: calc(720deg);
      }
      &.spin_back {
        transition: all 1.4s;
        rotate: calc(-720deg);
      }
    }
    & span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: aliceblue;
      border-radius: 50%;
    }
  }
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
</style>
