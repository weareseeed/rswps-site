---
id: card-props
title: CreditCard - Props
slug: /card/props
sidebar_label: Props
sidebar_position: 2
---

# `<CreditCard>` - Props

## `buttonProps`

Props to be passed to the `<button>` element. The following props are not supported: `aria-disabled`, `disabled`, `type`. Since we use that to control the disabled state of the button, we don't support it.

But in addition to this we offer a `isLoading` prop to control the loading state of the button a.k.a disabling the button.

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  const onClick = () => {
    // do something
  };

  return (
    <PaymentForm>
      <CreditCard
        buttonProps={{
          isLoading: true,
          onClick: onClick,
        }}
      />
    </PaymentForm>
  );
}
```

## `callbacks`

Adds an event listener to the instance of the Card element. You can see [**this page**](/docs/card/callbacks) for more details.

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  return (
    <PaymentForm>
      <CreditCard
        callbacks={{
          cardBrandChanged(event) {
            console.info(event);
          },
          focusClassAdded(event) {
            console.info(event);
          },
        }}
      />
    </PaymentForm>
  );
}
```

## `children`

Make it possible to put any component inside. If children is/are given then `render` is not applied.

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  return (
    <PaymentForm>
      <CreditCard>Pay $10</CreditCard>
    </PaymentForm>
  );
}
```

## `focus`

Sets the DOM focus of one of the input fields within the credit card form.

For more details about the available options, see [CardFieldNames](https://developer.squareup.com/reference/sdks/web/payments/enums/CardFieldNames).

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  return (
    <PaymentForm>
      <CreditCard
        focus="cardNumber" // Can be cardNumber, cvv, expirationDate or postalCode
      />
    </PaymentForm>
  );
}
```

## `recalculateSize()`

Recalculates the size of the card form.

The Card component normally automatically resizes based on the size of the buyer's browser, however if the Card component is contained with an element that has a computed style property of `display: none`, then the Card component will no longer have a defined width and therefore will not properly resize between mobile and desktop configurations. Upon being displayed again, the Card component will not automatically update its size to match the browser window.

This method `recalculateSize()` can be used to handle this edge case by forcing the Card component to recalculate its size and display appropriately for mobile or desktop.

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  // Will trigger recalculation of the Card component's size.
  const myCustomCallback = () => {
    // do something
  };

  return (
    <PaymentForm>
      <CreditCard recalculateSize={() => myCustomCallback()} />
    </PaymentForm>
  );
}
```

## `render()`

Make it possible to put any component inside. If render is/are given then `children` and `buttonProps` is not applied.

### Example

```tsx
import { CreditCard } from 'react-square-web-payments-form';

export default function MyApp() {
  return (
    <PaymentForm>
      {/* Render your own component using our component as a Prop */}
      <CreditCard render={({ Button }) => <Button>Pay $10</Button>} />
    </PaymentForm>
  );
}
```
