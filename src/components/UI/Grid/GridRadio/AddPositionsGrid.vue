<template>
  <div class="positions">
    <h2 class="heading-2">Position Group</h2>
    <div class="check-box">
      <div class="line line_block">
        <p>Verticals position: {{ selectedVerticalRadioGrid }}</p>

        <div v-for="club in radioVerticalGrids" :key="club.id">
          <AddRadioVertButton :value="club.verticalStyle" :label="club.name" :id="club.id" name="vertical" v-model:value="selectedVerticalRadioGrid" />
        </div>
      </div>
      <div class="line line_block">
        <p>Horizontal position: {{ selectedHorizontRadioGrid }}</p>

        <div v-for="club in radioHorizontalGrids" :key="club.id">
          <AddRadioHorizontButton :horizontalPosition="club.horizontStyle" :label="club.name" :id="club.id" name="horizontal" @updateHorizont="check" />
        </div>
      </div>
      <div class="line line_block">
        <p>Max positions: {{ selectedMaxPosition }}</p>

        <div v-for="club in radidioMaxPositionGrids" :key="club.id">
          <AddRadioMaxPositionButton :selectedMaxPosition="club.horizontStyle" :label="club.name" :id="club.id" name="max" @updateMax="checkPos" />
        </div>
      </div>
    </div>

    <div class="wrapper-max">
      <div class="grid-positions">
        <div class="wrapper-max-element">Lorem ipsum dolor sit amet.</div>
        <div class="wrapper-max-element">Lorem ipsum dolor sit amet.</div>
        <div class="wrapper-max-element">Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AddRadioHorizontButton from "@/components/UI/Grid/GridRadio/AddRadioHorizontButton.vue";
import AddRadioMaxPositionButton from "@/components/UI/Grid/GridRadio/AddRadioMaxPositionButton.vue";
import AddRadioVertButton from "@/components/UI/Grid/GridRadio/AddRadioVertButton.vue";
import { ref } from "vue";

const radioVerticalGrids = ref([
  { name: "Child Vertical Start", id: "1", verticalStyle: "start", horizontStyle: "auto" },
  { name: "Child Vertical Center", id: "2", verticalStyle: "center", horizontStyle: "auto" },
  { name: "Child Vertical Ends", id: "3", verticalStyle: "end", horizontStyle: "auto" },
]);
const radioHorizontalGrids = ref([
  { name: "Child Horizontal Start", id: "4", verticalStyle: "auto", horizontStyle: "start" },
  { name: "Child Horizontal Center", id: "5", verticalStyle: "auto", horizontStyle: "center" },
  { name: "Child Horizontal Ends", id: "6", verticalStyle: "auto", horizontStyle: "end" },
]);
const radidioMaxPositionGrids = ref([
  { name: "Child Vertical Start", id: "7", verticalStyle: "start", horizontStyle: "start" },
  { name: "Child Vertical Center", id: "8", verticalStyle: "center", horizontStyle: "center" },
  { name: "Child Vertical Ends", id: "9", verticalStyle: "end", horizontStyle: "end" },
]);

const selectedVerticalRadioGrid = ref("auto");
const selectedHorizontRadioGrid = ref("auto");
const selectedMaxPosition = ref("auto");

const check = (val) => {
  selectedHorizontRadioGrid.value = val;
};

const checkPos = (val) => {
  selectedMaxPosition.value = val;
};
</script>

<style lang="scss" scoped>
.check-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.wrapper-max {
  background-color: #fff4e6;
  transition: 0.5s;
  &-element {
    background-color: #ffd8a8;
    border: 2px solid #ffa94d;
    border-radius: 5px;
    padding: 20px;
    transition: 0.5s;
  }
}

.grid-positions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: 180px;
  gap: 10px;
  &-element {
    background-color: #ffd8a8;
    border: 2px solid #ffa94d;
    border-radius: 5px;
    padding: 20px;
  }
  :nth-child(1) {
    align-self: v-bind(selectedVerticalRadioGrid);
  }
  :nth-child(2) {
    justify-self: v-bind(selectedHorizontRadioGrid);
  }
  :nth-child(3) {
    justify-self: v-bind(selectedMaxPosition);
    align-self: v-bind(selectedMaxPosition);
  }
  :nth-child(4) {
    justify-self: start;
  }
  :nth-child(5) {
    justify-self: center;
  }
  :nth-child(6) {
    justify-self: end;
  }
  :nth-child(7) {
    justify-self: start;
    align-self: start;
  }
  :nth-child(8) {
    justify-self: center;
    align-self: center;
  }
  :nth-child(9) {
    justify-self: end;
    align-self: end;
  }
}
</style>
