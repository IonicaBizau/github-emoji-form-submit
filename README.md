
# github-emoji-form-submit

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/github-emoji-form-submit.svg)](https://www.npmjs.com/package/github-emoji-form-submit) [![Downloads](https://img.shields.io/npm/dt/github-emoji-form-submit.svg)](https://www.npmjs.com/package/github-emoji-form-submit) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Autocomplete selected Emoji when submitting forms on GitHub.com.


When leaving comments, opening issues etc. you can use
`:emoji:`. That's pretty neat. But often, it happened
to me to write the comment and add an emoji at the end.
So, I was writing my comment and adding the emoji.
But since I was seeing the selected emoji, I pressing
<kbd>Ctrl</kbd> + <kbd>Enter</kbd> to submit my comment
and obviously the result was looking like: *bla, bla,
bla :emoji* (notice the missing closing colon).

This userscript will take care of my emoji to be
submitted as well when submitting the form while
the emoji suggestion list is opened. :tada: :fireworks:

## Before `:smile_c`
![](http://i.imgur.com/8Nvdo2d.png)

## After `:smile_cat:`
![](http://i.imgur.com/r5khZ3r.png)

## Installation

Use [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (in Chrome/Chromium)
or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), if you are using Firefox and then add the userscript
you can find in [`lib/index.js`](/lib/index.js).


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
