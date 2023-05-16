// need to install "react-device-detect": "^2.2.2",

import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

function Descarga() {
  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=mx.uach.alertauach";
    } else if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/campus-seguro/id1639175828";
    } else {
      window.location.href = "/desktop";
    }
  }, []);

  return <div className="App"></div>;
}

export default Descarga;
