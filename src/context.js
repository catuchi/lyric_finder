// import { render } from "@testing-library/react";
// import React, { Component } from "react";

// const Context = React.createContext();

// export class Provider extends Component {
//   state = {
//     track_list: [
//       { track: { track_name: "abc" } },
//       { track: { track_name: "123" } },
//     ],
//     heading: "Top 10 Tracks",
//   };
//   render() {
//     return (
//       <Context.Provider value={this.state}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// export const Consumer = Context.Consumer;

import { createContext } from "react";

export const IndexContext = createContext({});
