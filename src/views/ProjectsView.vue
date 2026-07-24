<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";
</script>

<template>
  <div class="page-shell section-shell">
    <header v-reveal class="page-intro"><p class="eyebrow">项目作品 · {{ String(projects.length).padStart(2, "0") }}</p><h1>把每一次实践，<br />变成可复用的经验。</h1><p>这里记录我参与或独立完成的真实项目，涵盖内容处理、服务部署与业务系统运维。</p></header>
    <div v-if="projects.length" class="project-list projects-page-list"><ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" /></div>
    <div v-else class="empty-state"><span>项目整理中</span><h2>新的实践很快会出现在这里。</h2></div>
  </div>
</template>
