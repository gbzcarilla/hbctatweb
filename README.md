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

$ bun run dev

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

# remove a local branch
$ git branch -d feat/old-feature-branch
# force delete a local branch with unmerged changes
$ git branch -D feat/branch-with-unmerged-changes


```


``` sh
# Create frontend
$ bun create vite@latest
# name it "frontend", choose React, Typescript...
# 
$ cd frontend
$ bun install
# create package script
$ vi frontend/package.json
```
``` js
"scripts":
  "dev": "bunx --bun vite",
  "build": "bunx --bun vite build",
```

``` sh
$ bun run dev
```


## TailwindCSS
``` SH
#$ npm install tailwindcss @tailwindcss/vite
$ bun add tailwindcss @tailwindcss/vite
```

``` js
// vite.config.ts
import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

``` css
/* src/input.css */
@import "tailwindcss";
```




## Shadcn-UI
``` sh
#$ npx shadcn@latest init
$ bunx --bun shadcn@latest init
```

### ... lookup up 3 config file changes
``` js
// tsconfig.json
"compilerOptions": {
	"baseUrl": ".",
	"paths": {
		"@/*": ["./src/*"]
	}
}
```
``` js
// tsconfig.app.json
"compilerOptions": {
	// ...
	"baseUrl": ".",
	"paths": {
		"@/*": ["./src/*"]
	}
}
```

## Update `vite.config.ts`
``` sh
$ npm install -D @types/node
```
``` js
// vite.config.ts
import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### add shadcn components
``` sh
$ bunx --bun shadcn@latest add checkbox input toggle button label switch select radio-group alert dialog tooltip card popover sonner form table calendar command
```

### sample for button
``` tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App
```




# tanstack
``` sh
$ bun add @tanstack/react-router @tanstack/query @tanstack/react-table
#$ npm install @tanstack/router @tanstack/react-query @tanstack/react-table
```


npm install tailwindcss @tailwindcss/cli

vi src/input.css
@import "tailwindcss";

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css

vi src/index.html
<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="./output.css" rel="stylesheet">
</head>
<body>
	<h1 class="text-3xl font-bold">
		tester
	</h1>
</body>
</html>




bun add @tanstack/react-router @tanstack/react-router-devtools
bun add -D @tanstack/router-plugin

pnpm add @tanstack/react-router @tanstack/react-router-devtools
pnpm add -D @tanstack/router-plugin


vi vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter} from '@tanstack/router-plugin/vite'

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react(),
		// ...,
	],
})