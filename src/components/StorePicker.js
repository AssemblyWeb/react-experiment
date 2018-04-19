import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    console.log('changed url');
    //first grab the text from the box
    const storeId = this.storeInput.value;
    console.log('going to ${storeId}');
    //second we're going to transition from / to /store/:storeID
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    //comment
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        {/*Comment*/}
        <h2>Enter your store</h2>
        <input type="text" placeholder="Store name" required defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visit -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
