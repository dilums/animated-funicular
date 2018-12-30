let width, ratio, height;
let scene, renderer, camera, controls;
let data;
$(document).ready(()=>{
    init();
    render();
});

function init(){
    width = $('main').width();
    ratio = window.innerHeight / window.innerWidth;
    height = width * ratio * 0.9;
    // ___ Init Scene ___
    scene = new THREE.Scene();
    // ___ Set Camera ___
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // ___ Init Renderer ___
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setClearColor("#000");
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.gammaOutput = true;
    $('main').append(renderer.domElement);
    // ___ Add Controls ___
    controls = new THREE.OrbitControls(camera,renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    load_data();
}
function onWindowResize() {
    width = $('main').width();
    ratio = window.innerHeight / window.innerWidth;
    height = width * ratio * 0.9;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    render();
}