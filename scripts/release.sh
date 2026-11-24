#!/usr/bin/env bash
#
# 一键发版：构建 → 升版本号 → 提交（含 dist）→ 打 tag → 推 main 与 tag。
#
# 用法：
#   ./scripts/release.sh v0.6.0
#
# 为什么 dist 要入库：三个下游都走 git+https 安装，只会拿到仓库里提交过的 dist/，
# 所以每次发版必须把构建产物一起提交。
#
# 为什么要求工作区干净：本脚本会用 git add -A 把 npm run build 重新生成的
# dist/ 一并提交。如果工作区本来就有没提交的改动，它们会被裹进 release commit，
# 之后再想拆开就很难了。所以发版前必须先提交功能改动。
set -euo pipefail

VERSION="${1:?用法: ./scripts/release.sh v0.6.0}"
[[ "$VERSION" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]] || {
  echo "版本号必须形如 v0.6.0，收到：$VERSION" >&2
  exit 1
}

cd "$(dirname "$0")/.."
cd "$(git rev-parse --show-toplevel)"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
[ "$BRANCH" = "main" ] || {
  echo "发版只能在 main 上进行，当前分支：$BRANCH" >&2
  exit 1
}

if [ -n "$(git status --porcelain)" ]; then
  echo "工作区不干净，先把改动提交掉再发版：" >&2
  git status --short >&2
  exit 1
fi

if git rev-parse -q --verify "refs/tags/$VERSION" >/dev/null; then
  echo "tag $VERSION 已存在" >&2
  exit 1
fi

echo "==> 构建"
npm run build

echo "==> 升级版本号到 ${VERSION#v}"
npm version "${VERSION#v}" --no-git-tag-version

echo "==> 提交 release commit"
git add -A
git commit -m "chore(release): 🔖 ${VERSION}" -m "构建产物一并入库，供下游 git+https 安装。"

echo "==> 打 tag"
git tag -a "$VERSION" -m "$VERSION"

echo "==> 推送"
git push origin main
git push origin "$VERSION"

cat <<EOF

已发布 ${VERSION}。三个下游逐个执行（必须先删已安装的副本，否则 lock 会沿用旧 commit）：

  cd media-dedupe/frontend      # video_cut/frontend、video_library/go/frontend 同理
  # 改 package.json 里的 #tag
  rm -rf node_modules/xwang-ui && npm update xwang-ui
  node -p "require('./node_modules/xwang-ui/package.json').version"
  npm run build
EOF
