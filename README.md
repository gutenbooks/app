# gutenberg-org
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A reimplementation of the Project Gutenberg content discovery mechanism utilizing React and http://gutendex.com/. This site can be demoed at https://gutenberg.netlify.com/.

## Dev Setup

This project ships with a standard docker environment. Make sure you have Docker installed on your machine.

Spin up the application:

```
docker-compose up
```

## Contributing

1. Progress on the project is [tracked here](https://trello.com/b/s4beyzYG/gutenbergorg)
1. This project uses Commitizen. Please format all your commits with it so we can generate a CHANGELOG easily.

## Release

The standard release command for this project is:
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

This command will:

1. Generate/update the Changelog
1. Bump the package version
1. Tag & pushing the commit


e.g.

```
npm version 1.2.17
npm version patch // 1.2.17 -> 1.2.18
```


## TODO

- Investigate [Goodreads API](https://www.goodreads.com/api/index)
- Investigate [Openlibrary.org Metadata](https://openlibrary.org/developers/api)
