
import { GLTFLoader} from '/three/addons/loaders/GLTFLoader.js';


const pan = document.querySelector('.pan'); //select panolens div
const img = 'images/pan_1.jpg';

const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan,
    autoRotate: true,  
    autoRotateSpeed: 0.5,
});

//run viewer
viewer.add(panorama);

console.log(PANOLENS.VERSION);
console.log(PANOLENS.THREE_VERSION);

//loading the 3D model
const loader = new GLTFLoader();    
loader.load('3D_assets/ANKLE_RATTLES.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error){
   console.error(error);   
});
