# 3. Using AutoFormatter for TypeScript - Prettier

Date: 2019-04-02

## Status

Accepted

## Context

Similar to decision 0002, team can be more productive when style of JavaScript and TypeScript is enforced. Prettier provides an automatic formatting options, which will make it much faster to write compliant with styleguide code.

## Decision

To use Prettier along with ESLint to enforce compliance with code styleguide.

## Consequences

Team will be able to leverage auto-parsing capabilities of prettier to write compliant code.
Team will have problems in certain parts to write code with custom formatting. Which can be argued is not-recommended.

## Risk Profile

Prettier is NPM module and it shares risk with being in conflict with other packages when versions drift. This is mitigated by hardcoding exact versions.

## Re-evaluation Criteria

When something better coming up.
Team doesn't find the tool more productive.
