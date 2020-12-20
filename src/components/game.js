import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/ProjectBoost/Build/ProjectBoost.loader.js",
  dataUrl: "/src/ProjectBoost/Build/ProjectBoost.data",
  frameworkUrl: "/src/ProjectBoost/Build/ProjectBoost.framework.js",
  codeUrl: "/src/ProjectBoost/Build/ProjectBoost.wasm",
});

export const Game = () => {
  return (
    <div>
      GAME
      {/* <Unity unityContext={unityContext} /> */}
    </div>
  );
};
