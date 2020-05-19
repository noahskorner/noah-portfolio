<template>
   <div class="about-card">
    <div class="card-title">
      <img src="@/assets/portrait.jpeg" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>Experience</p>
        <h2>Noah Korner</h2>
      </div>
    </div>
    <div class="card-content">
      <p>
        SOFTWARE INTERN • NATURE’S PURPOSE • MAY 2019 – PRESENT<br>
        - Testing and evaluating user interface and experience of current company website, individually and within focus groups, to enhance user experience and promote sales.<br>
        - Developing client purchasing suggestions AI using client order history to improve user experience and increase sales.<br>
        - Standardizing and automating client database to increase efficiency of retrieval and data processes.<br>
        - Implementing web functionality for subscription-based purchases on a weekly basis to support recurring clients.<br>
        DIRECT SALES REP • NORTHSTAR HOME • FEB 2018 – FEB 2019<br>
        - Initiated in direct sales with over 1,500 unique clients to reach sales goals.<br>
        - Communicated with people of diverse backgrounds both technically and interpersonally.<br>
        - Worked in a cross functional team environment, collaborating towards higher achievements and personal aspirations.<br>
        - Maintained a rigorous schedule to consistently improve personally, professionally, and financially.<br>
        - Onboarded new clients into the NorthStar system and continued to support clients after implementation.<br>
        ENGINEERING INTERN • SYSTEMIC VISTA • SEP 2017 – MAY 2018<br>
        - Worked in a collaborative learning environment with several professional engineers. - Designed and built specialized computers to assist with quality assurance for large corporations.<br>
        - Independently led the integration and implementation of updated laser printing technologies.<br>
        - Trained incoming interns on daily procedures, safety protocols, and technical skills. - Communicated with supervisor regarding daily tasks and deadlines to prioritize and manage products and development. <br>  
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