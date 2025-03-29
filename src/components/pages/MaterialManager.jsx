import React, { useState } from "react";
import "./MaterialManager.css"; // Ensure you create this file for styling

function MaterialManager() {
  const [materials, setMaterials] = useState([
    "Wood",
    "Metal",
    "Glass",
    "Plastic",
    "Concrete",
  ]);
  const [newMaterial, setNewMaterial] = useState("");

  const addMaterial = () => {
    if (newMaterial.trim() && !materials.includes(newMaterial)) {
      setMaterials([...materials, newMaterial]);
      setNewMaterial("");
    }
  };

  const removeMaterial = (material) => {
    setMaterials(materials.filter((m) => m !== material));
  };

  const clearAll = () => {
    setMaterials([]);
  };

  return (
    <div className="material-manager">
      <h1>Material Manager</h1>
      <p>Manage and search materials efficiently with an elegant UI.</p>
      <div className="material-actions">
        <input
          type="text"
          placeholder="Add a new material..."
          value={newMaterial}
          onChange={(e) => setNewMaterial(e.target.value)}
          className="material-input"
        />
        <button onClick={addMaterial} className="btn btn-primary">
          Add Material
        </button>
        <button onClick={clearAll} className="btn btn-danger">
          Clear All
        </button>
      </div>
      <ul className="material-list">
        {materials.map((material, index) => (
          <li key={index} className="material-item">
            <span>{material}</span>
            <button
              onClick={() => removeMaterial(material)}
              className="btn btn-sm btn-outline-danger"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaterialManager;
