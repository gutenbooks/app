# gutenberg-org

A reimplementation of the Project Gutenberg content discovery mechanism utilizing React and http://gutendex.com/. This site can be demoed at https://gutenberg.netlify.com/.

## Dev Setup

This project ships with a standard docker environment. Make sure you have Docker installed on your machine.

Spin up the application:

```
docker-compose up
```

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
