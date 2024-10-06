const app = Vue.createApp({
    data() {
      return {
        filaComum: JSON.parse(localStorage.getItem("filaComum")) || [],
        filaEspecial: JSON.parse(localStorage.getItem("filaEspecial")) || [],
        contadorComum: JSON.parse(localStorage.getItem("contadorComum")) || 1,
        contadorEspecial: JSON.parse(localStorage.getItem("contadorEspecial")) || 1,
        senhaAtendida: ''
      };
    },
    methods: {
      atualizarFilas() {
        localStorage.setItem("filaComum", JSON.stringify(this.filaComum));
        localStorage.setItem("filaEspecial", JSON.stringify(this.filaEspecial));
      },
      gerarSenhaComum() {
        let senhaComum = 'C' + this.contadorComum.toString().padStart(3, '0');
        this.filaComum.push(senhaComum);
        this.contadorComum++;
        localStorage.setItem("contadorComum", this.contadorComum);
        this.atualizarFilas();
      },
      gerarSenhaEspecial() {
        let senhaEspecial = 'E' + this.contadorEspecial.toString().padStart(3, '0');
        this.filaEspecial.push(senhaEspecial);
        this.contadorEspecial++;
        localStorage.setItem("contadorEspecial", this.contadorEspecial);
        this.atualizarFilas();
      },
      atenderSenhaComum() {
        if (this.filaComum.length > 0) {
          this.senhaAtendida = "Comum " + this.filaComum.shift();
        } else {
          alert("Nenhuma senha comum para atender.");
        }
        this.atualizarFilas();
      },
      atenderSenhaEspecial() {
        if (this.filaEspecial.length > 0) {
          this.senhaAtendida = "Especial " + this.filaEspecial.shift();
        } else {
          alert("Nenhuma senha especial para atender.");
        }
        this.atualizarFilas();
      }
    },
    mounted() {
      this.atualizarFilas();
    }
  });
  
  app.mount('#app');
  