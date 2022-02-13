
/**
 * @roxi/routify 2.18.4
 * File generated Sun Feb 13 2022 17:46:24 GMT+0100 (Central European Standard Time)
 */

export const __version = "2.18.4"
export const __timestamp = "2022-02-13T16:46:24.504Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports
import _index from '../src/pages/index.svelte'
import _settings from '../src/pages/settings.svelte'
import __layout from '../src/pages/_layout.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/henryb/Documents/henry/arkiv-frontend/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/henryb/Documents/henry/arkiv-frontend/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => _index
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "settings.svelte",
      "filepath": "/settings.svelte",
      "name": "settings",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/henryb/Documents/henry/arkiv-frontend/src/pages/settings.svelte",
      "importPath": "../src/pages/settings.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/settings",
      "id": "_settings",
      "component": () => _settings
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => __layout
}


export const {tree, routes} = buildClientTree(_tree)

