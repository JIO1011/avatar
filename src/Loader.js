import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js"

const model = new Promise((res,rej) =>{

const loader = new FBXLoader();

loader.load( 'src/model/Rem.fbx', function ( object ) {
	
	object.traverse( function ( child ) {
		if ( child.isMesh ) {
		child.castShadow = true;
		child.receiveShadow = true;
	}

});

res( object );

});

});

export default model