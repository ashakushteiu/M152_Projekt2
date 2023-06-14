<template>
  <div class="edit-dream">
    <h1>Edit Dream</h1>
    <form @submit.prevent="updateDream">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="updatedDream.title" required>
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="updatedDream.date" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="updatedDream.description" required></textarea>
      </div>
      <div class="button-holder">
        <button type="button" @click="cancelEdit">Cancel</button>
        <button type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditDream',
  data() {
    return {
      dreamId: null,
      updatedDream: {
        title: '',
        date: '',
        description: '',
      },
    };
  },
  created() {
    this.dreamId = this.$route.params.id;
    this.getDreamDetails();
  },
  methods: {
    getDreamDetails() {
      const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      const dreamIdNumber = parseInt(this.dreamId);
      const dream = dreams.find(dream => dream.id === dreamIdNumber);

      if (dream) {
        this.updatedDream = dream;
      } else {
        console.error(`Dream with ID ${this.dreamId} not found.`);
      }
    },
    updateDream() {
      const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      const dreamIdNumber = parseInt(this.dreamId);
      const dreamIndex = dreams.findIndex(dream => dream.id === dreamIdNumber);

      if (dreamIndex !== -1) {
        // Aktualisiere die Dream-Daten
        dreams[dreamIndex].title = this.updatedDream.title;
        dreams[dreamIndex].date = this.updatedDream.date;
        dreams[dreamIndex].description = this.updatedDream.description;
        // Speichere die aktualisierten Dreams im LocalStorage
        localStorage.setItem('dreams', JSON.stringify(dreams));
        console.log('Dream updated:', dreams[dreamIndex]);
      }
      // Navigiere zurück zur DreamDetails-Seite
      this.$router.push('/dreams/' + this.dreamId);
    },
    cancelEdit() {
      this.$router.push('/dreams');
    },
  },
};
</script>

<style scoped>
.edit-dream {
  text-align: center;
  margin-top: 20px;
}

div {
  width: 100%;
  max-width: 300px;
  margin: 0 auto 20px;
}
</style>
