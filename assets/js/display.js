let particleSystem, uniforms, geometry;
function display_data(){
    // ___ Add Items ___
    uniforms = {
        texture: {value: new THREE.TextureLoader().load("/viz-data/assets/textures/spark1.png")}
    };
    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexshader').textContent,
        fragmentShader: document.getElementById('fragmentshader').textContent,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        vertexColors: true
    });

    geometry = new THREE.BufferGeometry();
    let positions = [];
    let colors = [];
    let sizes = [];
   
    data.forEach(point =>{
        positions.push(point.x);
        positions.push(point.y);
        positions.push(point.z);
        var color = new THREE.Color(point.color);
        colors.push(color.r, color.g, color.b);
        sizes.push(10);
    })
    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.addAttribute('size', new THREE.Float32BufferAttribute(sizes, 1).setDynamic(true));
    particleSystem = new THREE.Points(geometry, shaderMaterial);
    scene.add(particleSystem);
    
    camera.position.set(0, 0, 400);
}
// ___ Render Loop ___
function render(){
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

