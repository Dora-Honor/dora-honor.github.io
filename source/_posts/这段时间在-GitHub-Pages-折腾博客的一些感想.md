---
title: 这段时间在 GitHub Pages 折腾博客的一些感想
tags:
  - GitHub Pages
  - 经验
  - 折腾
categories: 经验总结
abbrlink: 3342541928
date: 2025-11-25 23:25:39
---

## 前言

博客从今年 6 月份建立至今，已经有 5 个多月了。在给博客折腾，优化得更好、更有个性的这段时间，我发现我有了不少收获。

不只是熟悉了注册 [GitHub] 在上面发布自己的项目，还熟悉了非常好用的 [VS Code](https://github.com/microsoft/vscode)[^1] 代码编辑器，以及如何用 [Git] 远程管理 [GitHub] 项目仓库、Markdown 扩展语法、部分 HTML/CSS 语法。

[Git]: https://git-scm.com/

[^1]: 全称 Visual Studio Code，和 Visual Studio 并非一类软件。

## 为什么要建立自己的博客？

平常在用 [Google]、[Bing] 搜索引擎查资料、解决问题的方法时，总能发现不少博主有自己的博客网页，他们的网页都做得很华丽，而且在 [GitHub] 托管项目和在 GitHub Pages 部署静态网页很方便。我就在想「**如果我也能有自己的博客就好了**」，于是就有了自己折腾博客的想法。

**自己有自己的博客感觉很酷**。能自己写博文和管理博客，再加上能折腾变得更有个性，想想就很开心！

在生活和实践中，免不了遇上一些困难，我不仅会利用 [Google]、[Bing] 等搜索引擎和 [DeepSeek]、[ChatGPT] 等生成 AI 查找，还会结合自己的经验和想法去解决问题。**如果能有自己的博客，将我自己的经验记录下来，或许能帮上遇上同问题的朋友们。**

不只是写自己的经验，还有自己想说的话也会写。

[GitHub]: https://github.com/
[Google]: https://www.google.com/
[Bing]: https://www.bing.com/
[DeepSeek]: https://chat.deepseek.com/
[ChatGPT]: https://chat.openai.com/

虽然如今互联网早已普及，SNS 平台也是一片红海，但我还是觉得个人博客网站依然不能少。

### 建立博客有什么好处？

- 自己写想写的博文，在自己搭建的博客里管理更方便，~~基本没有大多数 SNS 平台被卡审核之类的问题~~。
- 自由度高，可玩性强。加上评论系统互动显得更有活力。
- 在折腾的过程中能有不少收获，**增长见识和经验**，获得情绪价值。

## 具体有什么收获？

### 依赖组件和标记语言

- **Node.js 和 NPM、PNPM、Yarn 等包管理器**：[Hexo] 博客的搭建、测试、页面生成离不开这些依赖组件。简单了解了如何通过对应命令安装、更新、卸载组件。
- **[Git]**：管理 [GitHub] 仓库**必不可少**的依赖。有了这个组件，对于管理在 [GitHub] 上托管的项目很方便，结合 [VS Code](https://github.com/microsoft/vscode)[^1] 的图形界面则更加方便。同时，[Git] 还自带了 Bash 终端，对我来说比 CMD 更舒服。
- **[VS Code](https://github.com/microsoft/vscode)[^1]**：非常好用的代码编辑器，不止支持 Markdown、YAML、HTML、CSS、JavaScript 等常见语法，还带了 Git 和终端功能，且可以更改默认终端（我就改成了 Git Bash）和打开文件夹，用起来更方便，不用频繁切窗口。
- **Markdown**：上手速度极快的标记语法。只要几分钟就能轻松上手，且易读性好。
- **HTML**：在之前部署 [docsify](https://docsify.js.org/)[^2] 加入组件的时候，我又学到了一些 HTML 语法，以及 HTML 存在许多起始和结束标签，和引入 CSS、JavaScript 样式。
- **CSS/JavaScript**：在 [Hexo] 的 [Butterfly] 主题和 [docsify](https://docsify.js.org/) 修改字体和自定义样式、插件的时候，这俩必不可少。
- **YAML**：[Hexo]、[Butterfly]、GitHub Actions 都在用的配置文件类型，易读性好。

[Hexo]: https://hexo.io/zh-cn/
[Butterfly]: https://butterfly.js.org/

[^2]: 另一个文档生成器，其最大特点是只需要一个 `index.html` 就可以瞬间生成 Markdown 文档网页。

### 定制界面和各种组件

- **[Hexo]**：框架强大，生态（主题、插件、用户量）丰富，可玩性强。但自带的 `hexo-marked` 渲染器支持的扩展语法不多，换成 `hexo-renderer-markdown-it-plus` 加上用 NPM 安装好的所需插件就好。
- **[Butterfly] 主题**：自带组件丰富，整体风格美观，适合许多不同喜好的人群；可玩性强，不仅自带了 [font-awesome v6] 图标，引入自定义字体样式、阿里 [iconfont] 自定义图标也很方便。
- **[Waline] 评论系统**：支持不登录评论、Markdown 语法，以及在不同平台部署服务端和数据库端，支持各种通知方式。目前在用这个评论系统。
- **[Gitalk]**：基于 GitHub Issues，界面美观，**但要求权限比较高，且博主未打开文章界面创建 Issues 时，其他人均无法评论**。
- **[Giscus]**：基于 GitHub Discussions，不需要博主打开文章创建话题，但**界面没那么美观**。
- **[LeanCloud]**：用于存放 Waline 各种信息的数据库。
- **[Netlify]**：部署静态网页的服务，可从 GitHub 导入。其最大特点是**可以不自定义域名直连**，因此服务端就在这上面部署。

[font-awesome v6]: https://fontawesome.com/icons
[iconfont]: https://www.iconfont.cn/
[Waline]: https://waline.js.org/
[Gitalk]: https://github.com/gitalk/gitalk
[Giscus]: https://giscus.app/zh-CN
[LeanCloud]: https://leancloud.app/
[Netlify]: https://netlify.com/

## 感想

自己折腾好博客，在 GitHub Pages 上部署好了之后，只要有链接和互联网，何时何地都能打开。这给了我很大的成就感。

~~可以在家人、朋友、同学面前炫耀，让他们小小羡慕一下~~，收获一点情绪价值。

今后还会不定期更新博文，不会停下。不白浪费这份成就。
