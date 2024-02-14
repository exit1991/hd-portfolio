# 開発メモ

## 初期インストール
- 下記のコマンドを打って適当なフォルダにインストール

```bash
# Next.js でセットアップ
npx create-next-app@latest
# ↓
#   プロジェクト名 : hd-portfolio
#   TypeScript 使用 : Yes
#   ESLint 使用 : Yes
#   Tailwind CSS 使用 : No
#   src ディレクトリ 使用 : Yes
#   App Router 使用 : Yes
#   カスタム import エイリアス 使用 : No

# フォルダの作成と、npm install が自動的に始まる
```

- インストール完了後、クローンしたGitリポジトリのフォルダにファイルを丸ごと移動する
- **参考**
  - [create\-next\-app で訊かれていること](https://zenn.dev/ikkik/articles/51d97ff70bd0da)
  - [Next\.js Pages Router と App Router のルーティング \- Qiita](https://qiita.com/Yasushi-Mo/items/865a8d6e1a063058d702)


## パッケージのインストール
### threejsインストール

```bash
# threejs インストール
npm install three

# threejs 型情報 インストール
npm install --save-dev @types/three
```


### Sass用パッケージインストール

```bash
npm install sass
```

### ress用パッケージインストール

```bash
npm install ress
```


## ESLint の設定
- ESLint 用の設定ファイルは、Next.js 導入時に追加済み (`.eslintrc.json`)
- VSCode の拡張機能導入と、設定ファイルの内容変更を行う

### 手順
#### 拡張機能
- 拡張機能（ID：dbaeumer.vscode-eslint）を導入する

#### 設定変更
- 「`.eslintrc.json`」を以下の内容に変更する

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    // importの並び順設定
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "next/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "API",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "graphql/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "ui-components/**",
            "group": "index",
            "position": "after"
          },
          {
            "pattern": "**\\.css",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "next/**"],
        // "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": false }
      }
    ],
    "import/first": "warn", // importをファイル先頭に記述
    "import/newline-after-import": "warn" // 最後のimportの後に空行を追加
  }
}
```


## Prettier の導入
- 自動整形ツール
- VSCode 側で導入する

### 手順
#### 拡張機能
- 拡張機能（ID：esbenp.prettier-vscode）を導入する

#### 設定変更
- 「.vscode/settings.json」に以下を追加する
  
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  // 保存時のアクション
  "editor.codeActionsOnSave": {
    "source.addMissingImports": "explicit",
    "source.fixAll": "explicit"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 設定ファイル配置
#### .prettierrc
- プロジェクトのトップに `.prettierrc` を作成する
- 以下を追加する

```json
{
  "tabWidth": 4,
  "semi": true,
  "singleQuote": false,
  "overrides": [
    {
      "files": ["*.json", ".prettierrc"],
      "options": {
        "tabWidth": 2
      }
    },
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "options": {
        "tabWidth": 2,
        "singleQuote": true
      }
    }
  ]
}
```

#### .prettierignore
- プロジェクトのトップに `.prettierignore` を作成する
- 以下を追加する

```
package.json
package-lock.json

# 現在のディレクトリとそのサブディレクトリに存在する全ての対象を無視
**/.git
**/node_modules
```

- 他にも除外したいものがあったら追加する



## 実行とデバッグの設定
- 「.vscode/launch.json」に以下を追加する

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "[01] Next.js: サーバー＋クライアント起動",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "- Local:.+ (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome",
        "killOnServerStop": true
      }
    },
    {
      "name": "[02] Next.js: サーバーサイドのみ起動",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "[03] Next.js: クライアントサイドのみ起動",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### Font Awesome のインストール

```bash
# コアパッケージを導入
npm install @fortawesome/fontawesome-svg-core

# アイコンパッケージの導入
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons

# React用コンポーネントの導入
npm install @fortawesome/react-fontawesome@latest
```

