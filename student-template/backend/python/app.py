from flask import Flask, jsonify
import os
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

# Get the PostgreSQL connection URL from the environment.
DATABASE_URL = os.getenv("DATABASE_URL")


@app.route("/api/inventory/alerts", methods=["GET"])
def get_alerts():
    """
    Return all inventory products where the quantity
    is less than or equal to the reorder level.
    """
    connection = None

    try:
        # Connect to the PostgreSQL database.
        connection = psycopg2.connect(DATABASE_URL)

        # Use RealDictCursor so each row is returned as a dictionary.
        with connection.cursor(cursor_factory=RealDictCursor) as cursor:
            # Find products that are at or below their reorder level.
            cursor.execute(
                """
                SELECT id, product_name, quantity, reorder_level
                FROM inventory
                WHERE quantity <= reorder_level
                """
            )

            rows = cursor.fetchall()

        # Convert UUID values to strings for valid JSON.
        alerts = [
            {
                "id": str(row["id"]),
                "product_name": row["product_name"],
                "quantity": row["quantity"],
                "reorder_level": row["reorder_level"],
            }
            for row in rows
        ]

        return jsonify(alerts), 200

    except Exception as error:
        # Return a server error if the database request fails.
        print(f"Database error: {error}")
        return jsonify({"error": "Failed to fetch inventory alerts"}), 500

    finally:
        # Close the database connection.
        if connection is not None:
            connection.close()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
