import React, { useState } from "react";
import Image from "./Components/Image";

const App = () => {
  const [src, srcChange] = useState(
    "https://image.insider.com/5c59e77ceb3ce80d46564023?width=1100&format=jpeg&auto=webp"
  );
  return (
    <div>
      <Image src={src} />
    </div>
  );
};

export default App;
