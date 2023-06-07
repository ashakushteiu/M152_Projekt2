<template>
  <div>
    <h2>Add Dream</h2>
    <form @submit.prevent="addDream">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="newDream.title">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DreamForm',
  data() {
    return {
      newDream: {
        title: '',
      },
    };
  },
  methods: {
    addDream() {
      // Hier kannst du die Logik zum Hinzufügen des Traums implementieren
      console.log('Dream added:', this.newDream);
      // Zum Zurücksetzen des Formulars
      this.newDream.title = '';
    },
  },
};
</script>
