<template>
  <div class="home">
    <div class="titelBild">
      <img :src="titleImage" alt="Title Image">
    </div>

    <h1>Welcome to the Dream Journal!</h1>
    <p>
      This is where you can keep track of your dreams and explore the world of your subconscious mind.
    </p>
    <router-link to="/dreams" class="btn">View Dreams</router-link>
    <router-link to="/add-dream" class="btn">Add a Dream</router-link>
  </div>
</template>

<script>
import TitleImage from '@/assets/dreams-titelbild.jpg';

export default {
  name: 'HomePage',
  data() {
    return {
      titleImage: TitleImage,
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

p {
  margin-bottom: 30px;
}
</style>
