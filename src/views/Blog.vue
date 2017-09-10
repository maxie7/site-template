<template>
    <div class="blog">
        <div class="blog__post" v-for="post in posts">
          <img :src="post.image" alt="">
          <h3>{{ post.title }}</h3>
        </div>
    </div>
</template>

<script>
  var posts = require('../posts')

  module.exports = {
    data: function() {
      return {
        posts: posts
      }
    }
  }
</script>