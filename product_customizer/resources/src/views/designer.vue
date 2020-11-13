<template>
  <div class="container">
    <div v-if="showLoader" ref="loader" class="loader">
      <font-awesome-icon icon="spinner" spin size="3x" :style="{color: '#212032'}" />
    </div>
    <ShirtInfo
      v-if="step === 0"
      @colorChange="changeColor"
      @imageAdded="addImage"
      @imageDeleted="deleteImage"
      @download="download"
    />
    <ProductInfo v-else @download="download" />
    <Customizer
      ref="customizer"
      :color="chosenColor"
      :image="image"
      :imageHeight="imageHeight"
      :imageWidth="imageWidth"
      :showImage="showImage"
    />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import ShirtInfo from "../components/shirtInfo";
import Customizer from "../components/customizer";
import ProductInfo from "../components/productInfo";
export default {
  data() {
    return {
      showLoader: false,
      chosenColor: "#ffffff",
      image: "",
      imageWidth: 0,
      imageHeight: 0,
      showImage: false
    };
  },
  computed: {
    step() {
      return this.$store.state.step;
    }
  },
  methods: {
    async download() {
      this.showLoader = true;
      const printImageFile = await this.$refs.customizer.svgToPng();
      const productImageFile = await this.$refs.customizer.htmlToJpeg();

      const formData = new FormData();

      formData.set("name", this.$store.state.title);
      formData.set("description", this.$store.state.desc);
      this.$store.state.colors.forEach(c => formData.append("colors", c));
      formData.set("default_color", this.$store.state.chosenColor);
      formData.set("price", this.$store.state.price);
      formData.set("duration", this.$store.state.duration);
      formData.set("print_image", printImageFile);
      formData.set("image", productImageFile);

      const csrftoken = Cookies.get("csrftoken");
      const res = await fetch("/shop/create-product/", {
        method: "POST",
        body: formData,
        headers: {
          "X-CSRFToken": csrftoken
        }
      });

      if (res.status === 200) {
        this.$toasted.success("Producto creado");
      } else {
        const errors = await res.json();
        Object.keys(errors).forEach(k => {
          this.$toasted.error(`${k}: ${errors[k][0]}`)
        });
      }
      this.showLoader = false;
    },
    changeColor(color) {
      this.chosenColor = color;
    },
    deleteImage() {
      this.image = "";
      this.imageWidth = 0;
      this.imageHeight = 0;
      this.showImage = false;
    },
    addImage(img) {
      const reader = new FileReader();
      reader.onload = e => {
        const uri = e.target.result;
        this.image = uri;
        const image = new Image();

        image.src = uri;
        image.onload = () => {
          this.imageWidth = image.width;
          this.imageHeight = image.height;
          this.showImage = true;
        };
      };
      reader.readAsDataURL(img);
    }
  },
  components: {
    ShirtInfo,
    Customizer,
    ProductInfo
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 9999;
}
.container {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 3fr;
  height: 100vh;
}
</style>