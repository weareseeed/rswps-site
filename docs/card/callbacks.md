---
id: card-callbacks
title: Credit card callbacks
slug: /card/callbacks
sidebar_label: Callbacks
sidebar_position: 3
---

# `<CreditCard>` - Callbacks

Adds an event listener to the instance of the Card element. The output of the events will look something like this:

```json
{
  "type": "cardBrandChanged",
  "detail": {
    "cardBrand": "masterCard",
    "currentState": {
      "hasErrorClass": false,
      "hasFocusClass": true,
      "isCompletelyValid": false,
      "isEmpty": false,
      "isPotentiallyValid": true
    },
    "eventType": "cardBrandChanged",
    "field": "cardNumber",
    "previousState": {
      "hasErrorClass": false,
      "hasFocusClass": true,
      "isCompletelyValid": false,
      "isEmpty": true,
      "isPotentiallyValid": true
    }
  }
}
```

## `cardBrandChanged()`

Callback function that is called when the payment form detected a new likely credit card brand based on the card number.

## `errorClassAdded()`

Callback function that is called when a form field has an invalid value, and the corresponding error CSS class was added to the element.

## `errorClassRemoved()`

Callback function that is called when an invalid value on a form field was corrected, and the corresponding error CSS class was removed from the element.

## `escape()`

Callback function that is called when the user pressed the `Escape` key while editing a field.

## `focusClassAdded()`

Callback function that is called when a form field gained focus, and the corresponding focus CSS class was added to the element

## `focusClassRemoved()`

Callback function that is called when a form field lost focus, and the corresponding focus CSS class was removed from the element

## `postalCodeChanged()`

Callback function that is called when the current value of the postal code form field changed.

## `submit()`

Callback function that is called when the user has triggered submission of the form by pressing "Enter" while editing a field.
