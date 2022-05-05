---
id: gift-card-callbacks
title: GiftCard - Callbacks
slug: /gift-card/callbacks
sidebar_label: Callbacks
sidebar_position: 3
---

# Callbacks

Adds an event listener to the GiftCard instance. The output of the events will look something like this:

```json
{
  "cardBrand": "Visa",
  "currentState": {
    "hasErrorClass": false,
    "hasFocusClass": true,
    "isCompletelyValid": true,
    "isEmpty": false,
    "isPotentiallyValid": true
  },
  "eventType": "focusClassAdded",
  "field": "cvv",
  "previousState": {
    "hasErrorClass": false,
    "hasFocusClass": false,
    "isCompletelyValid": true,
    "isEmpty": true,
    "isPotentiallyValid": false
  }
}
```

## `cardBrandChanged()`

A new gift card brand was detected, based on the gift card number.

## `errorClassAdded()`

The gift card number field has an invalid value, and the corresponding error CSS class was added to the element.

## `errorClassRemoved()`

An invalid value on the gift card number was corrected, and the corresponding error CSS class was removed from the element.

## `escape()`

The user pressed the `Escape` key while editing the gift card number field.

## `focusClassAdded()`

The gift card number field gained focus, and the corresponding focus CSS class was added to the element.

## `focusClassRemoved()`

The gift card number field lost focus, and the corresponding focus CSS class was removed from the element.

## `submit()`

The user has triggered submission of the gift card by pressing `Enter` while editing the gift card number field.
