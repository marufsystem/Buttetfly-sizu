# 💫 Butterfly Messenger Bot

A modern Messenger bot project by **✅Sizu💟🦋 & Maruf System💫**  
Admin: **Maruf Billah**

---

## ✨ Features

- Fully automatic Facebook Messenger bot
- Auto-Azan reminder with fixed Dhaka times
- Group join/leave logging (notifies admin)
- Admin broadcast command (send messages to all groups/users)
- Clean modular command and event system
- Bangla & English friendly

---

## 🚀 How to use

1. **Install Node.js (v20+)**
2. **Clone/download this repo**
3. **Add your Facebook appstate.json in the root folder**
4. `npm install`
5. `npm start`

---

## 📂 Structure

- `index.js` — Main bot file
- `config.json` — All config (admin UID, settings)
- `data/azanTimes.json` — Azan schedule for 365 days
- `commands/` — All command files
- `events/` — All event files
- `utils/` — Utilities (logger, helpers)
- `.github/workflows/deploy.yml` — GitHub Actions for auto-deploy

---

## 🟢 GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
