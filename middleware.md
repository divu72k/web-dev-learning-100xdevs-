# Middlewares:
- **middleware** is a function which has the access to the **request** object, **response** object and the **next** function in the application's lifecycle.
- These perform tasks such as:
  (i) Modifying the request or response objects.
  (ii) Ending the request-response cycle.
  (iii) Calling the next middleware function in the stack.
- use **app.use()** to initialize a middleware and write the logic inside it.

---
## Modifying the requests:
```
app.use(function(req, res, next) {
    req.name = "harkirat"
    next();
})

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
```

Because of the middleware, the output will include 'harkirat' in the frontend.

---
## Ending the request/response cycle:
```
app.use(function(req, res, next) {
    res.json({
        message: "You are not allowed"
    })
})

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
```
no matter what the input is, the output will be 'You are not allowed'.

---
## Calling the next middleware function in the stack:
```
app.use(function(req, res, next) {
    console.log("request received");
    next();
})

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});
```

- if the initialization is below a path, that path will run without the middleware.
- we can also send the middleware as one of the inputs on the path's code:
  ```
  app.get("/sum", middleware, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
  });
  ```
---

- Route-specific middleware in Express.js refers to middleware functions that are applied only to specific routes or route groups, rather than being used globally across the entire application.
```
const express = require('express');
const app = express();

// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

