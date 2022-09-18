---
sidebar_position: 3
---

# FAQ


### Login window pops up frequently

Due to the limitation of the authentication method of Microsoft Graph API, if you use it for more than **24 hours,** the refresh token will be invalid and you need to log in again.

See [Token Lifetimes, Expiration, and Renewal](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/token-lifetimes.md#access-tokens)



### "Quick add task" not work

The "Quick Add Task" by right-clicking has been deprecated in version [1.4.0](https://github.com/WayneGongCN/microsoft-todo-browser-ext/blob/main/CHANGELOG.md#140-2022-09-12), replaced by the "[Auto fill](https://github.com/WayneGongCN/microsoft-todo-browser-ext/pull/84)".

See [issue #86](https://github.com/WayneGongCN/microsoft-todo-browser-ext/issues/86)
