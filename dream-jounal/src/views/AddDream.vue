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
      <button type="submit">Add Dream</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dream: {
        title: '',
        date: '',
        description: '',
      },
    };
  },
  methods: {
    submitDream() {
      // Hier kannst du die Logik implementieren, um den Traum zu speichern
      // Du kannst eine API-Anfrage durchführen oder auf eine lokale Datenquelle zugreifen
      // Verwende die Daten aus 'dream' für den Speichervorgang
      console.log('Dream submitted:', this.dream);
      
      // Hier kannst du den Benutzer auf eine andere Seite weiterleiten, z.B. zur Dreams-Seite
      // Du kannst die 'router.push()' Methode verwenden, um zur entsprechenden Route zu navigieren
      this.$router.push('/dreams');
    },
  },
};
</script>

<style scoped>
.add-dream {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-right: 10px;
}

input[type="text"],
input[type="date"],
textarea {
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
