const app = Vue.createApp({
  data() {
    return {
      name: "Havik Priyatama",
      age: 30,
      imageLink:
        "https://picsum.photos/536/354"
    };
  },
  methods: {
    calculateAge(){
        return this.age + 5;
    },
    randomNumber(){
        return Math.random();
    }
  },
});

app.mount("#assignment");
