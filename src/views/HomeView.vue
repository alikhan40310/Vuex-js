<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="counter fs-1 fw-normal">{{ $store.state.counter }}</div>
  <div class="btns d-flex gap-2 justify-content-center align-items-center text-center">
    <button @click="$store.commit('decrement')" class="btn btn-danger fs-2 pr-4">-</button>
    <button @click="$store.commit('increment')" class="btn btn-primary fs-2">+</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',


}

</script>
