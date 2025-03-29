import React from "react";
import { Card, Button } from "react-bootstrap";
import  "../pages/home.css";
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Material Management System</h1>
      <div className="feature-cards">
        <Card className="feature-card">
          <Card.Body>
            <Card.Title>List Materials</Card.Title>
            <Card.Text>
              View and manage a comprehensive list of materials in one place.
            </Card.Text>
            <Button variant="primary" href="/list-materials">
              Explore
            </Button>
          </Card.Body>
        </Card>
        <Card className="feature-card">
          <Card.Body>
            <Card.Title>Search Materials</Card.Title>
            <Card.Text>
              Quickly search through your inventory to find specific materials.
            </Card.Text>
            <Button variant="success" href="/search">
              Search Now
            </Button>
          </Card.Body>
        </Card>
        <Card className="feature-card">
          <Card.Body>
            <Card.Title>Material Manager</Card.Title>
            <Card.Text>
              Add, remove, or clear materials efficiently with our manager.
            </Card.Text>
            <Button variant="danger" href="/materials">
              Manage
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
