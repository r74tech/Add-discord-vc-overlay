# Attention
This repository has been temporarily frozen.  
Reason:  
This is due to a change in the Discord streamkit. To be more precise, it can no longer be displayed due to CORS error.  
So we are planning to implement it in the official way of Discord API.  
Please wait until then.  
We apologize for the inconvenience and thank you for your patience.  


# Add Discord VC Overlay
![](https://img.shields.io/github/v/release/rta-technology/add-discord-vc-overlay?include_prereleases&style=for-the-badge) ![color:red](https://img.shields.io/github/downloads/RTa-technology/Add-discord-vc-overlay/total?style=for-the-badge)   
You can show Discord's Voice Chat overlay on Chrome.

## How to Install
1. Download a [releases](https://github.com/RTa-technology/add-discord-vc-overlay/releases//) file and unzip it to the local.
2. Go to Chrome Extension.
> * `chrome://extensions/`
> * 　　`(config)` > `More tools` > `Extensions`
3. Enable `Developer mode` (click a toggle at the upper right of the page).
4. Click `LOAD UNPACKED` and select the following file.
```
add-discord-vc-overlay <<<this!
├─ README.md
├─ LICENSE.md
... ... ...
├── js
│   ├── content.js
│   ├── option.js
│   └── background.js
├── option.html
├── popup.html
├── background.html
└── manifest.json
```

## インストール方法
1. [releases](https://github.com/RTa-technology/add-discord-vc-overlay/releases/) 最新版をダウンロードし、ローカルに解凍してください。
2. 拡張機能を開きます。chrome://extensions/
3. `Developer mode`を有効にします。
4. `パッケージ化されていない拡張機能を読み込む`をクリックして、`add-discord-vc-overlay`というフォルダを選択します。
