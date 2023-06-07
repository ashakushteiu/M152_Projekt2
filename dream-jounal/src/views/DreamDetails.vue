<template>
  <div class="dream-details">
    <h1>{{ dream.title }}</h1>
    <p>{{ dream.date }}</p>
    <p>{{ dream.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dream: {},
    };
  },
  created() {
    // Hier kannst du den Traum anhand der ID aus den Routenparametern abrufen und in 'dream' speichern
    const dreamId = this.$route.params.id;
    this.getDreamDetails(dreamId);
  },
  methods: {
    getDreamDetails(dreamId) {
      // Hier kannst du die Logik implementieren, um die Details des Traums von deiner Datenquelle abzurufen
      // Du kannst eine API-Anfrage durchführen oder auf eine lokale Datenquelle zugreifen
      // Setze dann die 'dream'-Daten entsprechend
      this.dream = {
        id: dreamId,
        title: 'Dream ' + dreamId,
        date: '2023-05-24',
        description: 'This is the description of Dream ' + dreamId,
      };
    },
  },
};
</script>

<style scoped>
.dream-details {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
