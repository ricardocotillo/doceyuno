<template>
  <div class="input-group">
    <label>{{label}}</label>
    <br><br>
    <span v-if="!(type === 'textarea')">{{prefix}}</span>
    <input
      :required="required"
      :class="{'has-prefix': typeof prefix !== 'undefined'}"
      @input="handle"
      v-if="type === 'text'"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :style="getStyle"
      :value="value"
    />
    <textarea
      :required="required"
      :class="{'has-prefix': typeof prefix !== 'undefined'}"
      :value="value"
      @input="handle"
      v-if="type === 'textarea'"
      :style="getStyle"
      rows="10"
      :placeholder="placeholder"
    ></textarea>
    <select
      :required="required"
      :value="value"
      @change="handle"
      v-if="type === 'select'"
      :style="getStyle"
    >
      <option v-if="placeholder" value disabled hidden selected>{{placeholder}}</option>
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >{{option.text}} {{option.value === 0 ? '' : 'días'}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    type: String,
    name: String,
    prefix: String,
    placeholder: String,
    width: String,
    options: Array,
    label: String,
    required: Boolean
  },
  methods: {
    handle(e) {
      this.$emit("input", e.target.value);
    }
  },
  computed: {
    getStyle() {
      let style = {};
      if (this.width) {
        style.width = this.width;
      }
      return style;
    }
  }
};
</script>

<style scoped>
.input-group span {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 0.8em;
  z-index: 3;
  position: relative;
  left: 7px;
}

input,
select,
input:focus,
textarea {
  padding: 10px 10px;
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

.has-prefix,
.has-prefix:focus {
  padding-left: 25px;
}

input:focus {
  outline: white 1px solid;
}
</style>