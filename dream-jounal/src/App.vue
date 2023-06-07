<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dreams">Dreams</router-link>
      <router-link to="/add-dream">Add Dream</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'DreamJournal',
  components: {
  },
  data() {
    return {
      pageTitle: 'Dream Journal',
      dreams: []
    };
  },
  methods: {
    addDream(dream) {
      this.dreams.push(dream);
    }
  }
};
</script>

<style>
.dream-journal {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
