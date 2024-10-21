import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TotalAccountBalances() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Total Account Balance</Card.Title>
          <Card.Text>
            40,00,000
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TotalAccountBalances;
