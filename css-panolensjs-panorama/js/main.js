
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

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
    object = gltf.scene;    
    model.position.set(2, 1.5, -3);
    scene.add(gltf.scene);
}, undefined, function (error){
   console.error(error);   
});

//rendering the 3D model
const renderer = new THREE.WebGLRenderer({alpha: true});


//add renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//set camera distance
camera.position.z = objToRender  = "dino" ? 25 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender ="dino" ?5:1);
scene.add(ambientLight);

//Render the scene
function animate() {
requestAnimationFrame(animate);
//Here we could add some code to update the scene, adding some automatic movement

}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
