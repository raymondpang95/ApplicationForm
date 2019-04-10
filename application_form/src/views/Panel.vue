<template>
  <div class="panel">
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'navigation',
  components: {
    Navigation
  }
}
</script>
