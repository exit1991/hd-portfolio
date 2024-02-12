'use client';
import * as THREE from 'three';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    main();
  }, []);

  return (
    <>
      <canvas className="js-webgl p-bg-canvas"></canvas>
      <main className="l-main">
        <nav className="p-main-manu">
          <ul>
            <li className="c-manu-item">
              <a className="c-manu-item__link" href="/">
                about
              </a>
            </li>
            <li className="c-manu-item">
              <a className="c-manu-item__link" href="/">
                works
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-hero">
          <div className="p-hero-logo">
            <div className="p-hero-logo__icon">
              <svg
                width={131}
                height={130}
                viewBox="0 0 131 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="65.1844" cy={65} r={65} fill="#EDEDED" />
                <rect
                  x="34.7156"
                  y="58.9062"
                  width="48.75"
                  height="48.75"
                  fill="#84CFE9"
                />
                <rect
                  x="59.0906"
                  y="34.5312"
                  width="48.75"
                  height="48.75"
                  fill="#FFE153"
                />
                <rect
                  x="22.5281"
                  y="22.3438"
                  width="48.75"
                  height="48.75"
                  fill="#EE806A"
                />
              </svg>
            </div>
            <h1 className="p-hero-logo__txt">hdeg</h1>
          </div>
        </div>
        <section className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">about</h1>
          <div className="p-portfolio-content__desc--about">
            <p>h deg</p>
          </div>
        </section>
        <section className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">works</h1>
          <div className="p-portfolio-content__desc--works">
            <p>h deg</p>
          </div>
        </section>
      </main>
    </>
  );
}

const START_Z_POSITION: number = 1500;

function main() {
  // サイズを指定
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector('.js-webgl') ?? undefined,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // カメラの位置
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = START_Z_POSITION;

  function scrollCameraMove() {
    camera.lookAt(0, 0, 0);
    const scrollY = window.scrollY;

    const changeValue = START_Z_POSITION + 400;
    if (scrollY <= changeValue) {
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = START_Z_POSITION - scrollY * 0.8;

      camera.rotation.x = 0;
      camera.rotation.y = 0;
      camera.rotation.z = 0;

      const halfPositonZ = START_Z_POSITION / 2;
      if (scrollY >= halfPositonZ) {
        camera.rotation.z = Math.PI * ((scrollY - halfPositonZ) * 0.0005);
      }
    } else {
      const halfPositonZ = START_Z_POSITION / 2;

      // // ラジアンに変換する
      // const radian = ((scrollY - START_Z_POSITION) * 0.01) * Math.PI / 180;
      // // 角度に応じてカメラの位置を設定
      // const xValue = START_Z_POSITION * 0.17;
      // const zValue = START_Z_POSITION * 0.067;
      // const positionX = xValue * Math.sin(radian);
      // const positionZ = (zValue - (zValue * Math.cos(radian))) * -1;
      // camera.position.x = positionX;
      // camera.position.z = START_Z_POSITION - (START_Z_POSITION * 0.8) + positionZ;

      camera.rotation.x = 0;
      camera.rotation.y = 0;
      // camera.rotation.z = Math.PI * ((START_Z_POSITION - halfPositonZ) * 0.0005);
      camera.rotation.z = Math.PI * ((changeValue - halfPositonZ) * 0.0005);

      // ラジアンに変換する
      // const radian = ((scrollY - 1200) * 0.01) * Math.PI / 180;
      const radian = ((scrollY - 1200) * 0.02 * Math.PI) / 180;
      // 角度に応じてカメラの位置を設定
      const positionX = 200 * Math.sin(radian);
      const positionZ = (200 - 200 * Math.cos(radian)) * -1;
      camera.position.x = positionX;
      camera.position.z = changeValue - changeValue * 0.8 + positionZ;
      // camera.position.z = positionZ;
    }
  }

  scrollCameraMove();
  window.addEventListener('scroll', () => {
    scrollCameraMove();
  });

  createParticles(0xee806a);
  createParticles(0xffe153);
  createParticles(0x84cfe9);
  tick();

  //パーティクルの作成
  function createParticles(materialColor: THREE.ColorRepresentation) {
    // 頂点情報を格納する配列
    const vertices = [];

    // 配置する個数
    // const LENGTH = 1000;
    // const LENGTH = 800;
    const LENGTH = 300;
    const range = 500;
    for (let i = 0; i < LENGTH; i++) {
      // 頂点の初期座標
      vertices.push(
        Math.random() * range - range / 2,
        Math.random() * range - range / 2,
        Math.random() * range - range / 2
      );
    }

    // 形状データを作成
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // マテリアルを作成
    const material = new THREE.PointsMaterial({
      // size: 3, // 一つ一つのサイズ
      // size: 4.5, // 一つ一つのサイズ
      // size: 10, // 一つ一つのサイズ
      size: 8, // 一つ一つのサイズ
      color: materialColor, // 色
    });

    // 物体を作成
    scene.add(new THREE.Points(geometry, material));
  }

  // 毎フレーム時に実行されるループイベント
  function tick() {
    // cloud.rotation.y += 0.0001;
    renderer.render(scene, camera); // レンダリング
    requestAnimationFrame(tick);
  }
}
