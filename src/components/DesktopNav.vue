<template>
  <section class="nav">
    <div class="nav-logo">
      <img height="200px" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/1200px-Arizona_State_University_seal.svg.png" alt="logo">
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item">About Me</li>
        <li class="nav-list-item">Education</li>
        <li class="nav-list-item">Technical Skills</li>
        <li class="nav-list-item">Experience</li>
        <li class="nav-list-item">Hobbies</li>
        <li class="nav-list-item">GitHub</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  display: flex
  flex-direction: column
  align-items: center
  background: #333
  top: 0
  left: 0
  bottom: 0
  width: 20vw
  .nav-logo
    margin: 100px auto
    img 
      border-radius: 50%
  .nav-menu
    color: white
.nav-menu-list
  list-style: none
  padding: 0
  .nav-list-item
    background: #222
    padding: 10px 20px
    text-align: center
    margin: 10px auto
    cursor: pointer
    &:hover
      width: 100%
</style>