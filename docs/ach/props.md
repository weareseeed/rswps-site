---
id: ach-props
title: ACH - Props
slug: /ach/props
sidebar_label: Props
sidebar_position: 2
---

# Props

## `accountHolderName`

Given name and surname of the bank account holder

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach accountHolderName="John Doe" />
    </PaymentForm>
  );
}
```

## `redirectURI`

The URI to redirect back to after Plaid authentication is complete.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach redirectURI="https://example.com/" />
    </PaymentForm>
  );
}
```

## `transactionId`

Identifier for the transaction to return to after redirect, appended as a query parameter to the redirectURI.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach transactionId="12345" />
    </PaymentForm>
  );
}
```

## `callbacks`

Adds an event listener to the instance of the Card element. You can see [**this page**](/docs/ach/callbacks) for more details.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach
        accountHolderName="John Doe"
        redirectURI="https://example.com/"
        transactionId="12345"
        callbacks={{
          bankIncomeInsightsCompleted(event) {
            console.info(event);
          },
          closeOauth(event) {
            console.info(event);
          },
        }}
      />
    </PaymentForm>
  );
}
```

## `buttonProps`

Props to be passed to the `<button>` element. The following props are not supported: `aria-disabled`, `disabled`, `type`. Since we use that to control the disabled state of the button, we don't support it.

But in addition to this we offer a `isLoading` prop to control the loading state of the button a.k.a disabling the button.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  const onClick = () => {
    // do something
  };

  return (
    <PaymentForm>
      <Ach
        accountHolderName="John Doe"
        redirectURI="https://example.com/"
        transactionId="12345"
        buttonProps={{
          isLoading: true,
          onClick: onClick,
        }}
      />
    </PaymentForm>
  );
}
```

## `children`

The children of the button to override icon and text, you can put any component inside the button.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach accountHolderName="John Doe" redirectURI="https://example.com/" transactionId="12345">
        Pay with ACH
      </Ach>
    </PaymentForm>
  );
}
```

## `svgProps`

Props to be passed to the `<svg>` element.

```tsx
import { Ach, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <Ach
        accountHolderName="John Doe"
        redirectURI="https://example.com/"
        transactionId="12345"
        svgProps={{ fill: 'currentColor' }}
      />
    </PaymentForm>
  );
}
```
