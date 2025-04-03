import * as THREE from 'three'

const scene = new THREE.Scene();
scene.background = new THREE.Color()


const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	    hemiLight.position.set( 0, 200, 0 );
		scene.add( hemiLight );

       
        

const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( 0, 200, 100 );
	    // dirLight.castShadow = true;
		// dirLight.shadow.camera.top = 180;
		// dirLight.shadow.camera.bottom = - 100;
		// dirLight.shadow.camera.left = - 120;
		// dirLight.shadow.camera.right = 120;
        scene.add( dirLight );
	


export default scene