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
@import '~@fortawesome/fontawesome-free/css/all.min.css';

body {
  margin: 0;
  background: #fef6f0;
  color: #474747;
  font-family: cursive;
}

nav {
    background: #f3dace;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.router-link-exact-active {
  text-decoration: underline;
}

a {
    color: #474747;
    text-decoration: none;
}

a:hover {
  text-decoration: underline;
  opacity: .7;
}

.titelBild {
    width: 100%;
    max-height: 50vh;
    aspect-ratio: 1014/571;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
}

.titelBild img {
    height: auto;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.button-holder {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

.btn, button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #22181c;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: .3s;
    font-size: 14px;
    font-family: cursive;
}

.btn:hover, button:hover{
  background-color: #745260;
}

.deleteBtn {
  background: #e21919;
}

.deleteBtn:hover {
  background: #ea7171;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
}

input[type="text"], input[type="date"], textarea {
    padding: 7px;
    width: 100%;
    box-sizing: border-box;
    margin: 5px auto 0;
    border: 1px solid #22181c;
    border-radius: 8px;
    font-family: sans-serif;
}

input[type="text"]:hover, input[type="date"]:hover, textarea:hover {
    border: 1px solid #745260;
}

textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 200px;
}
</style>
