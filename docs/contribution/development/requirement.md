---
sidebar_position: 1
---

# 前置依赖

在进行本地开发、构建前，请确保已按照下面的步骤进行环境与依赖安装。

## 环境依赖

### 安装 Node.js

安装 **[Node.js](https://nodejs.org/) LTS 版本**


### 安装 Yarn

我们通过 Yarn 管理 NPM 依赖，请[**安装 Yarn**](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


### 安装 NPM 包

进入项目目录，执行 `yarn install` 安装 npm 依赖。


## 环境变量

进入项目目录，执行 `cp .env.example .env`，创建环境变量文件。


## 配置 Azure 应用

在本地进行开发调试时，需要创建独立的 Azure 应用

1. 参考 [quickstart-register-app](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) 创建应用，这一步将得到一个 `client ID`。


2. 将上一步所创建应用的 Redirect URI 配置为 `https://<extension-id>.chromiumapp.org`。

:::tip
请创建一个 **单页应用程序** 来配置 Redirect URI
:::
	
:::tip
`<extension-id>` 为你本地需要调试的扩展 ID。 <br/>例如一个完整的 Redirect URI：`https://ffpljgmbiankjaokoefefmkoghcgoodn.chromiumapp.org`。
:::

3. 将 `client ID` 配置到环境变量文件 `.env` 的 `CHROME_CLIENT_ID` 字段。




