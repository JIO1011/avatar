import { Box2, HemisphereLight, HemisphereLightHelper, WebGLBufferRenderer } from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import camera from "./camera";
import light from "./luz";
import machine from "./Machine";
import renderer from "./renderer";
import Resize from "./Resize";
import scene from "./Scene";
import model from "./Loader";
import mesh from "./ground"
import grid from "./grid"
import * as THREE from 'three'






scene.add(light);
scene.add( mesh );
scene.add( grid );






camera.position.set(0,15,30)

Resize.start(renderer)

machine.addCallback(()=>{
    renderer.render(scene,camera);
});

machine.start()

model.then(object => {
    scene.add(object)
    let s = 0.05
    object.scale.set(s,s,s)


 




    // let skeleton = new THREE.SkeletonHelper(object);
    // skeleton.visible = true;

    // skeleton.Spine[1].rotation.y = 45;

    // scene.add(skeleton);


    const OOI = {};

    if ( n.name === 'head' ) OOI.head = n;
				if ( n.name === 'LeftArm' ) OOI.lowerarm_l = n;
				if ( n.name === 'Upperarm_l' ) OOI.Upperarm_l = n;
				if ( n.name === 'hand_l' ) OOI.hand_l = n;
				if ( n.name === 'target_hand_l' ) OOI.target_hand_l = n;

				if ( n.name === 'boule' ) OOI.sphere = n;
				if ( n.name === 'Kira_Shirt_left' ) OOI.kira = n;






                OOI.kira.add( OOI.kira.skeleton.bones[ 0 ] );
                const iks = [
                    {
                        target: 22, // "target_hand_l"
                        effector: 6, // "hand_l"
                        links: [
                            {
                                index: 5, // "lowerarm_l"
                                rotationMin: new THREE.Vector3( 1.2, - 1.8, - .4 ),
                                rotationMax: new THREE.Vector3( 1.7, - 1.1, .3 )
                            },
                            {
                                index: 4, // "Upperarm_l"
                                rotationMin: new THREE.Vector3( 0.1, - 0.7, - 1.8 ),
                                rotationMax: new THREE.Vector3( 1.1, 0, - 1.4 )
                            },
                        ],
                    }
                ];
    
   

})

let controls = new OrbitControls( camera, renderer.domElement );
				controls.minDistance = 5;
				controls.maxDistance = 100;


           




        
        
                


                