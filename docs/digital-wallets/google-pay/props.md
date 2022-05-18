---
id: card-props
title: GooglePay - Props
slug: /google-pay/props
sidebar_label: Props
sidebar_position: 2
---

# Props

## `buttonColor`

Set the button background color to black or white. For more details about the available options, see [GooglePayButtonColor](https://developer.squareup.com/reference/sdks/web/payments/enums/GooglePayButtonColor).

Available values: `default`, `black` & `white`.

```tsx
import { GooglePay, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GooglePay buttonColor="black" />
    </PaymentForm>
  );
}
```

## `buttonSizeMode`

Set fitting mode to dynamically size button or fixed size. For more details about the available options, see [GooglePayButtonSizeMode](https://developer.squareup.com/reference/sdks/web/payments/enums/GooglePayButtonSizeMode).

Available values: `static` & `fill`.

```tsx
import { GooglePay, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GooglePay buttonSizeMode="fill" />
    </PaymentForm>
  );
}
```

## `buttonType`

Render a long or short button. For more details about the available options, see [GooglePayButtonType](https://developer.squareup.com/reference/sdks/web/payments/enums/GooglePayButtonType).

Available values: `long` & `short`.

```tsx
import { GooglePay, PaymentForm } from 'react-square-web-payments-sdk';

export default function MyApp() {
  return (
    <PaymentForm>
      <GooglePay buttonType="long" />
    </PaymentForm>
  );
}
```
