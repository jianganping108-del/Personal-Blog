<script setup>
import { ArrowRight } from "@lucide/vue";
</script>

<template>
  <div>
    <section class="about-hero section-shell"><div class="about-title"><p class="eyebrow">关于我</p><h1>保持好奇，<br />也保持交付。</h1></div><div class="about-intro"><p>我是蒋安平，一名计算机科学与技术专业学生。我的实践从 Vue 页面延伸到 Java 后端、异步任务、搜索系统和服务部署。</p><p>我喜欢把模糊需求拆成清晰步骤，也愿意在真实运行环境里追查问题，直到系统真正可用。</p></div></section>
    <section class="about-strengths section-shell">
      <div class="strengths-heading"><p class="eyebrow">能力侧写</p><h2>跨越界面、服务<br />与运行环境。</h2></div>
      <div class="about-facts about-facts-grid"><article><span>01</span><p>以 Vue 生态为前端核心，重视页面体验与响应式细节。</p></article><article><span>02</span><p>具备 Spring Boot、FastAPI 与数据服务的独立开发经验。</p></article><article><span>03</span><p>能够完成 Docker、Linux、Nginx 环境下的部署与问题排查。</p></article></div>
    </section>
    <section class="experience-section"><div class="section-shell experience-grid"><div><p class="eyebrow">经历与成长</p><h2>在真实问题中<br />建立工程判断。</h2></div><div class="timeline"><article><span>持续实践</span><h3>全栈项目开发</h3><p>从页面、接口、数据库到部署，完成多个可运行项目并持续复盘。</p></article><article><span>超过一年</span><h3>学校官网运维</h3><p>响应真实用户问题，迭代前端页面并交付 Elasticsearch 检索功能。</p></article><article><span>当前</span><h3>寻找实习与合作</h3><p>希望在真实团队中继续提升工程能力、业务理解与协作效率。</p></article></div></div></section>
    <section class="about-contact section-shell">
      <div class="contact-main">
        <p class="eyebrow">联系</p>
        <h2>期待参与有价值的<br />AI 应用开发。</h2>
        <p class="contact-intro">目前常驻贵阳，正在寻找 AI 应用开发相关岗位。欢迎通过邮箱或微信联系，我会尽快回复。</p>
        <dl class="contact-facts">
          <div><dt>所在城市</dt><dd>贵阳</dd></div>
          <div><dt>求职方向</dt><dd>AI 应用开发相关岗位</dd></div>
          <div><dt>邮箱</dt><dd>1991055180@qq.com</dd></div>
        </dl>
        <div class="contact-actions">
          <a class="button button-secondary" href="/jiang-anping-resume.docx" download="蒋安平-简历.docx">下载简历 <ArrowRight :size="17" /></a>
        </div>
      </div>
      <figure class="wechat-card">
        <img src="/wechat-qr.jpg" alt="蒋安平的微信二维码" />
        <figcaption><strong>微信联系</strong><span>扫描二维码添加好友</span></figcaption>
      </figure>
    </section>
  </div>
</template>
