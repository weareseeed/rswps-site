---
id: props
title: Props
sidebar_position: 2
slug: /props
---

In this table we illustrate all the props that are available for the `<PaymentForm>` component.

:::note

Remember that you need to wrap your application in the `<PaymentForm>` component to use all the features of the library.

:::

## Required props

### `applicationId`

Identifies the calling form with a verified application ID generated from the [Square Application Dashboard](https://squareup.com/login?app=developer)

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm applicationId="sq0idp-Y0QZQ-Xx-Xx-Xx-Xx">
      <MyComponent />
    </PaymentForm>
  )
}
```

### `cardTokenizeResponseReceived()`

Invoked when payment form receives the result of a tokenize generation request. The result will be a valid credit card or wallet token, or an error.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm
      cardTokenizeResponseReceived={(token, verifiedBuyer) => {
        console.info('Token:', token);
        console.info('Verified Buyer:', verifiedBuyer);
      }}
    >
      {/* ... */}
    </PaymentForm>
  )
}
```

### `children`

The children of the `<PaymentForm>` component.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp(props) {
  return (
    <PaymentForm {...props}>
      <MyComponent />
    </PaymentForm>
  )
}
```

### `locationId`

Identifies the location of the merchant that is taking the payment. Obtained from the [Square Application Dashboard](https://squareup.com/login?app=developer) - Locations tab.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm locationId="LID">
      {/* ... */}
    </PaymentForm>
  )
}
```

## Required props for Digital Wallets

These props applies for Apple Pay, Google Pay and Afterpay/Clearpay

### `createPaymentRequest()`

Encapsulates the details of an Apple Pay, Google Pay, or Afterpay/Clearpay request for payment and provides a means of listening for shipping option and shipping contact changes via event listeners.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm
      createPaymentRequest={() => ({
        countryCode: "US",
        currencyCode: "USD",
        lineItems: [
          {
            amount: "22.15",
            label: "Item to be purchased",
            id: "SKU-12345",
            imageUrl: "https://url-cdn.com/123ABC",
            pending: true,
            productUrl: "https://my-company.com/product-123ABC"
          }
        ],
        taxLineItems: [
          {
            label: "State Tax",
            amount: "8.95",
            pending: true
          }
        ],
        discounts: [
          {
            label: "Holiday Discount",
            amount: "5.00",
            pending: true
          }
        ],
        requestBillingContact: false,
        requestShippingContact: false,
        shippingOptions: [
          {
            label: "Next Day",
            amount: "15.69",
            id: "1"
          },
          {
            label: "Three Day",
            amount: "2.00",
            id: "2"
          }
        ],
        // pending is only required if it's true.
        total: {
          amount: "41.79",
          label: "Total",
        },
      })}
    >
      {/* ... */}
    </PaymentForm>
  )
}
```

## Optional props

### `createVerificationDetails()`

If you want to make **Strong Customer Authentication** (we recommend it), you can use the verification details parameter, passed to the `payments.verifyBuyer()` function, for cases in which he buyer is being charged or the card is being stored on file.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm
      createVerificationDetails={() => ({
        // You can avoid amount and currency if the intent is `STORE`
        amount: '1.00',
        currencyCode: 'GBP',
        // `CHARGE` or `STORE`
        intent: 'CHARGE',
        billingContact: {
          addressLines: ['123 Main Street', 'Apartment 1'],
          familyName: 'Doe',
          givenName: 'John',
          email: 'jondoe@gmail.com',
          country: 'GB',
          phone: '3214563987',
          region: 'LND',
          city: 'London',
        },
      })}
    >
      {/* ... */}
    </PaymentForm>
  )
}
```

### `formProps`

The props that will be passed to the wrapper element element.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm
      formProps={{
        className: "my-custom-class",
      }}
    >
      {/* ... */}
    </PaymentForm>
  )
}
```

### `overrides`

Override the default payment form props. Available options are:

- `scriptSrc`: The URL of the Square Payment SDK script.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default MyApp() {
  return (
    <PaymentForm
      overrides={{
        scriptSrc: 'https://js.squareup.com/v2/paymentform', // this is an example, not real URL
      }}
    >
      {/* ... */}
    </PaymentForm>
  )
}
```
