// scripts/config.js
hexo.on('ready', () => {
  const isNetlify = process.env.NETLIFY_CNAME === 'true';
  const config = hexo.config;

  if (isNetlify) {
    // Netlify 环境配置
    config.url = 'https://dhmskk.netlify.app';
    config.root = '/';
  } else {
    // GitHub Pages 环境配置 (或其他默认环境)
    // 请将 YOUR_USERNAME 替换为你的 GitHub 用户名
    config.url = 'https://dora-honor.github.io';
    config.root = '/';
  }
});