<template>
  <section class="nav">
    <div class="nav-brand">
      <img height="160px" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/1200px-Arizona_State_University_seal.svg.png" alt="logo">
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item">About Me</li>
        <li class="nav-list-item">Education</li>
        <li class="nav-list-item">Skills</li>
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
  background: #333
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  .nav-brand  
    margin: 20px auto
  .nav-menu
    width: 100%
.nav-menu-list
  list-style: none
  padding: 0
  display: flex
  margin: 0
  color: white
  li
    width: 50%
    text-align: center
    background: #555
    padding: 10px 0
    cursor: pointer
    transition: background 300ms ease-in-out
    &:first-of-type
      border-bottom: 5px solid #222
    &:hover
      background: #333
</style>