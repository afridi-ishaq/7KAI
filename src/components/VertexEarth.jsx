"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import getStarfield from "@/lib/getStarfield";

export default function VertexEarth() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      1,
      800
    );

    camera.position.set(0, 0.2, 3.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    container.appendChild(renderer.domElement);

    const raycaster = new THREE.Raycaster();
    const pointerPos = new THREE.Vector2();
    const globeUV = new THREE.Vector2();

    const textureLoader = new THREE.TextureLoader();

    const starSprite = textureLoader.load(
      "/earth/circle.png"
    );

    const colorMap = textureLoader.load(
      "/earth/04_rainbow1k.jpg"
    );

    const otherMap = textureLoader.load(
      "/earth/04_rainbow1k.jpg"
    );

    const elevMap = textureLoader.load(
      "/earth/01_earthbump1k.jpg"
    );

    const alphaMap = textureLoader.load(
      "/earth/02_earthspec1k.jpg"
    );

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 10),
      new THREE.MeshBasicMaterial({
        color: 0x112749,
        wireframe: true,
      })
    );

    globeGroup.add(globe);

    const pointsGeo =
      new THREE.IcosahedronGeometry(
        1,
        120
      );

    const vertexShader = `
      uniform float size;
      uniform sampler2D elevTexture;
      uniform vec2 mouseUV;

      varying vec2 vUv;
      varying float vVisible;
      varying float vDist;

      void main() {

        vUv = uv;

        vec4 mvPosition =
          modelViewMatrix *
          vec4(position,1.0);

        float elv =
          texture2D(
            elevTexture,
            vUv
          ).r;

        vec3 vNormal =
          normalMatrix *
          normal;

        vVisible =
          step(
            0.0,
            dot(
              -normalize(mvPosition.xyz),
              normalize(vNormal)
            )
          );

        mvPosition.z +=
          0.35 * elv;

        float dist =
          distance(
            mouseUV,
            vUv
          );

        float thresh = 0.04;

        float zDisp = 0.0;

        if(dist < thresh){
          zDisp =
            (thresh - dist) * 10.0;
        }

        vDist = dist;

        mvPosition.z += zDisp;

        gl_PointSize = size;

        gl_Position =
          projectionMatrix *
          mvPosition;
      }
    `;

    const fragmentShader = `
      uniform sampler2D colorTexture;
      uniform sampler2D alphaTexture;
      uniform sampler2D otherTexture;

      varying vec2 vUv;
      varying float vVisible;
      varying float vDist;

      void main(){

        if(
          floor(vVisible + 0.1)==0.0
        ) discard;

        float alpha =
          1.0 -
          texture2D(
            alphaTexture,
            vUv
          ).r;

        vec3 color =
          texture2D(
            colorTexture,
            vUv
          ).rgb;

        vec3 other =
          texture2D(
            otherTexture,
            vUv
          ).rgb;

        float thresh = 0.04;

        if(vDist < thresh){

          color =
            mix(
              color,
              other,
              (thresh - vDist) * 50.0
            );

        }

        gl_FragColor =
          vec4(
            color,
            alpha
          );

      }
    `;

    const uniforms = {
      size: {
        value: 4.0,
      },

      colorTexture: {
        value: colorMap,
      },

      otherTexture: {
        value: otherMap,
      },

      elevTexture: {
        value: elevMap,
      },

      alphaTexture: {
        value: alphaMap,
      },

      mouseUV: {
        value: new THREE.Vector2(0, 0),
      },
    };

    const pointsMat =
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
      });

    const points =
      new THREE.Points(
        pointsGeo,
        pointsMat
      );

    globeGroup.add(points);

    const hemiLight =
      new THREE.HemisphereLight(
        0xffffff,
        0x080820,
        3
      );

    scene.add(hemiLight);

    const stars =
      getStarfield({
        numStars: 2500,
        sprite: starSprite,
      });

    scene.add(stars);

    // =========================
    // SCROLL + MOUSE VARIABLES
    // =========================

    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    let mouseTiltX = 0;
    let currentTiltX = 0;

    // =========================
    // SCROLL
    // =========================

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      const difference =
        currentScrollY -
        lastScrollY;

      scrollSpeed =
        difference * 0.0005;

      lastScrollY =
        currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    // =========================
    // MOUSE
    // =========================

    const handleMouseMove = (
      evt
    ) => {
      const rect =
        renderer.domElement.getBoundingClientRect();

      pointerPos.x =
        ((evt.clientX -
          rect.left) /
          rect.width) *
          2 -
        1;

      pointerPos.y =
        -(
          ((evt.clientY -
            rect.top) /
            rect.height) *
            2 -
          1
        );

      mouseTiltX =
        (evt.clientY /
          window.innerHeight -
          0.5) *
        0.25;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    function handleRaycast() {
      raycaster.setFromCamera(
        pointerPos,
        camera
      );

      const intersects =
        raycaster.intersectObject(
          globe
        );

      if (
        intersects.length > 0
      ) {
        globeUV.copy(
          intersects[0].uv
        );
      }

      uniforms.mouseUV.value.copy(
        globeUV
      );
    }

    const handleResize = () => {
      camera.aspect =
        container.clientWidth /
        container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    function animate() {
      requestAnimationFrame(
        animate
      );

      // Auto rotation
      globeGroup.rotation.y +=
        0.0007;

      // Scroll momentum
      globeGroup.rotation.y +=
        scrollSpeed;

      scrollSpeed *= 0.95;

      // Mouse tilt
      currentTiltX +=
        (mouseTiltX -
          currentTiltX) *
        0.05;

      globeGroup.rotation.x =
        currentTiltX;

      handleRaycast();

      renderer.render(
        scene,
        camera
      );
    }

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      renderer.dispose();

      if (
        container &&
        renderer.domElement &&
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        fixed
        top-0
        left-0
        w-screen
        h-screen
        z-10
      "
    />
  );
}