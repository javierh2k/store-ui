# store-ui Storybook

## Install dependencies

```
#!bash
yarn

git submodule update --init --recursive
```

## start storybook dev

```
#!bash
	yarn start
```

## finish

go to http://localhost:6006

## Config Prettier/eslint

In Setttings, search settings.json open editor with this file

### settings.json

```
{
    // Set the default
    "editor.formatOnSave": false,
    // Enable per-language
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "editor.renderIndentGuides": false

}
```

Define prettier with Control + shift + p
Search format-document

### Visual Studio Code

> install extension visual studio code eslint
> install extension visual studio code prettier
