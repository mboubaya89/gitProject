import React from "react";

import "../styles/Inventory.css";

function Inventory() {
const product = [
    {id: 1, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'},
    {id: 2, name: 'Veste', quantite: 15, description: '100% Lin, Lavable à 90°C'},
    {id: 3, name: 'Chino', quantite: 41, description: '80% Cotton, 20% Polyester, Lavable à 60°C'},
    {id: 4, name: 'Jeans', quantite: 25, description: '5 Poches, Couleur bleue'},
    {id: 5, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'},
    {id: 6, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'},
    {id: 7, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'},
    {id: 8, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'},
    {id: 9, name: 'Pull', quantite: 23, description: '100% Laine, Lavable à 60°C'}
]
const productlist = product.map(product => <h2>{product}</h2>)
  return (
      <div className="App">{productlist}</div>
  );
}

export default Inventory;
