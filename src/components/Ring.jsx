import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function Ring(props) {
  const group = useRef()
  const torus1 = useRef()
  const torus2 = useRef()
  const { nodes, materials } = useGLTF('/models/ring.glb')

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(group.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
    });
    tl.from(
      torus1.current.rotation,
      {
        x: 0,
        y: Math.PI,
        z: -Math.PI,
        duration: 10,
        ease: "power1.inOut",
      },
      "-=25%"
    );
    tl.from(
      torus2.current.rotation,
      {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 10,
        ease: "power1.inOut",
      },
      "<"
    );
  }, []);

  useFrame((state) => {
    group.current.rotation.y += (state.mouse.x * 0.5 - group.current.rotation.y) * 0.1;
    group.current.rotation.x += (-state.mouse.y * 0.5 - group.current.rotation.x) * 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group ref={torus1} name="Torus001_2" rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group ref={torus2} name="Torus002_3" rotation={[0, 0, -Math.PI / 2]} scale={0.97}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.002']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ring.glb')
