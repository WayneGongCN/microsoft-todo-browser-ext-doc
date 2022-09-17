# FAQ


### 经常弹出登陆窗口

由于 Microsoft Graph API 认证方式的限制，若您距离上次使用时间超过 24 小时，会导致 Refresh token 失效从而需要重新登录。

详见 [Token Lifetimes, Expiration, and Renewal](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/token-lifetimes.md#access-tokens)



### “快速添加任务” 无法使用

通过右键 “快速添加任务” 的功能已在 [1.4.0](https://github.com/WayneGongCN/microsoft-todo-browser-ext/blob/main/CHANGELOG.md#140-2022-09-12) 版本中弃用，取而代之的是 [“自动填充”](https://github.com/WayneGongCN/microsoft-todo-browser-ext/pull/84) 功能。

详见 issue [#86](https://github.com/WayneGongCN/microsoft-todo-browser-ext/issues/86)
