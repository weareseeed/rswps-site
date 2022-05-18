---
id: 'migrating-from-v2-to-v3'
title: Migrating from v2 to v3
sidebar_position: 99
---

Since we launch our v2 we have made some improvements and added new features, in order to be able to migrate from v2 to v3 you need to do some changes to your code.

```diff
- import SquarePaymentsForm, { CreditCardInput } from 'react-square-web-payments-sdk'
+ import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk'

const MyPaymentForm = () => (
-  <SquarePaymentsForm>
+  <PaymentForm>
-    <CreditCardInput />
+    <CreditCard />
+  </PaymentForm>
-  </SquarePaymentsForm>
);

export default MyPaymentForm;
```

But also we change the way we pass callbacks to the credit card input.

```diff
<CreditCard
-  cardBrandChanged={(event) => console.info(event)}
+  callbacks={{
+    cardBrandChanged: (event) => console.info(event),
+  }}
/>
```

And that's all! The rest of the new features can be seen in all the docs and the examples.
