<template>
  <div class="remark">
    <div class="remark-details profile">
      <div class="imgprofile">
        <img class="imgprofile-image" :src="newcomment.profileImg" :alt="newcomment.author" />
      </div>
      <textarea class="textarea" name="" id="" cols="100" rows="7"></textarea>
    </div>
    <div class="post-btn">
      <div>
        <add-button label="Post Comment" color="success" />
        <add-button label="Clear" color="danger" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  newcomment: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.post-btn {
  display: grid;

  justify-content: end;
  gap: 10px;
  margin-top: 2px;
  button {
    padding: 5px 10px;
    margin-left: 10px;
  }
  .succes {
    background: #0da04f;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  .cancel {
    background: #fff;
    color: #da0e0e;

    border-radius: 5px;
  }
  .cancel:hover {
    background: #da0e0e;
    color: #fff;
  }
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
</style>
