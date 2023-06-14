<template>
  <div class="add-dream">
    <h1>Add a Dream</h1>
    <form @submit.prevent="submitDream">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="dream.title" required>
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="dream.date" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="dream.description" required></textarea>
      </div>
      <div class="button-holder">
        <button type="button" @click="cancelAdd">Cancel</button>
        <button type="submit">Add Dream</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dream: {
        id: null,
        title: '',
        date: '',
        description: '',
      },
    };
  },
  methods: {
    submitDream() {
      // Generieren einer eindeutigen ID
      const dreamId = Date.now();
      
      // Aktualisieren der Dream-Eigenschaft mit der generierten ID
      this.dream.id = dreamId;

      // Speichern der Daten im LocalStorage
      const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      dreams.push(this.dream);
      localStorage.setItem('dreams', JSON.stringify(dreams));
      
      this.$router.push('/dreams');
    },
    cancelAdd() {
      this.$router.push('/dreams');
    },
  },
};
</script>

<style scoped>
.add-dream {
  text-align: center;
  margin-top: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

div {
  width: 100%;
  max-width: 300px;
  margin: 0 auto 20px;
}
</style>
