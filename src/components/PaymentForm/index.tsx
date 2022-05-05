// Dependencies
import * as React from 'react';
import { PaymentForm as SdkPaymentForm } from 'react-square-web-payments-sdk';

export default function PaymentForm({ children }: { children: React.ReactNode }) {
  return (
    <SdkPaymentForm
      applicationId="sandbox-sq0idb-7KE3zXHZLG_X5EmLLptTYw"
      cardTokenizeResponseReceived={(token, buyer) => {
        console.info({ token, buyer });
      }}
      createPaymentRequest={() => ({
        countryCode: 'US',
        currencyCode: 'USD',
        total: {
          amount: '100',
          label: 'Total',
        },
      })}
      createVerificationDetails={() => ({
        amount: '1.00',
        /* collected from the buyer */
        billingContact: {
          addressLines: ['123 Main Street', 'Apartment 1'],
          familyName: 'Doe',
          givenName: 'John',
          countryCode: 'GB',
          city: 'London',
        },
        currencyCode: 'GBP',
        intent: 'CHARGE',
      })}
      locationId="4P550BZQ0TQZA"
    >
      {children}
    </SdkPaymentForm>
  );
}
