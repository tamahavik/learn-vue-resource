const app = Vue.createApp({
  data() {
    return {
        text: '',
        text2: ''
    };
  },
  methods:{
    showAlert(){
        alert("this is show alert");
    },
    registerInput(e){
        this.text = e.target.value;
    },
    registerInput2(e){
        this.text2 = e.target.value;
    }
  }
});

app.mount("#assignment");
