<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <Teleport to="body">
    <ErrorAlert v-if="inputInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter at least a few character...</p>
      <button @click="confirmError">Ok</button>
    </ErrorAlert>
  </Teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>
