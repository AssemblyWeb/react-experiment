import React from "react";

class StorePicker extends React.Component {
  render() {
    //comment
    return (
      <form className="store-selector">
        {/*Comment*/}
        <h2>Enter your store</h2>
        <input type="text" placeholder="Store name" required />
        <button type="submit">Visit -></button>
      </form>
    );
  }
}

export default StorePicker;
