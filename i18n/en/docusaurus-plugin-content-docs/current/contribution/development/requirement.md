---
sidebar_position: 1
---

# Requirement

Before developing and building locally, please ensure that you have followed the steps below to install the environment and dependencies.


## Environment dependencies

### Install Node.js

Install **[Node.js](https://nodejs.org/) LTS version**


### Install Yarn

We manage NPM dependencies via Yarn, please install [**Yarn**](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


### Install NPM packages

Enter to the project directory and execute **`yarn install`** to install npm dependencies.


## environment variables

Enter the project directory and execute **`cp .env.example .env`** to create an environment variable file.


## Configure Azure application

When developing and debugging locally, you need to create a standalone Azure application.

1. Refer to [quickstart-register-app](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) to create an application, this step will get a **`client ID`**.

2. Configure the Redirect URI of the app created in the previous step to `https://<extension-id>.chromiumapp.org`.

:::tip
Please create a **Single Page Application** to configure the Redirect URI
:::
	
:::tip
`<extension-id>` is the extension ID that you need to debug locally.<br/>eg. `https://ffpljgmbiankjaokoefefmkoghcgoodn.chromiumapp.org`。
:::

3. Configure the **`client ID`** to the **`CHROME_CLIENT_ID`** field of the environment variable file `.env`.




