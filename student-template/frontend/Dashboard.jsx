import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('/api/inventory/alerts')
      .then((response) => response.json())
      .then((data) => setAlerts(data))
      .catch((error) => console.error('Failed to fetch inventory alerts:', error));
  }, []);

  if (alerts.length === 0) {
    return <p>All inventory levels are healthy.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Reorder Level</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((item) => (
          <tr key={item.id ?? item.productId ?? item.productName}>
            <td>{item.productName}</td>
            <td>{item.quantity}</td>
            <td>{item.reorderLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
