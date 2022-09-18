---
sidebar_position: 2
---

# 构建

在开始前，请确保您已阅读[前置依赖](./requirement.md)部分。

## 开发构建

进入项目目录，执行 `yarn dev` 启动开发构建，开发构建将 watch 本地文件修改自动 rebuild


## 生产构建

进入项目目录，执行 `yarn build:<target>` 进行生产构建

- Chrome: `yarn build:chrome`
- Firefox: `yarn build:firefox`
- Edge: `yarn build:edge`