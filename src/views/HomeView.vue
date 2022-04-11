<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div
    :style="{ color: $store.state.colorCode }"
    class="counter fs-1 fw-normal"
  >{{ $store.state.counter }}</div>
  <div class="counter-square fs-3 mb-3">
    {{ $store.state.counter }}
    <sup>2</sup>
    =
    {{ $store.getters.counterSquare }}
  </div>
  <div class="btns d-flex gap-2 justify-content-center align-items-center text-center">
    <!-- <button @click="$store.commit('decrement')" class="btn btn-danger fs-2 pr-4">-</button>
    <button @click="$store.commit('increment')" class="btn btn-primary fs-2">+</button>-->

    <button @click="$store.dispatch('decrement')" class="btn btn-danger fs-2 pr-4">-</button>
    <button @click="$store.dispatch('increment')" class="btn btn-primary fs-2">+</button>
  </div>
  <div class="d-flex col-auto justify-content-center align-items-center text-center justify-center">
    <input
      class="form-con col-md-2"
      v-model="$store.state.colorCode"
      type="text"
      placeholder="Enter color code"
    />
  </div>
</template>

<script>

export default {
  name: 'HomeView',
} 
</script>

<style scoped>
.form-con {
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  color: #333;
  margin-top: 2rem;
  font-size: 1.2rem;
}
</style>