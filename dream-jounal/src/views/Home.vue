<template>
  <div class="home">
    <h1>Welcome to the Dream Journal!</h1>
    <p>
      This is where you can keep track of your dreams and explore the world of your subconscious mind.
    </p>
    <router-link to="/dreams" class="btn">View Dreams</router-link>
    <router-link to="/add-dream" class="btn">Add a Dream</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>
