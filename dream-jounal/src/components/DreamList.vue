<template>
  <div>
    <h2>Dream List</h2>
    <ul>
      <li v-for="dream in dreams" :key="dream.id">{{ dream.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DreamList',
  data() {
    return {
      dreams: [
        { id: 1, title: 'Dream 1' },
        { id: 2, title: 'Dream 2' },
        { id: 3, title: 'Dream 3' },
      ],
    };
  },
};
</script>
