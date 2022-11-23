const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Havik Priyatama",
          phone: "0853665161",
          email: "priyatama.havik@gmail.com",
        },
        {
          id: 2,
          name: "Huli Jones",
          phone: "0853665869",
          email: "jones.hulie@gmail.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
