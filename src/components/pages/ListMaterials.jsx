import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/ListMaterials.css";

const ListMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from JSON Server
    axios.get("http://localhost:5000/materials")
      .then((response) => {
        setMaterials(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching materials:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading materials...</p>;
  }

  return (
    <div className="materials-container">
      <h1 className="materials-title">List of Materials</h1>
      <div className="materials-grid">
        {materials.map((material) => (
          <div key={material.id} className="material-card">
            <img src={material.image} alt={material.name} />
            <div className="card-content">
              <p><strong>{material.name}</strong></p>
              <p>Quantity: {material.quantity}</p>
              <p>Location: {material.location}</p>
              <p>Price: {material.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMaterials;
