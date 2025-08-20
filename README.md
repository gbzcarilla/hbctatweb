# hbctatweb

Bun Hono Vite React


``` sh

# install bun
$ curl -fsSL https://bun.com/install | bash # for macOS, Linux, and WSL

# install hono 
$ bun install hono

# install zod validation library
$ bun install zod

# 
$ bun add @hono/zod-validator


```

``` sh

# git-related setup
$ git init
$ vi .gitignore
...
$ git branch -m master main
$ git config --global user.name gbz
$ git config --global user.email gbzcarilla@gmail.com
$ git config pull.rebase true

$ git remote -v
$ git remote add origin https://github.com/gbzcarilla/hbctatweb.git
$ git remote set-url git@github.com:gbzcarilla/hbctatweb.git



$ git pull origin main
# ... resolve conflicts here...
$ git push --set-upstream origin main

# create the feature branch
$ git checkout -b feat/new-feature-branch
# do the feature changes
# switch to main branch
$ git checkout main
# pull latest changes from remote main branch
$ git pull origin main
# probably do a rebase here if there are changes from the remote main
...
# merge feature branch into main
$ git merge feat/new-feature-branch
# push the updated main branch
$ git push origin main

```