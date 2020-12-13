<template>
  <div
    :class="selected ? 'bg-green-500' : 'bg-gray-400'"
    class="w-12 h-6 rounded-full shadow inline-block cursor-pointer"
    @click.prevent="selected = !selected"
  >
    <div
      :style="{ transform: `translateX(${selected ? 100 : 0}%)`}"
      class="w-1/2 h-full bg-white rounded-full shadow transition-fast"
    />
  </div>
</template>

<script>
export default {
  name: "Switch",
  props: {
    value: {
      immediate: true,
      type: Boolean
    }
  },
  data() {
    return {
      selected: false
    };
  },
  watch: {
    selected(current) {
      this.$emit("input", current);
      this.$emit("updateList", current);
    }
  },
  created() {
    this.selected = this.value;
  },
  mounted() {
    this.selected = this.value;
  }
};
</script>
<style scoped>
.transition-fast {
  transition: all 0.1s ease-out;
}
</style>
