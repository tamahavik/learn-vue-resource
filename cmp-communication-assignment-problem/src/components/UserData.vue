<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" ref="textName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" ref="textAge" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-data"],
  methods: {
    submitData() {
      const data = {
        name: this.$refs.textName.value,
        age: this.$refs.textAge.value,
      };
      this.$emit("submit-data", data);
    },
  },
};
</script>
