<template>
  <div class="about-card">
    <div class="card-title">
      <img src="@/assets/portrait.jpeg" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>Hobbies</p>
        <h2>Noah Korner</h2>
      </div>
    </div>
    <div class="card-content">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.about-card
  min-height: calc(100vh - 150px)
  background: #333
  padding: 3em
  border: 5px solid rgb(140,29,64)
  border-radius: 5px
  color: white
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px
    .avatar
      height: 75px
      border: 1px solid rgba(255, 255, 255, 0.4)
      border-radius: 50%
      margin: 0 30px
  .title-text-content p
    margin-bottom: 0
    color: rgb(210, 210, 210)
  .title-text-content h2
    margin-top: 0
.card-content p
  line-height: 1.5
  margin: 30px auto
table 
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td
    border: 1px solid white
    border-top: none
    padding: 10px
    text-align: center
    &:first-of-type
      border-left: none
    &:nth-of-type(2)
      border-right: none
@media screen and (max-width: 530px)
  .about-card 
    padding: 1em
  .card-title h2
    font-size: 1.3em
</style>