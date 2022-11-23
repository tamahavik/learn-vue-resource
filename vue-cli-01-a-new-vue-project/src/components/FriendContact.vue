<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailAreVisible ? "Hide" : "Show" }} Detail
    </button>
    <button @click="toggleFavorite">Favorite</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  //emits " ["toggle-favorite"]"
  emits: {
    "toggle-favorite": function (id) {
      if (id) return true;
      console.warn("id is required!");
      return false;
    },
    delete: function (id) {
      if (id) return true;
      console.warn("id is required!");
      return false;
    },
  },
  data() {
    return {
      detailAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
