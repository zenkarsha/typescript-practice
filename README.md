# Typescript practice

#### init

```bash
npm i typescript -g

cd /your_folder
tsc --init
```

#### setting

edit `tsconfig.json`:

```json
{
  "compilerOptions": {
    ...

    "module": "commonjs",
    "rootDir": "src/",
    "outDir": "dist/",
    "sourceMap": true,
    "target": "es5",
    "lib": ["es2015", "DOM"],

    ...
  }
}
```

#### dev

```bash
tsc
```

or `cmd + B` in Sublime Text (mac)
