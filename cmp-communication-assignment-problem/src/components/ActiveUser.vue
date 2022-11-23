<template>
  <section>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>
