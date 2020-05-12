<template>
  <div id="app">
    <desktop-nav id="desktop-nav"/>
    <desktop-nav id="mobile-nav"/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'
import MobileNav from '@/components/MobileNav'

export default {
  components: {
    DesktopNav,
    MobileNav
  }
}
</script>

<style lang="sass" scoped>
  .view-container
    width: 79vw
    padding: 1.5em
    margin-left: 20vw
    box-sizing: border-box
    min-height: 100vh
</style>