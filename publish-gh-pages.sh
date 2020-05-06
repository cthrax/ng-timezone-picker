#!/usr/bin/env bash

rm -rf dist
# 1. Set up a worktree in directory dist checked out on branch gh-pages
git worktree add -f dist gh-pages
# 2. Build whatever needs to be in dist however you like
ng build timezone-map-picker && ng build timezone-ng-select-picker && ng build --baseHref=/ng-timezone-picker/timezone-picker-runner timezone-picker-runner
# 3. Add everything in dist
(cd dist; git add .)
# 4. Commit, with some nice message to link to sources commit
(cd dist; git commit -m "Build output as of $(git log '--format=format:%H' master -1)")
# 5. Push
git push origin gh-pages
