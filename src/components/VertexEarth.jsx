"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import getStarfield from "@/lib/getStarfield";

export default function VertexEarth() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scene = new THREE.Scene();
//size changing here
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      1,
      800
    );
  //camera
    camera.position.set(0, 0.2, 3.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setPixelRatio(window.devicePixelRatio);

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

//frame color and thickness
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

      size:{
        value:4.0
      },

      colorTexture:{
        value:colorMap
      },

      otherTexture:{
        value:otherMap
      },

      elevTexture:{
        value:elevMap
      },

      alphaTexture:{
        value:alphaMap
      },

      mouseUV:{
        value:new THREE.Vector2(0,0)
      }

    };


    const pointsMat =
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent:true
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
        numStars:4500,
        sprite:starSprite
      });


    scene.add(stars);



    // Scroll rotation
    let lastScrollY = window.scrollY;

let scrollSpeed = 0;
let targetScrollRotation = 0;


window.addEventListener(
  "scroll",
  () => {

    targetScrollRotation =
    window.scrollY * 0.005;
    
    const currentScrollY =
      window.scrollY;


    const difference =
      currentScrollY - lastScrollY;


    scrollSpeed =
      difference * 0.0005;


    lastScrollY =
      currentScrollY;

  }
);



    function handleRaycast(){

      raycaster.setFromCamera(
        pointerPos,
        camera
      );


      const intersects =
        raycaster.intersectObject(
          globe
        );


      if(intersects.length > 0){

        globeUV.copy(
          intersects[0].uv
        );

      }


      uniforms.mouseUV.value.copy(
        globeUV
      );

    }



    window.addEventListener(
      "mousemove",
      (evt)=>{

        const rect =
          renderer.domElement.getBoundingClientRect();


        pointerPos.x =
          ((evt.clientX - rect.left) /
          rect.width) * 2 - 1;


        pointerPos.y =
          -(
            ((evt.clientY - rect.top) /
            rect.height) * 2 - 1
          );

      }
    );



    const handleResize = ()=>{

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



    function animate(){

  requestAnimationFrame(
    animate
  );


  // normal rotation
  globeGroup.rotation.y +=
    0.0007;


  // scroll rotation
  globeGroup.rotation.y +=
    scrollSpeed;


  // slowly stop scroll movement
  scrollSpeed *= 0.95;


  handleRaycast();


  renderer.render(
    scene,
    camera
  );

}

    animate();



    return ()=>{

      window.removeEventListener(
        "resize",
        handleResize
      );


      renderer.dispose();


      if(
        container &&
        renderer.domElement &&
        container.contains(
          renderer.domElement
        )
      ){

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
    relaive
    z-10

    md:left-0
    lg:left-0
  "
/>
  );
}