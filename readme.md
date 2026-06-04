![qwq-npm-test](https://socialify.git.ci/VincentZyuApps/qwq-npm-test/image?custom_description=%F0%9F%A7%AA+A+sandbox+repository+for+evaluating+GitHub+Actions+CI%2FCD+workflows+within+the+npm+ecosystem.+%F0%9F%93%A6+&custom_language=NPM&description=1&font=Source+Code+Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Ficon.icepanel.io%2FTechnology%2Fsvg%2FGitHub-Actions.svg&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

# qwq-npm-test

> 🧪 A sandbox repository for evaluating GitHub Actions CI/CD workflows within the npm ecosystem. 📦

[![npm-unscoped](https://img.shields.io/npm/v/qwq-npm-test?label=npm-unscoped&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/qwq-npm-test)
[![npm-scoped](https://img.shields.io/npm/v/%40vincentzyuapps%2Fqwq-npm-test-scoped?label=npm-scoped&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@vincentzyuapps/qwq-npm-test-scoped)
[![github-packages](https://img.shields.io/npm/v/%40vincentzyuapps%2Fqwq-npm-test-scoped?label=github-packages&style=for-the-badge&logo=github)](https://github.com/VincentZyuApps/qwq-npm-test/pkgs/npm/qwq-npm-test-scoped)

[![CI Status](https://img.shields.io/github/actions/workflow/status/VincentZyuApps/qwq-npm-test/publish.yml?branch=master&style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/VincentZyuApps/qwq-npm-test/actions/workflows/publish.yml)

---

## 📊 Package Overview

| Registry | Package | Type | Badge |
|---|---|---|---|
| [npmjs.org](https://www.npmjs.com) | [`qwq-npm-test`](https://www.npmjs.com/package/qwq-npm-test) | 📦 npm Unscoped | [![npm version](https://img.shields.io/npm/v/qwq-npm-test)](https://www.npmjs.com/package/qwq-npm-test) [![npm downloads](https://img.shields.io/npm/dm/qwq-npm-test)](https://www.npmjs.com/package/qwq-npm-test) |
| [npmjs.org](https://www.npmjs.com) | [`@vincentzyuapps/qwq-npm-test-scoped`](https://www.npmjs.com/package/@vincentzyuapps/qwq-npm-test-scoped) | 🏷️ npm Scoped | [![npm scoped version](https://img.shields.io/npm/v/%40vincentzyuapps%2Fqwq-npm-test-scoped)](https://www.npmjs.com/package/@vincentzyuapps/qwq-npm-test-scoped) [![npm scoped downloads](https://img.shields.io/npm/dm/%40vincentzyuapps%2Fqwq-npm-test-scoped)](https://www.npmjs.com/package/@vincentzyuapps/qwq-npm-test-scoped) |
| [GitHub Packages](https://github.com/features/packages) | [`@vincentzyuapps/qwq-npm-test-scoped`](https://github.com/VincentZyuApps/qwq-npm-test/pkgs/npm/qwq-npm-test-scoped) | 🐙 GitHub Packages Scoped | [![GitHub Package](https://img.shields.io/badge/gh-packages-blue?logo=github)](https://github.com/VincentZyuApps/qwq-npm-test/pkgs/npm/qwq-npm-test-scoped) |



## 📚 Package Types Explained

This project publishes **3 packages** across **2 registries**. Here's what each means:

| | 📦 npm Unscoped | 🏷️ npm Scoped | 🐙 GitHub Packages Scoped |
|---|---|---|---|
| **Package name** | `qwq-npm-test` | `@vincentzyuapps/qwq-npm-test-scoped` | `@vincentzyuapps/qwq-npm-test-scoped` |
| **Registry** | [npmjs.org](https://www.npmjs.com) | [npmjs.org](https://www.npmjs.com) | [npm.pkg.github.com](https://npm.pkg.github.com) |
| **Default visibility** | Public | **Private** (need `--access public`) | Private (org-scoped) |
| **Name uniqueness** | Global — first come, first served | Under `@owner` namespace — no conflicts with other orgs | Under GitHub org namespace |
| **Auth** | `NPM_TOKEN` | `NPM_TOKEN` | `GITHUB_TOKEN` |
| **Publish command** | `npm publish` | `npm publish --access public` | `npm publish --registry https://npm.pkg.github.com` |

### 📦 npm Unscoped

Packages without a `@scope` prefix have a **globally unique name** — once `qwq-npm-test` is taken, nobody else can publish under that name. They are **always public** and can be installed with `npm install qwq-npm-test`.

### 🏷️ npm Scoped

Scoped packages follow the format `@owner/package-name`. The name only needs to be unique within your scope, so you don't have to worry about name squatting. However, npm scoped packages are **private by default** — you need `--access public` to share them publicly. Install with `npm install @vincentzyuapps/qwq-npm-test-scoped`.

### 🐙 GitHub Packages Scoped

GitHub Packages also uses npm-compatible scoped names (`@owner/name`), but it points to **GitHub's own registry** (`npm.pkg.github.com`) instead of npmjs.org. It uses `GITHUB_TOKEN` for authentication, which is automatically available in GitHub Actions — no manual token setup needed. Great for keeping packages **private within your organization** while still using `npm install`.

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
# 5. Publish unscoped package
npm publish --registry https://registry.npmjs.org
# 6. Publish scoped package
npm pkg set name=@vincentzyuapps/qwq-npm-test-scoped
npm publish --registry https://registry.npmjs.org --access public
# 7. Publish scoped package to GitHub Packages
# ... wait, why not use GitHub Actions CI?
```

## 🤖 Auto Publish via GitHub Actions

> **Prerequisites:** Add these secrets in GitHub repo **Settings → Secrets and variables → Actions → New repository secret**:
> - `NPM_TOKEN` — npm token with publish permission for both `qwq-npm-test` and `@vincentzyuapps/qwq-npm-test-scoped`

```bash
# 1. Init Git repo
git init
git remote add origin git@github.com:VincentZyuApps/qwq-npm-test.git
# 2. Commit and bump version
git add .
git commit -m "chore: save changes before version bump"
npm version patch
# 3. Commit again (message must start with "pub" to trigger publish)
git add .
git commit -m "pub qwq"
# 4. Push
git push -u origin master
```

### 🔑 NPM Token Setup

| Field | Value |
|---|---|
| Token type | Granular Access Token |
| **✔ Bypass 2FA** | **Required** |
| Packages → Permissions | **Read and write** |
| Packages → Scope | **All packages** or include both `qwq-npm-test` and `@vincentzyuapps/qwq-npm-test-scoped` |
| Organizations | No access |
| Expiration | **No expiration** or **90 days** recommended |

> After generating, add `NPM_TOKEN` in GitHub repo **Settings → Secrets and variables → Actions**.

### ⚙️ Notes

When pushing to `master` or `main`, GitHub Actions checks the commit message:

- **starts with `pub`** (case-insensitive) → auto publishes **3 packages** across npmjs.org and GitHub Packages
- **otherwise** → skip

### 🔁 CI Workflow

```mermaid
flowchart TD
    Push["🚀 Push<br>git push master / main"] --> Check["🔍 Check<br>check-commit"]
    Check --> Q{"❓ Commit starts with 'pub'?"}
    Q -->|No| Done1["✅ Done"]
    Q -->|Yes| Test["🧪 Test<br>npm test"]
    Test -->|Fail| Fail["❌ Abort"]
    Test -->|Pass| Pub1["**📦 Unscoped**<br>*npmjs.org*<br>qwq-npm-test"]
    Test -->|Pass| Pub2["**🏷️ Scoped**<br>*npmjs.org*<br>@vincentzyuapps/qwq-npm-test-scoped"]
    Test -->|Pass| Pub3["**🐙 GitHub Packages**<br>*npm.pkg.github.com*<br>@vincentzyuapps/qwq-npm-test-scoped"]
```

---

<br>
<br>
<br>
<br>
<br>

![qwq-npm-test](https://socialify.git.ci/VincentZyuApps/qwq-npm-test/image?custom_description=%F0%9F%A7%AA+A+sandbox+repository+for+evaluating+GitHub+Actions+CI%2FCD+workflows+within+the+npm+ecosystem.+%F0%9F%93%A6+&custom_language=JavaScript&description=1&font=Source+Code+Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F91%2FOcticons-mark-github.svg&name=1&owner=1&pulls=1&stargazers=1&theme=Light)