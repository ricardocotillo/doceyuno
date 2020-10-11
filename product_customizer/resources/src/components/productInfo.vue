<template>
  <Sidebar>
    <template v-slot:header>
      <font-awesome-icon
        class="arrow-back"
        @click="goBack"
        icon="arrow-left"
        size="lg"
        id="back-arrow"
      />
      <h2 class="title">Detalle de campaña</h2>
    </template>
    <template v-slot:body>
      <div>
        <CustomInput
          required
          v-model="title"
          placeholder="Título de tu campaña"
          type="text"
          name="title"
          width="100%"
        />
        <br />
        <br />
        <CustomInput
          required
          v-model="description"
          placeholder="Descripción de campaña"
          type="textarea"
          name="description"
          width="100%"
        />
        <br />
        <br />
        <CustomInput
          label="¿Cuanto quieres que dure tu campaña?"
          v-model.number="duration"
          required
          width="100%"
          type="select"
          :options="options"
        />
      </div>
      <button @click="descargar">Terminar</button>
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from "../layout/sidebar.layout";
import CustomInput from "../components/customInput";
export default {
  data() {
    return {
      title: "",
      description: "",
      duration: 0,
      options: [
        {
          value: 0,
          text: "Duración indefinida"
        },
        {
          value: 15,
          text: "11"
        },
        {
          value: 21,
          text: "21"
        },
        {
          value: 30,
          text: "30"
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$store.commit("moveToShirtInfo");
    },
    descargar() {
      if (this.title !== "" && this.description !== "") {
        this.$store.commit("addTitle", this.title);
        this.$store.commit("addDesc", this.description);
        this.$store.commit("addDuration", this.duration);
        this.$emit("download");
      } else {
        this.$toasted.error(
          "Un título, una descripción y una duración válidos son requeridos."
        );
      }
    }
  },
  components: {
    Sidebar,
    CustomInput
  }
};
</script>

<style scoped>
.arrow-back {
  cursor: pointer;
}
.title {
  margin: 0;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 80%;
}
button,
button:active,
button:focus {
  cursor: pointer;
  padding: 10px;
  background: transparent;
  border: white 1px solid;
  color: white;
  min-width: 100%;
  outline: none;
}

button:hover {
  outline: white 1px solid;
}
</style>