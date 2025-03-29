import { useState, useEffect } from "react";
import axios from "axios";

function SearchMaterials() {
  const [materials, setMaterials] = useState([]); // State for all materials
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredMaterials, setFilteredMaterials] = useState([]); // State for filtered results

  // Fetch data from db.json on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/materials") // Adjust URL to match your JSON Server
      .then((response) => {
        console.log("Fetched materials:", response.data); // Debug fetched data
        setMaterials(response.data); // Set fetched materials
        setFilteredMaterials(response.data); // Initially display all materials
      })
      .catch((error) => {
        console.error("Error fetching materials:", error);
      });
  }, []);

  // Filter materials based on the search query
  useEffect(() => {
    if (materials.length > 0) {
      const filtered = materials.filter((material) =>
        material.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered materials:", filtered); // Debug filtered data
      setFilteredMaterials(filtered);
    }
  }, [searchQuery, materials]); // Re-run filtering when searchQuery or materials change

  return (
    <div className="search-container">
      <h2 className="search-title">Search Available Materials</h2>
      <p className="search-description">
        Use the search bar to find materials by name.
      </p>
      <div>
        <input
          type="text"
          placeholder="Search by material name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Updates searchQuery state
        />
      </div>
      <div className="materials-grid">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((material) => (
            <div key={material.id} className="material-card">
              <img
                src={material.image}
                alt={material.name}
                className="material-image"
              />
              <h3 className="material-name">{material.name}</h3>
              <p>
                <strong>Quantity:</strong> {material.quantity}
              </p>
              <p>
                <strong>Location:</strong> {material.location}
              </p>
              <p>
                <strong>Price:</strong> {material.price}
              </p>
            </div>
          ))
        ) : (
          <p className="no-results">No materials found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchMaterials;
