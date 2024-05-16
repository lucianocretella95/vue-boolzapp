const { createApp } = Vue;

createApp({
  data() {
    return {
      // usare THIS !!!!!!!
      message: "Whatsapp",
    };
  },

  methods: {
    
  },
  mounted() {
    console.log("app caricata");
  },
}).mount("#app");
