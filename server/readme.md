# API Endpoints

## Products

### Get all products

- **Endpoint:** `/products`
- **Method:** `GET`
- **Authorization:** Required (User or Admin)
- **Description:** Get a list of all products.

### Get product by ID

- **Endpoint:** `/products/:id`
- **Method:** `GET`
- **Authorization:** Required (User or Admin)
- **Description:** Get details of a specific product by its ID.

### Create a new product

- **Endpoint:** `/products`
- **Method:** `POST`
- **Authorization:** Required (Admin)
- **Description:** Create a new product.

### Update a product by ID

- **Endpoint:** `/products/:id`
- **Method:** `PUT`
- **Authorization:** Required (Admin)
- **Description:** Update details of a specific product by its ID.

### Delete a product by ID

- **Endpoint:** `/products/:id`
- **Method:** `DELETE`
- **Authorization:** Required (Admin)
- **Description:** Delete a specific product by its ID.

## Users

### User Registration

- **Endpoint:** `/users/register`
- **Method:** `POST`
- **Authorization:** Not Required
- **Description:** Register a new user.

### User Login

- **Endpoint:** `/users/login`
- **Method:** `POST`
- **Authorization:** Not Required
- **Description:** Authenticate and receive a JWT token for further authorization.

## Miscellaneous

### Test Endpoint

- **Endpoint:** `/test`
- **Method:** `GET`
- **Authorization:** Not Required
- **Description:** A test endpoint that doesn't require authentication.
