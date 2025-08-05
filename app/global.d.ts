import * as THREE from 'three';

export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  // Replace 'any' with a more specific type from Three.js
  export class MeshLineGeometry extends THREE.BufferGeometry {}
  export class MeshLineMaterial extends THREE.ShaderMaterial {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Use the classes from the meshline module and extend default JSX types
      meshLineGeometry: JSX.IntrinsicElements['bufferGeometry'];
      meshLineMaterial: JSX.IntrinsicElements['shaderMaterial'];
    }
  }
}