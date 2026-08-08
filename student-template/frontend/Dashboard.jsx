import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Fetch data from '/api/inventory/alerts' inside this useEffect
  useEffect(() => {
    // Implement fetch logic here
  }, []);

  if (loading) return <div>Loading...</div>;

  // TODO: If inventoryData is empty, return <p>All inventory levels are healthy.</p>

  // TODO: Render a table with columns: Product Name, Quantity, Reorder Level
  return (
    <div>
      <h2>Inventory Alerts</h2>
      {/* Implement Table Here */}
      <p>Table not implemented yet.</p>
    </div>
  );
};

export default Dashboard;
