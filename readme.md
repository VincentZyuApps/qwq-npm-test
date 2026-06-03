![qwq-npm-test](https://socialify.git.ci/VincentZyuApps/qwq-npm-test/image?custom_description=test+github+ci+%F0%9F%A7%AA%F0%9F%9A%80%E2%9C%85&description=1&font=Source+Code+Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Ficon.icepanel.io%2FTechnology%2Fsvg%2FGitHub-Actions.svg&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

# qwq-npm-test

> test github ci

[![npm version](https://img.shields.io/npm/v/qwq-npm-test)](https://www.npmjs.com/package/qwq-npm-test)
[![npm downloads](https://img.shields.io/npm/dm/qwq-npm-test)](https://www.npmjs.com/package/qwq-npm-test)

[![CI Status](https://img.shields.io/github/actions/workflow/status/VincentZyuApps/qwq-npm-test/publish.yml?branch=master&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/VincentZyuApps/qwq-npm-test/actions/workflows/publish.yml)
[![GitHub last commit](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2FVincentZyuApps%2Fqwq-npm-test%2Fcommits%2Fmaster&query=%24.commit.committer.date&label=last%20commit&style=for-the-badge&logo=github&logoColor=white)](https://github.com/VincentZyuApps/qwq-npm-test)

---

## 📦 Manual Publish to npm

```bash
# 1. Initialize
npm init -y
# 2. Login to npm (use proxychains or env proxy if needed)
npm login --registry https://registry.npmjs.org
# 3. Create .npmrc in project root, write:
#    //registry.npmjs.org/:_authToken=npm_xxxxx (Access Token from npm website)
echo "//registry.npmjs.org/:_authToken=npm_xxxxx" > .npmrc
# 4. Test
npm test
# 5. Publish
npm publish --registry https://registry.npmjs.org
```

## 🤖 Auto Publish via GitHub Actions

> **Note:** First add `NPM_TOKEN` in GitHub repo **Settings → Secrets and variables → Actions → New repository secret**.

```bash
# 1. Init Git repo
git init
git remote add origin git@github.com:VincentZyuApps/qwq-npm-test.git
# 2. Add .npmrc to .gitignore (avoid leaking token)
touch .gitignore
echo ".npmrc" >> .gitignore
# 3. Commit and bump version
git add .
git commit -m "chore: save changes before version bump"
npm version patch
# Or manually update version
# 4. Commit again (message must start with "pub" to trigger publish)
git add .
git commit -m "pub qwq"
# 5. Push
git push -u origin master
```

### 🔑 NPM Token Setup

| Field | Value |
|---|---|
| Token type | Granular Access Token |
| **✔ Bypass 2FA** | **Required** |
| Packages → Permissions | **Read and write** |
| Packages → Scope | **All packages** or select `qwq-npm-test` only |
| Organizations | No access |
| Expiration | **No expiration** or **90 days** recommended |

> After generating, add `NPM_TOKEN` in GitHub repo **Settings → Secrets and variables → Actions**.

### ⚙️ Notes

When pushing to `master` or `main`, GitHub Actions checks the commit message:

- **starts with `pub`** (case-insensitive) → auto runs `npm publish`
- **otherwise** → skip

### 🔁 CI Workflow

```mermaid
flowchart TD
    Push["git push master / main"] --> Check["check-commit"]
    Check --> Q{"commit starts with 'pub'?"}
    Q -->|No| Done1["✅ Done"]
    Q -->|Yes| Test["test<br>npm test"]
    Test -->|Fail| Fail["❌ Abort"]
    Test -->|Pass| Pub["publish<br>npm publish"]
    Pub --> Done2["✅ Published"]
```
