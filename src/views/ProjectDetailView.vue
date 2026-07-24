<script setup>
import { ArrowLeft, ArrowRight, Check } from "@lucide/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getProjectBySlug, projects } from "../data/projects";
const route = useRoute();
const project = computed(() => getProjectBySlug(route.params.slug));
const currentIndex = computed(() => project.value ? projects.findIndex((item) => item.id === project.value.id) : -1);
const nextProject = computed(() => currentIndex.value < 0 ? null : projects[(currentIndex.value + 1) % projects.length]);
</script>

<template>
  <div v-if="project" class="detail-page">
    <section v-reveal class="detail-hero section-shell">
      <router-link class="back-link" to="/projects"><ArrowLeft :size="17" /> 返回项目</router-link>
      <div class="detail-title-grid"><div><p class="eyebrow">项目案例 · {{ String(currentIndex + 1).padStart(2, "0") }}</p><h1>{{ project.name }}</h1></div><p>{{ project.summary }}</p></div>
      <div class="detail-cover"><img :src="project.cover" :alt="`${project.name}界面截图`" /></div>
    </section>
    <section v-reveal class="detail-content section-shell">
      <div class="detail-overview"><p class="eyebrow">项目说明</p><h2>从目标到落地</h2><p>{{ project.description }}</p></div>
      <aside><p class="detail-label">技术栈</p><div class="tag-list detail-tags"><span v-for="tech in project.techStack" :key="tech">{{ tech }}</span></div></aside>
    </section>
    <section class="highlight-section"><div v-reveal class="section-shell highlight-inner"><div><p class="eyebrow">关键实践</p><h2>我在项目中<br />解决的问题。</h2></div><div class="highlight-list"><article v-for="(highlight, index) in project.highlights" :key="highlight"><span>{{ String(index + 1).padStart(2, "0") }}</span><Check :size="18" /><p>{{ highlight }}</p></article></div></div></section>
    <router-link v-if="nextProject" class="next-project section-shell" :to="`/projects/${nextProject.slug}`"><span>下一个项目</span><strong>{{ nextProject.name }}</strong><span class="round-arrow"><ArrowRight :size="20" /></span></router-link>
  </div>
  <section v-else class="missing-project section-shell"><p class="eyebrow">项目不存在</p><h1>这个项目暂时不存在。</h1><router-link class="button button-primary" to="/projects">返回项目列表</router-link></section>
</template>
