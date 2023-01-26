# manifest.json content
```json
"content_scripts": [
    {
      "js": ["scripts/content.js","scripts/content_hltv.js"],
      "matches": [
        "https://developer.chrome.com/docs/extensions/*",
        "https://developer.chrome.com/docs/webstore/*",
        "https://www.hltv.org/*",
        "https://www.hltv.org/results/*",
        "https://www.google.com/*"
      ]
    }
  ]
  ```