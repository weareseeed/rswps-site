---
id: introduction
title: Introduction
slug: /
sidebar_position: 1
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

⚡️ A wrapper that will help you take payments using Square in no time.

⏱ Building custom components every time you need to take a payment is a pain.

✍️ This wrapper will help you easily create PCI-compliant inputs to accept payments online with the Square Payments API. It supports the following payment methods: credit and debit cards, ACH bank transfers, Apple Pay, Google Pay, Gift Cards and Afterpay/Clearpay.

![Credit card example](/img/introduction.png)

## Fast Track ⏱️

Play to learn `react-square-web-payments-sdk` in 5 minutes!

Install [Node.js](https://nodejs.org/en/download/) and create a new React project:

:::tip

Use **[react.new](https://react.new)** to create a new React project and test the package on your browser!

:::

Install the package on your project:

````mdx-code-block
<Tabs>
<TabItem value="npm">

```bash
npm install --save react-square-web-payments-sdk
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add react-square-web-payments-sdk
```

</TabItem>
<TabItem value="pnpm">

```bash
pnpm add react-square-web-payments-sdk
```

</TabItem>
</Tabs>
````

Wrap your app in our provider to have access to the SDK from wherever within it.

```tsx
import { PaymentForm } from 'react-square-web-payments-sdk';

export default function App() {
  return (
    <PaymentForm {...props}>
      <MyApp />
    </PaymentForm>
  );
}
```

You can now use any of the SDK's supported payment methods.

```tsx
import { CreditCard } from "react-square-web-payments-sdk";

export default HomePage() {
  return (
    <>
      <CreditCard />
    </>
  )
}
```

## Staying informed

- [GitHub](https://github.com/weareseeed/react-square-web-payments-sdk)
- [Twitter](https://twitter.com/seeedsocial)
- [Blog](https://seeed.us/blog-digital-transformation-ecommerce-tips/)

## Something missing?

Please [file an issue](https://github.com/weareseeed/react-square-web-payments-sdk) for us or send a tweet referencing the [@seeedsocial](https://twitter.com/seeedsocial) Twitter account if you notice flaws with the documentation or have recommendations on how to enhance the documentation or the project in general.
