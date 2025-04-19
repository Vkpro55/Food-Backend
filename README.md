## Database Design & Justification

This application uses both MongoDB and PostgreSQL as part of a hybrid database strategy. The decision was made based on the structure, relationships, and query patterns of the data used in "The Digital Diner" restaurant ordering system.

**🥘 MongoDB – For Menu Data (Menu-Items)**

- Menu items can have flexible structures, e.g., some may have options like spice level, extra toppings, or ingredient notes, while others may not.

- Categories can be stored within documents or referenced, offering flexibility in schema design.

- No complex relational queries are required for menu data.

**📦 PostgreSQL – For Orders & Customer Info**

Used For:

- Order
- Customer Info (Name, Phone Number)

Why PostgreSQL?

- Orders are highly structured and require relational integrity between customers and items.
- PostgreSQL supports JOINs, foreign keys, and transactions, making it ideal for handling:-
  ```
  One-to-many (Customer → Orders)
  ```
- Easier to run aggregations, filters, and history lookups (e.g., “get all orders by phone number”).
