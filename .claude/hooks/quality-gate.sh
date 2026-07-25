#!/usr/bin/env bash
set -uo pipefail

cd "$CLAUDE_PROJECT_DIR" 2>/dev/null || exit 0

json_escape() {
  local s=$1
  s=${s//\\/\\\\}
  s=${s//\"/\\\"}
  s=${s//$'\n'/\\n}
  printf '%s' "$s"
}

type_check_output=$(npm run type-check 2>&1)
type_check_status=$?

lint_output=""
lint_status=0
if [ "$type_check_status" -eq 0 ]; then
  lint_output=$(npm run lint 2>&1)
  lint_status=$?
fi

if [ "$type_check_status" -ne 0 ] || [ "$lint_status" -ne 0 ]; then
  reason="Quality gate falhou."
  if [ "$type_check_status" -ne 0 ]; then
    reason="$reason npm run type-check falhou:
$(echo "$type_check_output" | tail -40)"
  fi
  if [ "$lint_status" -ne 0 ]; then
    reason="$reason
npm run lint falhou:
$(echo "$lint_output" | tail -40)"
  fi
  printf '{"decision":"block","reason":"%s"}\n' "$(json_escape "$reason")"
  exit 0
fi

exit 0
