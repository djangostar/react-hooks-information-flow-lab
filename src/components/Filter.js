import React from "react"

/* Deliverables
    refractor the <select> element out of ShoppingList.js
    
    changing the selection in the dropdown should still change 
    which items are displayed in the shopping list
    
    pass a callback function as a prop called onCategoryChange to
    Filter.js
*/

function Filter({ onCategoryChange }) {
    return (
        <select name="filter" onChange={onCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
      </select>
    )
}
export default Filter