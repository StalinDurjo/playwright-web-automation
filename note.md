## Wordpress

Login Functionality:

- users can log in with valid credentials.
- users cannot log in with invalid credentials.
- the "Remember Me" option keeps the user logged in across sessions.
- login attempts are limited after a certain number of failed attempts.
- password reset functionality works as expected.

Content Management:

- administrators can create, edit, and delete posts and pages.
- content is displayed correctly on the front end after being published.
- scheduled posts are published at the specified time.
- media (images, videos, etc.) can be uploaded and displayed correctly in posts and pages.

User Management:

- administrators can create, edit, and delete user accounts.
- different user roles (administrator, editor, author, contributor, subscriber) have appropriate permissions.
- password strength requirements are enforced during user registration and password changes.

# Woocommerce

Product Management:

- administrators can add, edit, and delete products.
- product variations (e.g., size, color) are correctly configured and displayed.
- product categories and tags are applied correctly.
- product images are uploaded and displayed correctly.

Checkout Process:

- customers can add products to their cart.
- the cart calculates totals accurately, including taxes and shipping fees.
- customers can proceed through the checkout process smoothly, including entering billing and shipping information.
- different payment methods (e.g., credit card, PayPal) work correctly.
- customers receive order confirmation emails after completing a purchase.

Shipping and Tax Calculation:

- shipping options are displayed correctly based on the customer's location and order details.
- shipping rates are calculated accurately.
- taxes are applied correctly based on the customer's location and applicable tax rules.

## Utility Tasks

- [UI] Change Permalink

===================================================

## Factory Design Pattern for creating task sequence

- implement builder design pattern
- add task
- check if task is for UI or API
- perform authentication
- if UI, and has 2 tasks in sequence keep login session
