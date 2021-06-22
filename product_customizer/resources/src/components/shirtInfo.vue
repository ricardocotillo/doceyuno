<template>
  <div class="sidebar">
    <template v-if="!showColorPicker">
      <div class="sidebar-header">
        <font-awesome-icon @click="goBack" icon="arrow-left" size="lg" id="back-arrow" />
        <h2 class="title">Crea tu producto</h2>
      </div>
      <div class="sidebar-body">
        <div>
          <h4>Diseña tu producto</h4>
          <small>Tamaño máximo de archivo 50MB</small>
          <div class="button-group">
            <button v-if="image === ''" @click="doclickInput">
              <font-awesome-icon icon="image" size="lg" />
            </button>
            <button v-else @click="deleteImage">
              <font-awesome-icon icon="trash-alt" size="lg" />
            </button>

            <input @change="addImage" type="file" hidden ref="fileInput" />
          </div>
          <hr />
          <p>
            <b>Selecciona colores</b>
            <br />
            <small>Selecciona múltiples colores para ofrecer</small>
          </p>
          <div class="color-wrapper">
            <div
              @click="chooseColor(color)"
              class="color"
              v-for="color in colorsChosen"
              :key="color"
              :style="{background: color}"
            ></div>
            <div class="add-color" @click="showColorPicker = true">
              <font-awesome-icon icon="plus" />
            </div>
          </div>
          <hr />
          <p>
            <b>Define tu precio de venta</b>
            <br />
            <small>Este es el precio que veran los usuarios</small>
          </p>
          <div class="calculator">
            <div class="input-group">
              <span>{{currency}}</span>
              <input id="price" type="text" name="price" v-model.number="price" />
            </div>
            <small v-if="profit > 0" class="profit">S/{{profit.toFixed(2)}} ganancia/venta</small>
            <small v-else :style="{color: 'red'}">Sin ganancias</small>
          </div>
        </div>
        <div>
          <button @click="moveToProductInfo">Continuar</button>
        </div>
      </div>
    </template>
    <div v-else class="sidebar-body">
      <div>
        <p>
          <b>Selecciona los colores que quieres ofrecer</b>
          <br />
          <small>{{`${colorsChosen.length} color${colorsChosen.length > 1 ? 'es' : ''} seleccionado${colorsChosen.length > 1 ? 's' : ''}`}}</small>
        </p>
        <div class="color-wrapper">
          <div
            @click="addColor(color)"
            class="color color-pick"
            v-for="color in colors"
            :key="color"
            :style="{background: color}"
          >
            <font-awesome-icon
              v-if="colorsChosen.some(c => c === color)"
              icon="check"
              :style="{color: color === '#ffffff' || color === '#d6d5d5' ? 'black' : 'white',}"
            />
          </div>
        </div>
      </div>
      <button v-if="colorsChosen.length > 0" @click="showColorPicker = false">Terminar</button>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      fileAdded: false,
      cost: 19.99,
      price: 49.99,
      currency: "",
      colors: [],
      showColorPicker: false
    };
  },
  async created() {
    const csrftoken = Cookies.get("csrftoken");
    const res = await fetch("/shop/store-info/", {
      headers: {
        "X-CSRFToken": csrftoken
      }
    });
    const data = await res.json();
    this.cost = data.basePrice;
    this.currency = data.currencySymbol;
    this.colors = data.colors;
  },
  methods: {
    goBack() {
      window.location.replace("/");
    },
    descargar() {
      this.$emit("download");
    },
    moveToProductInfo() {
      if (this.image !== '' && typeof this.price === 'number') {
        this.$store.commit("addPrice", this.price);
        this.$store.commit("moveToProductInfo");
      } else {
        this.$toasted.error('Una imagen y un precio válido son requeridos.')
      }
    },
    doclickInput() {
      this.$refs.fileInput.click();
    },
    addImage(e) {
      this.fileAdded = true;
      const reader = new FileReader();
      reader.onload = e => {
        const url = e.target.result;
        const image = new Image();
        image.src = url;
        image.onload = () => {
          const width = image.width;
          const height = image.height;
          this.$store.commit("addImage", { url, width, height });
        };
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    deleteImage() {
      this.$store.commit("deleteImage");
    },
    addColor(color) {
      if (!this.$store.state.colors.some(c => c === color)) {
        return this.$store.commit("addColor", color);
      }
      this.$store.commit("removeColor", color);
    },
    chooseColor(color) {
      this.$store.commit("chooseColor", color);
    }
  },
  computed: {
    colorsChosen() {
      return this.$store.state.colors;
    },
    image() {
      return this.$store.state.image.url;
    },
    profit() {
      return this.price - this.cost;
    }
  }
};
</script>

<style scoped>
.sidebar {
  background: #212032;
  color: white;
  font-family: "Roboto";
}

.sidebar-header {
  display: flex;
  background: #0a0918;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}

.sidebar-body {
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

#back-arrow {
  cursor: pointer;
}
.title {
  margin: 0;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 80%;
}

.button-group {
  margin: 20px 0 20px 0;
}

.calculator {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-group span {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 0.8em;
  z-index: 3;
  position: relative;
  left: 7px;
}

#price,
#price:focus {
  max-width: 100px;
  padding: 10px 10px 10px 25px;
  font-family: "Roboto";
  font-weight: bold;
  color: white;
  background: #2e2d3e;
  border: none;
  outline: none;
  border-radius: 4px;
  position: relative;
  left: -15px;
  z-index: 1;
  font-size: 0.9em;
}

#price:focus {
  outline: white 1px solid;
}

.profit {
  color: #40f99bff;
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

.color-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.color,
.add-color {
  width: 32px;
  height: 32px;
  border-radius: 100px;
  margin: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.color-pick {
  cursor: pointer;
}

.add-color {
  color: #90d7ffff;
  border: #90d7ffff 2px solid;
  cursor: pointer;
}
</style>