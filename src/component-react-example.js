import React, { useState } from "react";
import './component-example';

function Example() {
  const [ open, setOpen ] = useState(false);

  return (
    <div>
      <h1>Container React</h1>
      <component-example></component-example>
    </div>
  )
}

export default Example;

