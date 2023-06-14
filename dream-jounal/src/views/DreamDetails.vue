<template>
  <div class="dream-details">
    <h1>{{ dream.title }}</h1>
    <div>
      <p>{{ dream.description }}</p>
      <p class="small-right">{{ dream.date }}</p>
    </div>
    <button type="button" @click="backToDreams">Back</button>
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
  created() {
    const dreamId = this.$route.params.id;
    this.getDreamDetails(dreamId);
  },
  methods: {
    getDreamDetails(dreamId) {
      const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
      const dreamIdNumber = parseInt(dreamId);
      const dream = dreams.find(dream => dream.id === dreamIdNumber);

      if (dream) {
        this.dream = dream;
      } else {
        console.error(`Dream with ID ${dreamId} not found.`);
      }
    },
    backToDreams() {
      this.$router.push('/dreams');
    },
  },
};
</script>

<style scoped>
.dream-details {
  text-align: center;
  margin-top: 20px;
}

.dream-details div {
    display: grid;
    grid-template-rows: minmax(200px, auto) 14px;
    grid-template-columns: 1fr;
    background: #f3dace;
    width: calc(100% - 40px);
    max-width: 500px;
    margin: 0 auto 20px;
    border-radius: 15px;
    align-items: center;
    gap: 20px;
    padding: 20px;
    justify-content: center;
}

.dream-details div p {
  margin: 0;
}

.small-right {
      text-align: right;
    font-size: 12px;
    opacity: 0.5;
}
</style>
