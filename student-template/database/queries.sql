-- QUESTION 2.1: SQL Query
-- Find the top 5 customers by total order value in 2025.
-- Only orders placed between January 1, 2025 and December 31, 2025 are included.
-- Group the orders by customer and calculate each customer's total order value.
-- Sort customers from highest to lowest total value and return the top 5.

SELECT
    customer_id,
    SUM(total_amount) AS total_order_value
FROM orders
WHERE order_date >= '2025-01-01'
  AND order_date < '2026-01-01'
GROUP BY customer_id
ORDER BY total_order_value DESC
LIMIT 5;
