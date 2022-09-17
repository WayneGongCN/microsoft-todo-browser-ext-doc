---
sidebar_position: 3
---

# 国际化翻译

Microsoft To Do 浏览器扩展 遵循 WebExtension i18n[^1] 国际化[^2] 标准。

如果缺少您所在地区的语言，您可以 [添加新的国际化配置](#添加新的国际化配置)

如果您发现当前的翻译存在错误，您可以 [修改翻译错误](#修改翻译错误)


## 前置步骤

在进行翻译工作之前，请确保您已经了解 [参与贡献](index.md) 中的相关内容。


## 添加新的国际化配置

以 Chrome 为例，在列表[^3] 中确认浏览器能支持您的国际化配置。

在国际化目录[^4]，创建地区目录，添加 `messages.json` 文件开始翻译。

## 修改翻译错误

在国际化目录[^4]，找到翻译错误的 `messages.json` 文件，进行修改。


[^1]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n
[^2]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization
[^3]: https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support
[^4]: https://github.com/WayneGongCN/microsoft-todo-browser-ext/tree/main/public/_locales