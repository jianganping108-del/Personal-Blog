<script setup>
import { ArrowRight } from "@lucide/vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";

const featuredProject = projects.find((project) => project.slug === "school-website-operations") ?? projects[0];
</script>

<template>
  <div>
    <section class="hero section-shell">
      <div class="hero-topline"><span>全栈开发 · 产品实践</span><span class="availability"><i></i>开放实习与项目合作</span></div>
      <div class="hero-copy">
        <h1>把复杂问题，<br />做成<span>清晰可靠的产品。</span></h1>
        <div class="hero-intro-wrap">
          <p class="hero-intro">你好，我是蒋安平，一名专注 Vue、Spring Boot 与内容系统开发的计算机专业学生。我关注清晰的交互，也愿意深入系统背后的工程问题。</p>
          <div class="hero-actions">
            <router-link class="button button-primary" to="/projects">查看项目 <ArrowRight :size="18" /></router-link>
            <router-link class="text-link" to="/about">关于 / 联系 <ArrowRight :size="17" /></router-link>
          </div>
        </div>
      </div>
      <router-link v-if="featuredProject" class="hero-project" :to="`/projects/${featuredProject.slug}`">
        <div class="hero-project-meta"><span>官网案例 · 03</span><strong>{{ featuredProject.name }}</strong></div>
        <div class="hero-project-image"><img :src="featuredProject.cover" :alt="`${featuredProject.name}项目界面`" /></div>
        <ArrowRight class="hero-project-arrow" :size="22" />
      </router-link>
    </section>

    <section class="process-section">
      <div class="section-shell">
        <div class="section-heading"><p class="eyebrow">工作方式</p><h2>从需求到上线，<br />保持完整视角。</h2></div>
        <div class="process-grid">
          <article><span>01</span><h3>理解问题</h3><p>找到真正影响体验和交付结果的核心约束。</p></article>
          <article><span>02</span><h3>拆解系统</h3><p>让页面、接口、数据和部署边界清晰可维护。</p></article>
          <article><span>03</span><h3>持续验证</h3><p>在真实浏览器和运行环境中完成闭环验证。</p></article>
        </div>
      </div>
    </section>

    <section class="projects-section section-shell">
      <div class="projects-head"><div><p class="eyebrow">精选项目</p><h2>真实项目，真实问题。</h2></div><router-link class="text-link" to="/projects">查看全部 <ArrowRight :size="17" /></router-link></div>
      <div class="project-list"><ProjectCard v-for="(project, index) in projects.slice(0, 3)" :key="project.id" :project="project" :index="index" /></div>
    </section>

    <section class="capability-section section-shell">
      <div class="capability-lead"><p class="eyebrow">能力范围</p><h2>前端体验、后端逻辑<br />与部署实践。</h2></div>
      <div class="capability-list">
        <article><span>01</span><div><h3>前端开发</h3><p>Vue、响应式界面、设计还原与交互优化</p></div></article>
        <article><span>02</span><div><h3>后端与数据</h3><p>Spring Boot、FastAPI、异步任务与搜索系统</p></div></article>
        <article><span>03</span><div><h3>部署与运维</h3><p>Docker、Linux、Nginx 与线上问题排查</p></div></article>
      </div>
    </section>
  </div>
</template>
