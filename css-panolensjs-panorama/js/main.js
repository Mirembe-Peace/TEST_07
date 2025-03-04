import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { VRButton } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/webxr/VRButton.js";

// Enable VR mode
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



// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 1.5, 5);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

   // Enable VR mode
   renderer.xr = true;
   document.body.appendChild(VRButton.createButton(renderer));

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// Add Lights
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Load 3D Model
const loader = new THREE.GLTFLoader();
loader.load('3D_assests/image_01.glb', function (gltf) {
    const artifact = gltf.scene;
    artifact.position.set(0, 1.5, -10); // Place near left wall
    scene.add(artifact);
    console.log("✅ 3D Model Loaded:", artifact);
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update OrbitControls
    renderer.render(scene, camera);
}

// Window Resize Listener
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start Animation
animate();
