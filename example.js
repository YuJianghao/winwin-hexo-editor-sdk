const hexoEditorSDK = require('./index')
const axios = require('axios')

const hexo = axios.create()

// path to your server root
hexo.defaults.baseURL = 'http://localhost:3000'
// path to your hexo-editor-server base
const baseUrl = '/hexo'

// create hexoEditorAPI
const hexoEditorAPI = hexoEditorSDK({ baseUrl: baseUrl, axios: hexo })

// use API
hexoEditorAPI.hello().then(res => console.log(res.data))
