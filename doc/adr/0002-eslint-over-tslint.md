# 2. ESLint over TSLint

Date: 2019-04-02

## Status

Accepted

## Context

JavaScript being a free-for-all platform needs a system to enforce a certain style. The de-facto standards for TypeScript projects was TSLint, but in recent announcement by Palantir - they are discountinuing it’s development in favor of ESLint.

## Decision

To use ESLint on the TypeScript projects

## Consequences

Marginal if versioning is hardcoded.

## Risk Profile

There is a risk that versions of the plugins versus the language will drift. This risk is mitigated by hardcoding versions.

## Re-evaluation Criteria

When either Palantir or ESLint change decision or discontinue their services.
