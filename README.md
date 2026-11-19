# 杨一飞 · 机器人操作项目选集

无构建依赖的 GitHub Pages 静态站。首页、两篇文章及素材使用相对路径，支持项目站点的 `/robotics-portfolio/` 子路径。

- `index.html` 为项目选集首页。
- `robodojo-agent.html` 包含 RoboDojo 评分复盘、Agent 历史运行及 25 Hz 接触恢复实验。
- `dobot-sim2real.html` 记录 Isaac Sim 赛题开发、真机示教、π₀.₅ 微调与推理验证。
- `assets/tube-recovery-trials.csv` 提供 204 次仿真接管的逐次结果。按 `checkpoint` 和 `matched_trial` 对齐各控制器，`nominal` 表示无外加微扰。

## 仿真素材

- `number-arrangement-review` 取自本地复跑的 `arrange-uni-010` 布局 2，保留头部相机的末段。
- `charger-scoring-review` 取自 `charger-layout-01-v2`，并列头部与左腕视角。
- `tube-slip-recovery` 取自 `tube-contact-recovery-v1` 的 `slip-03` 同步回放，展示原失败续段及每种控制器的首条原样试次。

## 补充真机视频

将获准公开的遥操与策略推理 MP4 放进 `assets/`，在 `dobot-sim2real.html` 的 `#videos` 段对应位置插入带 `controls playsinline preload="none"` 的 `<video>`。给每段说明添加任务、人工遥操或自主推理、运行条件及播放倍率。
