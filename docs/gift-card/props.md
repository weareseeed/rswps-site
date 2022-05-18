---
id: gift-card-props
title: GiftCard - Props
slug: /gift-card/props
sidebar_label: Props
sidebar_position: 2
---

# Props

## `buttonProps`

Props to be passed to the `<button>` element. The following props are not supported: `aria-disabled`, `disabled`, `type`. Since we use that to control the disabled state of the button, we don't support it.

But in addition to this we offer a `isLoading` prop to control the loading state of the button a.k.a disabling the button.

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  const onClick = () => {
    // do something
  };

  return (
    <PaymentForm>
      <GiftCard
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

Adds an event listener to the GiftCard instance. You can see [**this page**](/docs/gift-card/callbacks) for more details.

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GiftCard
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

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GiftCard>Pay $10 with Gift Card</GiftCard>
    </PaymentForm>
  );
}
```

## `focus`

Sets the DOM focus of one of the input fields within the GiftCard form.

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GiftCard
        focus="cardNumber" // Can be cardNumber, cvv, expirationDate or postalCode
      />
    </PaymentForm>
  );
}
```

## `includeInputLabels`

Render card form with input labels adjacent to corresponding input field

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GiftCard includeInputLabels />
    </PaymentForm>
  );
}
```

## `render()`

Make it possible to put any component inside. If render is/are given then `children` and `buttonProps` is not applied.

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      {/* Render your own component using our component as a Prop */}
      <GiftCard render={({ Button }) => <Button>Pay $10</Button>} />
    </PaymentForm>
  );
}
```

## `style`

A map of .css classes and values that customize the style of the input fields

```tsx
import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GiftCard
        style={{
          input: {
            fontSize: '14px',
          },
          'input::placeholder': {
            color: '#771520',
          },
        }}
      />
    </PaymentForm>
  );
}
```
