---
sidebar_position: 4
---

# 国际化翻译

Microsoft To Do 浏览器扩展 遵循 WebExtension i18n[^1] 国际化[^2] 标准。

如果缺少您所在地区的语言，或您发现当前的翻译存在错误，我们非常欢迎您参与我们的国际化建设！


## 前置步骤

在进行翻译工作之前，请确保您已经了解 [参与贡献](index.md) 中的全部内容。


## 添加国际化配置

以 Chrome 为例，在列表[^3] 中确认浏览器能支持您的国际化配置。

在国际化目录[^4]，将您要翻译的源地区下 `messages.json` 文件复制到目标地区，并开始翻译。

## 修改翻译错误

进入国际化目录[^4]，打开错误翻译地区下的 `messages.json` 文件，进行修改。


[^1]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n
[^2]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization
[^3]: https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support
[^4]: https://github.com/WayneGongCN/microsoft-todo-browser-ext/tree/main/public/_locales