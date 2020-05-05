#!/usr/bin/env bash

rm -rf dist
# 1. Set up a worktree in directory dist checked out on branch gh-pages
git worktree add -b gh-pages dist/timezone-picker-runner gh-pages
# 2. Build whatever needs to be in dist however you like
ng build --baseHref=/ng-timezone-picker/ timezone-picker-runner
# 3. Add everything in dist
(cd dist/timezone-picker-runner; git add .)
# 4. Commit, with some nice message to link to sources commit
(cd dist/timezone-picker-runner; git commit -m "Build output as of $(git log '--format=format:%H' master -1)")
# 5. Push
git push origin gh-pages
