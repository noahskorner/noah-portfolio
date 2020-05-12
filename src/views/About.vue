<template>
  <div class="about-card">
    <div class="card-title">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" class="avatar">
      <div class="title-text-content">
        <p>About me</p>
        <h2>Noah Korner</h2>
      </div>
    </div>

    <div class="card-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at reprehenderit nihil consequatur consequuntur sapiente 
        magni corrupti odit asperiores maxime nostrum odio repellat sequi ad, ea placeat voluptatem saepe quia nemo cumque inventore 
        doloremque ullam ipsam! Impedit amet officia dignissimos tempora, provident itaque atque et qui aspernatur tenetur, ipsam saepe?</p>
      <table width="100%">
        <tr>
          <th>Requirement</th>
          <th>Solution</th>
        </tr>
        <tr>
          <td>Languages</td>
          <td>C/C++, HTML, CSS, JavaScript, Java, Swift </td>
        </tr>
         <tr>
          <td>Languages</td>
          <td>C/C++, HTML, CSS, JavaScript, Java, Swift </td>
        </tr>
         <tr>
          <td>Languages</td>
          <td>C/C++, HTML, CSS, JavaScript, Java, Swift </td>
        </tr>
         <tr>
          <td>Languages</td>
          <td>C/C++, HTML, CSS, JavaScript, Java, Swift </td>
        </tr>
      </table>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at reprehenderit nihil consequatur consequuntur sapiente 
        magni corrupti odit asperiores maxime nostrum odio repellat sequi ad, ea placeat voluptatem saepe quia nemo cumque inventore 
        doloremque ullam ipsam! Impedit amet officia dignissimos tempora, provident itaque atque et qui aspernatur tenetur, ipsam saepe?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at reprehenderit nihil consequatur consequuntur sapiente 
        magni corrupti odit asperiores maxime nostrum odio repellat sequi ad, ea placeat voluptatem saepe quia nemo cumque inventore 
        doloremque ullam ipsam! Impedit amet officia dignissimos tempora, provident itaque atque et qui aspernatur tenetur, ipsam saepe?</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.about-card
  background: #333
  padding: 3em
  border-radius: 10px
  color: white
  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px
    .avatar 
      height: 50px
      border-radius: 50%
      border: 1px solid rgba(255,255,255, 0.4)
      margin: 0 30px
    .title-text-content
      p 
        margin-bottom: 0
        color: rgb(210, 210, 210)
      h2 
        margin-top: 0
.card-content
  p
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
</style>