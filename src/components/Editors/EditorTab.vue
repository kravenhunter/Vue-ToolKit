<script setup>
import AddEditor from "@/components/Editors/AddEditor.vue";
import AddButton from "@/components/UI/AddButton.vue";
import { reactive, ref } from "vue";

const state = reactive({
  title: "aerferf",
  author: "raegagae",
  category: "garegaerg",
  image: "asarga",
  shortBody: "asgarg",
  body: `Customer Engagement rapid proliferation of smart technologies has impacted every business, no matter its size. In all this event customer engagement has drastically changed due to digital transformation. Most businesses now interact with customers differently from they earlier. However, the changes have been for the better.
Aquestion that the motley team of football writers from India, who travel to cover the Fifa World Cup, often face is: does their country really play football?The element of surprise is not unexpected. Despite its reputation as a huge market for football tourism, India has not been able to shed its tag of being a cricket-crazy nation.`,
  date: 0,
});

const contentBox = ref();
//
const submitForm = (event) => {
  //   console.log(contentBox.value);
  console.log(state.body);
};
</script>
<template>
  <div class="add_post">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title" style="font-weight: 600">Title</label>
        <input type="text" name="title" v-model="state.title" style="margin-left: 10px; height: 30px; background-color: transparent; color: black" />
      </div>
      <div class="form-group">
        <label for="author" style="font-weight: 600">author</label>
        <input type="text" name="author" v-model="state.author" style="margin-left: 10px; height: 30px; background-color: transparent; color: black" />
      </div>
      <div class="form-group">
        <label for="category" style="font-weight: 600">category</label>
        <input type="text" name="category" v-model="state.category" style="margin-left: 10px; height: 30px; background-color: transparent; color: black" />
      </div>
      <div class="form-group">
        <label for="image" style="font-weight: 600">image</label>
        <input type="text" name="image" v-model="state.image" style="margin-left: 10px; height: 30px; background-color: transparent; color: black" />
      </div>
      <div class="form-group">
        <label for="shortBody" style="font-weight: 600">shortBody</label>
        <input type="text" name="shortBody" v-model="state.shortBody" style="margin-left: 10px; height: 30px; background-color: transparent; color: black" />
      </div>
      <div class="form-group">
        <label for="body">body</label>
        <AddEditor name="editor" v-model="state.body" />
      </div>
      <AddButton type="submit" label="Add Post" font-size="16px" paddings="0.4em" style="width: 150px" color-bg="dark" />
    </form>

    <div class="content">
      <h3>Content</h3>

      <pre v-html="state.body"></pre>
    </div>
  </div>
</template>

<style scoped>
.content pre {
  white-space: pre-line;
}
</style>
