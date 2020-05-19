<template>
  <div class="about-card">
    <div class="card-title">
      <img src="@/assets/portrait.jpeg" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>Technical Skills</p>
        <h2>Noah Korner</h2>
      </div>
    </div>
    <div class="card-content">
      <p>
        <ul>
          <li>C/C++</li>
          <li>Java</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Swift</li>
          <li>Linux</li>
          <li>SQL</li>
          <li>Source Control</li>
          <li>Microsoft Office Suite</li>
          <li>Axure Rapid Prototyping</li>
          <li>Virtual Machines</li>
          <li>GameMaker Studio 2</li>
          <li>Unit Testing</li>
          <li>Assembly Language</li>
          <li>Visual Studio</li>
          <li>Laser Printing Technologies</li>
          <li>Git/GitHub</li>
          <li>MATLAB</li>
        </ul>
      </p>
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
  background: rgb(140,29,64)
  padding: 3em
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