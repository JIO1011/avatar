import * as THREE from 'three'

const grid = new THREE.GridHelper( 100, 40, 0x000000, 0x000000 );
				grid.material.opacity = 0.2;
				grid.material.transparent = true;
				

                export default grid