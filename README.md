# vite-react-test-guide

构成
- pnpm
- typescript
- vite
- react/react-dom/react-router/redux
- jest/react test library/ts-jest
- eslint/prettier/commitlint/husky
- ...

> 暂时只是为了尝试自己搭建React测试环境和练习验证测试代码等，后续会挪到Monorepo仓库。


## husky

```shell
# https://typicode.github.io/husky/#/
pnpm i husky -D 
pnpm exec husky install 
npm set-script prepare "husky install"
pnpm exec husky add .husky/pre-commit "pnpm test"
pnpm exec husky add .husky/commit-msg 'pnpm commitlint --edit "$1"'
pnpm exec husky add .husky/pre-push "pnpm test"
pnpm exec husky add .husky/post-merge "pnpm install"
```
