---
id: ach-callbacks
title: ACH - Callbacks
slug: /ach/callbacks
sidebar_label: Callbacks
sidebar_position: 3
---

# Callbacks

Adds an event listener to the instance of ach. See the Plaid documentation for supported event types and expected metadata. https://plaid.com/docs/#onevent-callback. The output of the events will look something like this:

```json
{
  "type": "OPEN",
  "detail": {
    "error_code": null,
    "error_message": null,
    "error_type": null,
    "exit_status": null,
    "institution_search_query": null,
    "link_session_id": "dc9cf1f9-4b41-4e40-9b6f-81cf73e6dfad",
    "mfa_type": null,
    "view_name": "CONSENT",
    "request_id": null,
    "timestamp": "2022-05-05T00:23:33.554Z"
  }
}
```

## `bankIncomeInsightsCompleted()`

The user has completed the Assets and Bank Income Insights flow.

## `closeOauth()`

The user closed the third-party website or mobile app without completing the OAuth flow.

## `error()`

A recoverable error occurred in the Link flow, see the `error_code` metadata.

## `exit()`

The user has exited without completing the Link flow and the [onExit](https://plaid.com/docs/link/web/#onexit) callback is fired.

## `failOauth()`

The user encountered an error while completing the third-party's OAuth login flow.

## `handoff()`

The user has exited Link after successfully linking an Item.

## `matchedSelectInstitution()`

The user selected an institution that was presented as a matched institution.

## `matchedSelectVerifyMethod()`

The user selected a verification method for a matched institution.

## `open()`

The user has opened Link.

## `openMyPlaid()`

The user has opened my.plaid.com. This event is only sent when Link is initialized with Assets as a product

## `openOauth()`

The user has navigated to a third-party website or mobile app in order to complete the OAuth login flow.

## `searchInstitution()`

The user has searched for an institution.

## `selectBrand()`

The user selected a brand, e.g. Bank of America. The `SELECT_BRAND` event is only emitted for large financial institutions with multiple online banking portals.

## `selectDegradedInstitution()`

The user selected an instititon with a `DEGRADED` health status and were shown a corresponding message.

## `selectDownInstitution()`

The user selected an instititon with a `DOWN` health status and were shown a corresponding message.

## `selectInstitution()`

The user selected an institution.

## `submitCredentials()`

The user has submitted credentials.

## `submitDocuments()`

The user is being prompted to submit documents for an Income verification flow.

## `submitDocumentsError()`

The user encountered an error when submitting documents for an Income verification flow.

## `submitMfa()`

The user has submitted MFA.

## `transitionView()`

The `TRANSITION_VIEW` event indicates that the user has moved from one view to the next.
