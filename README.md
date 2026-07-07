# Nathaniel 胡皓承 — Portfolio

白色極簡個人作品集，純靜態 HTML/CSS/JS，無框架、無建置步驟，直接部署 GitHub Pages。

## 結構

```
index.html    首頁：頭貼＋姓名職稱 hero、三條路徑（剪輯 / 特效動態 / App 開發）＋ About ＋聯絡
video.html    剪輯與短影音：IG Reels、YouTube、合作對象
motion.html   特效與動態設計：VFX / Houdini / MG 影片牆＋插畫
dev.html      App 開發：Alfred App（App Store 連結）、FrameVault、自動化
en/           英文版四頁（nav 的 EN / 中 按鈕互相切換）
style.css     共用樣式
main.js       影片 lazy autoplay ＋捲動顯現
media/        作品影片（原 GIF 全數轉為 H.264 MP4，總量約 35MB）
posters/      影片封面圖（poster）
img/          縮圖、插畫、大頭照（profile.jpg）、Alfred logo（alfred-logo-mark.png）
```

## 部署到 GitHub Pages

```bash
cd /Users/huhaocheng/Nathans/portfolio
git init
git add -A
git commit -m "New portfolio site"
git remote add origin https://github.com/nat1web/work.git   # 或新 repo
git push -u origin main --force   # 覆蓋舊站前請先確認
```

Settings → Pages → Deploy from branch → main / root。

## 效能設計

- 影片 `preload="none"` ＋ IntersectionObserver：捲到才載入、離開視口自動暫停。
- 圖片全部 `loading="lazy"`，縮圖皆已壓至 ≤1200px。
- 原始素材 420MB → 35MB；163MB 的 GIF（超過 GitHub 100MB 單檔上限）已轉為 9MB MP4。

## 待補（TODO）

- 遐光映畫 XG Studios 目前是文字卡，可換成實際合作作品縮圖。
