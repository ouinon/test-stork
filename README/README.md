# Stork

Firstly if you've never heard of [Stork](https://en.wikipedia.org/wiki/Stork_(margarine)) butter (technically a margarine), the wordplay of this little project is entirely lost on you and that's a crying-shame.

I used to use Yeoman as a build tool but have since customized it to my own needs, [Takana](https://github.com/mechio/takana) is a significantly faster compiler for SASS and I prefer to use Apache as a web-server rather than firing up Node every time. [Atomizer](https://github.com/yahoo/grunt-atomizer/) is a really great tool from Yahoo that I have customized, great for prototyping.

__NB, Sorry there aren't more git commits__

# Future Production

Game responses should not be included in __command.js__. I think a nice way of going about this might be to include a .json file, strings could include arguments that would go onto be processed with __$parse__ at runtime.

The __returnObject__ function in command.js could be made to return a promise which could come from a DB rather than a simple object.

# Project

## Dependencies

- [ ] Stable-grid

## Structure:

- [ ] Game info as a factory
- [ ] Commands as a factory

## Layout:

- [ ] Simple input box at the bottom of the page.
- [ ] Responses appear in the middle
- [ ] Include __o-input__ as a directive.

## Functionality

- [ ] Hit return to get a response
- [ ] Get an error if the command isn't recognized