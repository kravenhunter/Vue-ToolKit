<template>
  <div class="comment">
    <div class="intro">
      <div class="profile">
        <div class="imgprofile">
          <img class="imgprofile-image" :src="comment.profileImg" :alt="comment.author" />
        </div>
        <div class="details">
          <span class="name">{{ comment.author }}</span>
          <span class="date">Share publically - {{ comment.date }}</span>
        </div>
      </div>
      <div class="desk">
        <p>{{ comment.comment }}</p>
      </div>
      <div class="valuation">
        <div class="like cursor">
          <font-awesome-icon icon="fa-regular fa-thumbs-up" class="fa" />
          <span>Like</span>
        </div>
        <div class="like cursor">
          <font-awesome-icon icon="fa-regular fa-thumbs-down" class="fa" />
          <span>DisLike</span>
        </div>
        <div class="like cursor">
          <font-awesome-icon icon="fa-regular fa-commenting" class="fa" />
          <span @click="isReply">Reply</span>
        </div>
        <div class="like cursor">
          <font-awesome-icon icon="fa-regular fa-share-square" class="fa" />
          <span>Share</span>
        </div>
      </div>
    </div>
    <AddComments class="accrodion" v-if="reply" :newcomment="comment" />
  </div>
</template>
<script setup>
import { ref } from "vue";

import AddComments from "@/components/Comments/Variant-1/AddComments.vue";
const props = defineProps({
  comment: {
    type: Object,
    default: {},
  },
});

const reply = ref(false);
const isReply = () => {
  reply.value = !reply.value;
  console.log("reply.value", reply.value);
};
</script>

<style lang="scss" scoped>
.name {
  color: #007bff;
}
.cursor {
  cursor: pointer;
  :hover {
    color: blue;
  }
}
.textarea {
  resize: none;
}
.remark {
  padding: 15px;
  &-details {
    margin-bottom: 10px;
  }
}
.comment {
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
}
.details {
  display: grid;
  gap: 20px;
}
.valuation {
  display: flex;
  gap: 10px;
  .like span {
    margin-left: 5px;
    font-size: 15px;
  }
}

.desk {
  margin-top: 2px;
  margin-bottom: 20px;
}
.profile {
  display: flex;
  gap: 10px;

  span {
    display: block;
    font-weight: bold;
  }
  .imgprofile {
    width: 50px;
    height: 50px;

    &-image {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      object-fit: cover;
    }
  }
}
.date {
  color: darkgray;
}
.intro {
  padding: 1rem 1rem 2rem 1rem;

  display: grid;
  gap: 5px;

  &-img {
    height: 250px;
  }
  .img-title {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
}
.fa {
  transition: 0.4s;
  &:hover {
    transform: scale(1.3);
    transition: 0.6s;
  }
}

.post {
  font-family: sans-serif;
  background: #fff;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(20px);
  }

  h4 {
    font-size: 25px;
    margin: 0;
  }
  h6 {
    text-align: center;
    font-size: 22px;
    width: 100%;
    margin: 0;
    padding-top: 10px;
  }
}
.type {
  p {
    margin-top: 5px;
    margin-bottom: 0;
    color: #ed9440;
    font-size: 18px;
    font-weight: bold;
  }
}

.checked {
  color: #ff9f43;
}
</style>
