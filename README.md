# 机器人操作项目选集

这是无构建依赖的 GitHub Pages 静态站，首页和两篇项目文章通过相对路径互链，可从用户名站点根目录或项目站点子目录打开。

- `index.html`：项目选集首页。
- `robodojo-agent.html`：RoboDojo 分析、轻量执行层与对照方案。
- `dobot-sim2real.html`：越疆赛事技术支持和 Sim2Real 工作流。
- `style.css`：共用样式。
- `.nojekyll`：纯静态发布，不依赖 Jekyll。
- `comparison-template.csv`：逐轮对照记录模板，仅表头，无成绩。

## 发布

确认两篇正文和任何拟公开的素材后，将文件放入 GitHub Pages 仓库拟发布的目录中。已有个人站时，可把全部文件放在 `robotics-portfolio/` 子目录下，避免覆盖原首页。新增独立仓库时可用 Settings → Pages → Deploy from a branch，选择对应分支和目录。发布后打开真实 URL 验证首页和两篇文章，再将对应链接放入简历。

[GitHub Pages 官方发布说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 后补素材

- 第一篇：从本机可公开案例里选一段基线和一段改进后的同条件录像，注明任务、配置、样本量和数据来源。用 CSV 表头逐轮记录，报告时同时给出成功次数和总轮次。未完成同条件比较前，不填提升数字。
- 第二篇：补经确认可公开的遥操和策略真机推理视频。建议视频为 MP4，把文件置于 `assets/` 并用 `<video controls preload="metadata" src="assets/文件名.mp4"></video>` 替换对应占位；视频说明需区分人工遥操和模型策略推理。
- 未加入任何本机 URL、未经核实的实验成绩或个人联系方式。
- 展示结构参考 [RoboTwin 2.0](https://robotwin-platform.github.io/) 的项目概览与模块化案例布局；未使用其代码或媒体。
