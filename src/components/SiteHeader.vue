<script setup>
import { Menu, X } from "@lucide/vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);
const route = useRoute();

watch(() => route.fullPath, () => { open.value = false; });
</script>

<template>
  <header class="site-header">
    <div class="nav-wrap">
      <router-link class="brand" to="/" aria-label="蒋安平作品集首页">
        <img class="brand-avatar" src="/portrait.png" alt="" aria-hidden="true" />
        <span class="brand-copy"><strong>蒋安平</strong><small>全栈开发者</small></span>
      </router-link>
      <nav id="primary-navigation" :class="{ open }" aria-label="主导航">
        <router-link to="/">首页</router-link>
        <router-link to="/projects">项目</router-link>
        <router-link class="nav-contact" to="/about">关于 / 联系</router-link>
      </nav>
      <button class="menu-button" type="button" :aria-expanded="open" aria-controls="primary-navigation" aria-label="切换导航菜单" @click="open = !open">
        <X v-if="open" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>
  </header>
</template>
