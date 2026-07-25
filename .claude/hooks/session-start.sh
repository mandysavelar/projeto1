#!/usr/bin/env bash
set -euo pipefail

cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || exit 0

json_escape() {
  local s=$1
  s=${s//\\/\\\\}
  s=${s//\"/\\\"}
  s=${s//$'\n'/\\n}
  printf '%s' "$s"
}

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  exit 0
fi

branch=$(git branch --show-current 2>/dev/null || echo "(detached)")
dirty_count=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
ahead_behind=$(git rev-list --left-right --count HEAD...@{u} 2>/dev/null || echo "")

status_line="Branch: $branch"
if [ "$dirty_count" -gt 0 ]; then
  status_line="$status_line | $dirty_count arquivo(s) modificado(s)/não commitado(s)"
else
  status_line="$status_line | working tree limpo"
fi

if [ -n "$ahead_behind" ]; then
  ahead=$(echo "$ahead_behind" | cut -f1)
  behind=$(echo "$ahead_behind" | cut -f2)
  if [ "$ahead" != "0" ] || [ "$behind" != "0" ]; then
    status_line="$status_line | $ahead à frente / $behind atrás do upstream"
  fi
fi

pr_line=""
if command -v gh >/dev/null 2>&1; then
  pr_summary=$(gh pr list --state open --json number,title --template '{{range .}}#{{.number}} {{.title}}{{"\n"}}{{end}}' 2>/dev/null || true)
  if [ -n "$pr_summary" ]; then
    pr_count=$(echo "$pr_summary" | grep -c . || true)
    pr_line="PRs abertos: $pr_count"
  fi
fi

message="$status_line"
if [ -n "$pr_line" ]; then
  message="$message | $pr_line"
fi

printf '{"systemMessage":"%s"}\n' "$(json_escape "$message")"
