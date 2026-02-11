# Umrah Duas (PWA)

A simple, mobile-first Umrah du’a companion you can use in the browser or install to your iPhone Home Screen (works offline once loaded).

**Live app:** https://umrah-duas.vercel.app/

---

## Why I built this

I wanted a clean, distraction-free way to keep key Umrah du’as in one place, with:
- Arabic
- Transliteration
- Meaning (English)
- Search + favourites
- Offline support for travel / patchy signal

I’m sharing this early for feedback.

---

## Features

- ✅ Mobile-first UI (works great on iOS)
- ✅ Installable as an app (PWA)
- ✅ Offline caching (once opened online at least once)
- ✅ Search across Arabic / transliteration / meaning
- ✅ Favourites (stored locally on your device)
- ✅ Adjustable Arabic + text sizing
- ✅ Dark / Light mode

---

## Install on iPhone (recommended)

1. Open the live app in **Safari**
2. Tap **Share**
3. Tap **Add to Home Screen**
4. Launch it like a normal app

> Note: iOS PWAs can cache aggressively. If you don’t see updates, remove from Home Screen and re-add.

---

## Feedback I’m looking for

If you try it, I’d really value:

### Content accuracy
- Any missing du’as that should be included
- Any corrections to Arabic/transliteration/meaning
- Suggestions for clearer phrasing

### UX improvements
- Is it easy to scan/read while walking?
- Is the font sizing comfortable?
- Are the cards too long/too short?
- What would make it “Umrah-proof”?

### Bugs
- Anything not loading / not updating
- Offline behaviour on iOS
- Layout issues on your device

**How to send feedback**
- Open a GitHub Issue: https://github.com/<YOUR_GITHUB_USERNAME>/umrah-duas/issues
- Or message me directly with screenshots + what device/browser you used.

---

## Data & sources

Du’as were compiled from this guide (and then formatted for a small mobile app):

- https://hajjumrahplanner.com/umrah-guide/

If you notice anything that should be attributed differently or corrected, please flag it via an Issue.

---

## Disclaimer

This is a hobby project for personal use and community feedback.
Please always verify du’as and rulings with reliable scholars/resources.
I’m happy to correct and improve the app, but I’m not issuing religious rulings.

---

## Tech stack

- Plain HTML / CSS / Vanilla JS
- Service Worker for offline caching
- Hosted on Vercel
