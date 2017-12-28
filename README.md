# Tikigram - React integration with Instagram

## Overview
A simple, React app with a Rails backend to view Instagram images of Tiki. Once signed up via OAuth, users can view a gallery of Tiki images and save them to their personal library. Favorited images can be removed from the favorites list. 

## Requirements

- Rails

## Installation
1. [Fork and clone](https://help.github.com/articles/cloning-a-repository/) this repository to your local environment.

2. Install the needed gems:

```
$ bundle install
```

3. Migrate the database:

```
$ rails db:migrate
```

4. You're ready to run the app in a local server. You will need to run the Rails server as well as the Webpack dev server. Open two tabs in your terminal and run the following commands

```
- in one tab
$ rails server

- in the other tab
$ webpack-dev-server

```

5. Navigate to http:localhost:3000 to get started.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/fuzzylita/tiki_gram. 

## License

This application is available as open source under the terms of the [MIT License](https://github.com/fuzzylita/tiki_gram/blob/master/LICENSE).