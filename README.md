# @winwin/hexo-editor-sdk

For server, see [@winwin/hexo-editor-server](https://github.com/YuJianghao/winwin-hexo-editor-server)

## Installation

```bash
npm install --save @winwin/hexo-editor-sdk
```

## Usage

see `./example.js` for simple usage.

```js
const hexoEditorSDK = require('@winwin/hexo-editor-sdk')
// or
// import hexoEditorSDK from '@winwin/hexo-editor-sdk'

const hexoEditorAPI = hexoEditorSDK({
  baseUrl: /* path to your hexo-editor-server base */,
  axios: /* axios instance */
})

// use API
hexoEditorAPI.hello().then(res => console.log(res.data))
```
