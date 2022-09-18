---
sidebar_position: 3
---

# Translate

The Microsoft To Do browser extension follows the WebExtension i18n[^1] Internationalization[^2] standard.

If your region's language is missing, you can [add a new internationalization configuration](#add-i18n-conf)

If you find an error in the current translation, you can [correct the translation error](#correct-the-translation)


## Requirement

Make sure you understand the relevant content in the [Contribution guid](./contribution-guid.md) before doing translation work.


## Add a new i18n configuration{#add-i18n-conf}

First, verify in the locale list[^3] that the browser supports your internationalization configuration.

Then, go to the i18n directory[^4], create a region directory, and add the `messages.json` file to start translation.


## Correct the translation error{#correct-the-translation}

In the `messages.json` of the region directory, find the translation errors and fix them.


[^1]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/i18n
[^2]: https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization
[^3]: https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support
[^4]: https://github.com/WayneGongCN/microsoft-todo-browser-ext/tree/main/public/_locales