<template>
  <div class="dreams">
    <h1>My Dreams</h1>
    <ul>
      <li v-for="dream in dreams" :key="dream.id">
        <router-link :to="'/dreams/' + dream.id">{{ dream.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DreamsPage',
  data() {
    return {
      dreams: [
        { id: 1, title: 'Dream 1' },
        { id: 2, title: 'Dream 2' },
        { id: 3, title: 'Dream 3' },
      ],
    };
  },
};
</script>

<style scoped>
.dreams {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin-bottom: 10px;
}

router-link {
  color: #4CAF50;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
