<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" ref="textName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" ref="textPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" ref="textEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.$refs.textName.value,
        this.$refs.textPhone.value,
        this.$refs.textEmail.value
      );
    },
  },
};
</script>
