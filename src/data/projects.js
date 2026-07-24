export const projects = [
  {
    id: 1,
    slug: "multimodal-file-to-markdown",
    name: "多模态文件转 Markdown 系统",
    summary: "把复杂文件转换拆成可靠、可追踪的异步处理链路。",
    description:
      "基于 FastAPI、Celery 与 Redis 构建异步多模态格式转换服务，支持视频、Office、PDF 等五条转换链路，并将 OCR、语音识别与结构化输出统一到可扩展的任务管道中。",
    techStack: ["FastAPI", "Celery", "Redis", "OCR", "AsyncIO"],
    cover: "/projects/multimodal-converter.webp",
    highlights: [
      "按文件类型进行管道路由，覆盖视频、Office、PDF 等五类转换链路",
      "使用 Celery 与 Redis 解耦耗时任务，提供任务状态与结果查询能力",
      "实现页级容错与 asyncio 并发控制，单页失败不阻断整份文件",
      "统一 OCR 与语音识别结果，为后续 Markdown 结构化输出提供稳定输入",
    ],
  },
  {
    id: 2,
    slug: "sub2api-deployment",
    name: "Sub2API 大模型订阅与 API Key 中转服务",
    summary: "完成容器化部署、反向代理与服务运行环境搭建。",
    description:
      "独立完成大模型订阅管理与 API Key 中转服务的部署上线，使用 Docker 组织运行环境，通过 Linux 与 Nginx 完成服务配置、反向代理和基础运维。",
    techStack: ["Docker", "Linux", "Nginx", "Operations"],
    cover: "/projects/sub2api.webp",
    highlights: [
      "使用 Docker 完成应用容器化部署与运行环境隔离",
      "配置 Nginx 反向代理与服务入口，梳理部署链路",
      "完成 Linux 服务配置、日志检查和常见故障处理",
      "面向稳定运行补充基础运维流程与状态检查",
    ],
  },
  {
    id: 3,
    slug: "school-website-operations",
    name: "学校官网运维与检索功能开发",
    summary: "持续运维真实业务系统，并交付高性能关键词检索能力。",
    description:
      "独立运维学校官网超过一年，处理教师用户的日常使用问题并按需求迭代页面；同时基于 Elasticsearch 完成多条件关键词检索功能，覆盖大规模文本数据。",
    techStack: ["Spring Boot", "Vue", "MySQL", "Redis", "Elasticsearch"],
    cover: "/projects/school-website.webp",
    highlights: [
      "持续运维学校官网超过一年，响应教师用户问题并完成页面调整",
      "独立完成多条件筛选的后端关键词检索功能",
      "索引超过 8,000 条、每条约 600 字的文本数据",
      "典型查询响应时间低于 500 毫秒，兼顾检索效果与使用体验",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
