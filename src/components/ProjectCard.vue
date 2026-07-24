<script setup>
import { ArrowUpRight } from "@lucide/vue";
defineProps({ project: { type: Object, required: true }, index: { type: Number, default: 0 } });
</script>

<template>
  <router-link class="project-card" :to="`/projects/${project.slug}`">
    <div class="project-media"><img :src="project.cover" :alt="`${project.name}项目截图`" /></div>
    <div class="project-card-body">
      <span class="project-number">{{ String(index + 1).padStart(2, "0") }}</span>
      <div class="project-card-copy">
        <h3>{{ project.name }}</h3>
        <p>{{ project.summary }}</p>
        <div class="tag-list" aria-label="技术栈"><span v-for="tech in project.techStack" :key="tech">{{ tech }}</span></div>
      </div>
      <span class="round-arrow" aria-hidden="true"><ArrowUpRight :size="20" /></span>
    </div>
  </router-link>
</template>
