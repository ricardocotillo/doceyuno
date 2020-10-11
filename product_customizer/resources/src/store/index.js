import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: {
      url: '',
      width: 0,
      height: 0,
    },
    chosenColor: '#ffffff',
    colors: ["#ffffff"],
    price: 0,
    title: '',
    desc: '',
    duration: 0,
    step: 0,
  },
  mutations: {
    addDuration(state, duration) {
      state.duration = duration;
    },
    addTitle(state, title) {
      state.title = title;
    },
    addDesc(state, desc) {
      state.desc = desc
    },
    addColor(state, color) {
      state.colors.push(color);
    },
    removeColor(state, color) {
      state.colors = this.colors.filter(c => c !== color);
    },
    addPrice(state, price) {
      state.price = price;
    },
    addImage(state, image) {
      state.image = image
    },
    deleteImage(state) {
      state.image = {
        url: '',
        width: 0,
        height: 0,
      }
    },
    chooseColor(state, color) {
      state.chosenColor = color
    },
    moveToProductInfo(state) {
      state.step = 1;
    },
    moveToShirtInfo(state) {
      state.step = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
