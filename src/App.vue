<script setup></script>

<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/menu">Menu</router-link>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
