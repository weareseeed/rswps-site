---
id: installation
title: Installation
sidebar_position: 1
slug: /installation
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::tip

Use **[react.new](https://react.new)** to create a new React project and test the package on your browser!

:::

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >=14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installation

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

## Usage

Wrap your app in our provider to be able to access to the SDK in any part of your app.

```tsx
import { PaymentsForm } from 'react-square-web-payments-sdk';

export default function App() {
  return (
    <PaymentsForm {...props}>
      <MyApp />
    </PaymentsForm>
  );
}
```

Now you can use any of the payment methods supported by the SDK.

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

## Problems?

Ask for help on our [GitHub repository](https://github.com/weareseeed/react-square-web-payments-sdk).
