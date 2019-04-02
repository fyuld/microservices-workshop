# Resources
===

Resources and verbs are main concepts in every RESTful service. Following directory contains resources, each resource in turn should occupy single file, for example `customers.ts` for Customers reosurce, `products.ts` for Products resource. As a rule of thumb, resources should always be plural `customers` instead of `customer` and so on.

In turn every resource module will contain implementation of the endpoints as functions, for example, let's consider implementation of following API:

* `GET /health`: As responsible developers we have to implement a health check, which will make sure that service and it's immediate dependencies are live. If service is down - we want it to be rebooted, logs written, and stakeholders notified.
* `GET /unicorns`: 






In turn every resource module contains up to four functions that implement it's verbs, they should be named according to CRUD:

* `readResource`: Represented by HTTP method `GET', used to read data.
* `createResource`: Represented by HTTP method `POST`, used to create data.
* `updateResource`: Represented by HTTP method `PUT`, put has to be idempotent which is a fancy word to say that every time you invoke `updateResource` method with same parameters: it should give you same exact result.
* `deleteResource`: Represented by HTTP method `DELETE`.

### Example

Let's say we sell plushy unicorns, we would then have a resource `<projectRoot>/src/resources/plushy-unicorns.ts` which would in turn contain for methods:

* `readPlushyUnicorn(id)`: Will return a JSON structure for a given id. 
* `createPlushyUnicorn(color, size)`: Will create a new plushy unicorn with a given size and color.
* `updatePlushyUnicorn(id, changes)`: Will update a given plushy unicorn with a given size and color.
* `deletePlushyUnicorn(id)`: Will delete a given plushy unicorn by id.


