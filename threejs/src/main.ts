import * as THREE from "three";

init();

function init() {
  const width = 640;
  const height = 480;

  //Init camera
  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 2;

  //Init scene
  const scene = new THREE.Scene();

  const piece = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const material = new THREE.MeshBasicMaterial({
    vertexColors: true,
  });
  const positionAttribute = piece.getAttribute("position");
  const colors = [];

  // Define the primary colors
  const primaryColors = [
    new THREE.Color(1, 0, 0), // Red
    new THREE.Color(0, 1, 0), // Green
    new THREE.Color(0, 0, 1), // Blue
    new THREE.Color(1, 1, 0), // Yellow
    new THREE.Color(0, 1, 1), // Cyan
    new THREE.Color(1, 0, 1), // Magenta
  ];

  for (let i = 0; i < positionAttribute.count; i += 6) {
    // Cycle through the primary colors
    const color = primaryColors[(i / 6) % primaryColors.length];

    // Push the color for each vertex of the face
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);

    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);
  }

  // define the new attribute
  piece.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const cube = new THREE.Mesh(piece, material);
  scene.add(cube);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(width, height);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);

  //Init render loop
  function animation(time: number) {
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;

    renderer.render(scene, camera);
  }
}
