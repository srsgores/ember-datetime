# Ember-datetime

`date`, `time`, `month`, `year`, and `datetime-local` `<input>`s, polyfilled, and wrapped in an ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Basic Usage

```
{{date-input value=model.field inputId=controlID}}
```

(Where `model.field` corresponds to the bound field, and `inputId` corresponds to the `for` attribute of the `<label>`)

### `datetime-local` `<input>`

`datetime-local` allows for a specific time to be selected **in addition** to a date:

```
{{date-input value=model.field local=true}}
```

### Month Input

```
{{date-input value=model.field range="month"}}
```

### Week Input

```
{{date-input value=model.field range="week"}}
```

### Time Input

```
{{time-input value=model.field}
```

## Custom Ranges

Not yet implemented, as the goal of this project is to keep native and polyfilled functionalities as close as possible.

## Support

[`date` and `time` inputs currently have **70.14%** global support](http://caniuse.com/#feat=input-datetime).

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
