import { prominent } from "color.js";
import { useEffect, useState } from "react";

const useProminentColor = (image) => {
  const [color, setColor] = useState(null);

  const corsImageModified = new Image();
  corsImageModified.crossOrigin = "Anonymous";
  corsImageModified.src = image + "?not-from-cache-please";

  useEffect(() => {
    (async () => {
      const values = await prominent(corsImageModified, {
        amount: 1,
      });
      const RGB = `rgb(${values[0]},${values[1]},${values[2]},0.6)`;
      setColor(RGB);
    })();
  }, []);
  return color;
};

export default useProminentColor;
