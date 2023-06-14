<template>
  <div class="dreams">
    <h1>My Dreams</h1>
    <div class="dreams-list" v-if="dreams.length > 0">
      <div v-for="dream in dreams" :key="dream.id">
        <h3>{{ dream.title }}</h3>
        <p>{{ dream.description }}</p>
        <router-link class="btn" :to="'/edit-dream/' + dream.id" style="grid-area: 1/2/span 2/span 1;"><i class="fa-solid fa-pen"></i></router-link>
        <router-link class="btn" :to="'/dreams/' + dream.id" style="grid-area: 1/3/span 2/span 1;"><i class="fa-solid fa-magnifying-glass"></i></router-link>
        <button type="button" class="btn deleteBtn" @click="deleteDream(dream.id)" style="grid-area: 1/4/span 2/span 1;"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <p v-else>No dreams found.</p>
  </div>
</template>

<script>
export default {
  name: 'DreamsPage',
  data() {
    return {
      dreams: [],
    };
  },
  created() {
    const storedDreams = localStorage.getItem('dreams');
    if (storedDreams) {
      this.dreams = JSON.parse(storedDreams);
    }
  },
  methods: {
    deleteDream(dreamId) {
      // Finde den Index des zu löschenden Traums
      const dreamIndex = this.dreams.findIndex(dream => dream.id === dreamId);
      if (dreamIndex !== -1) {
        // Lösche den Traum aus dem Array
        this.dreams.splice(dreamIndex, 1);
        // Aktualisiere die Dreams im LocalStorage
        localStorage.setItem('dreams', JSON.stringify(this.dreams));
      }
    },
  },
};
</script>

<style scoped>
.dreams {
  text-align: center;
  margin-top: 20px;
}

.dreams-list div {
    display: grid;
    grid-template-columns: auto 65px 65px 65px;
    grid-template-rows: 30px 25px;
    max-width: 600px;
    margin: 0 auto 20px;
    align-items: center;
    padding: 20px;
    background: #f3dace;
    border-radius: 15px;
}

.dreams-list h3, .dreams-list p {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 10px);
}
</style>
