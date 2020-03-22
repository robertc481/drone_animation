import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as Scene } from './assets/scene.svg';
import './App.css';
import gsap from 'gsap';
import styled, { keyframes } from 'styled-components';

function App() {
  const animationRef = useRef(null)
  const [animDone, setAnimDone] = useState(false);
  useEffect(() => {

    if (animDone === false) {
      const tl = gsap.timeline({ defaults: { ease: 'power0' } });
      const [animationFragments, animationText] = animationRef.current.children;

      const scene = animationFragments.getElementById('scene');
      const drone = animationFragments.getElementById('drone');
      const paintings = animationFragments.getElementById('paintings');
      const floor = animationFragments.getElementById('floor');
      const photos = animationFragments.getElementById('photos');
      const leftWings = animationFragments.getElementById('leftWings');
      const rightWings = animationFragments.getElementById('rightWings');
      const legs = animationFragments.getElementById('legs');
      const firstpainting = animationFragments.getElementById('firstpainting');
      const secondpainting = animationFragments.getElementById('secondpainting');
      const thirdpainting = animationFragments.getElementById('thirdpainting');
      const cameraGlassOutter = animationFragments.getElementById('cameraGlassOutter');

      gsap.set(animationText, { autoAlpha: 0 });
      gsap.set([scene, drone, paintings, floor], { transformOrigin: '50% 50%', autoAlpha: 0 });
      gsap.set([leftWings, rightWings], { transformOrigin: '50% 50%' });


      setTimeout(() => setAnimDone(true), 27500)
      tl.set(scene, { autoAlpha: 1 })
        .to(floor, { autoAlpha: 1, duration: .5 })
        .fromTo(paintings, { y: '+=50' }, { y: '-=30', autoAlpha: 1, duration: 1 }, '-=0.5')
        .set(drone, { y: '+=85', scale: .5 })
        .to(drone, { autoAlpha: 1 })
        .to(photos, { y: '-=40', duration: .5 }, '-=.3')
        .fromTo([leftWings, rightWings], { scaleX: 1 }, { scaleX: .1, repeat: 5, duration: .3, yoyo: false })
        .fromTo([leftWings, rightWings], { scaleX: 1 }, { scaleX: .1, repeat: -1, duration: .1, yoyo: false })
        .to(drone, { y: '-=30', duration: 2, })
        .to(legs, { y: '-=20' }, '-=1.7')
        .set(drone, { transformOrigin: '50% 50%' })
        .to(drone, { rotation: 20, y: '-=70', x: '+=70', duration: 1, })
        .to(drone, { rotation: 20, y: '-=70', x: '+=60', duration: 1, }, '-=1')
        .to(drone, { rotation: -20, y: '-=40', duration: .75, })
        .to(drone, { scale: .4, y: '-=80', rotation: -15, x: '-=320', duration: 1.5 })
        .to(drone, { rotation: 30, y: '+=30', x: '+=50', duration: .5, })
        .to(drone, { rotation: 40, x: '+=200', duration: .6, })
        .to(drone, { rotation: 40, x: '+=250', duration: .7, })
        .to(drone, { rotation: 0, duration: .5, }, '-=.25')
        .to(paintings.children, { transformOrigin: '50% 50%', duration: .3, rotate: Math.random() * 15 + 3, stagger: 0.2 }, '-=1')
        .to(drone, { y: '+=70', duration: .5, })
        .to(drone, { y: '-=10', duration: .75, repeat: 5, yoyo: true }, '+=.5')
        .to(cameraGlassOutter, { transformOrigin: '50% 50%', scale: 45, opacity: .9, duration: .1 })
        .to(cameraGlassOutter, { scale: 1, opacity: .9, duration: .02 })
        .to(drone, { y: '-=10', duration: .5, repeat: 1, yoyo: true }, '+=.5')
        .to(drone, { rotation: -20, x: '-=550', duration: 1.25, })
        .to(drone, { rotation: 0, duration: .5 }, '-=.25')
        .to(drone, { y: '-=10', duration: .5, repeat: 1, yoyo: true }, '+=.5')
        .to(cameraGlassOutter, { transformOrigin: '50% 50%', scale: 45, opacity: .9, duration: .1 })
        .to(cameraGlassOutter, { scale: 1, opacity: .9, duration: .02 })
        .to(drone, { x: '+=80', y: '-=110', rotation: 20, duration: .8 })
        .to(drone, { rotation: 0, duration: .5 })
        .to(firstpainting, { rotation: 0, duration: .5 }, '-=.3')
        .to(drone, { x: '+=280', rotation: 20, duration: .5 })
        .to(drone, { rotation: 0, duration: .3 }, '-=.2')
        .to(secondpainting, { rotation: 0, duration: .3 }, '-=.3')
        .to(drone, { x: '+=240', rotation: 20, duration: .5 })
        .to(drone, { rotation: 0, duration: .3 }, '-=.2')
        .to(thirdpainting, { rotation: 0, duration: .3 }, '-=.3')
        .to(drone, { rotation: -20, x: '-=300', y: '+=100', duration: 1.2 })
        .to(drone, { rotation: 0, duration: .3 }, '-=.2')
        .to(cameraGlassOutter, { transformOrigin: '50% 50%', scale: 45, opacity: .9, duration: .1 }, '+=.3')
        .to(cameraGlassOutter, { scale: 1, opacity: .9, duration: .02 })
        .to(drone, { y: '+=10', duration: .75, repeat: 3, yoyo: true })
        .to(drone, { y: '+=150', duration: .8 }, '+=2.3')
        .to(legs, { y: '+=20' }, '-=.4')
        .fromTo([leftWings, rightWings], { scaleX: 1 }, { scaleX: 1, repeat: -1, duration: .1, yoyo: false }, '+=.75')
        .to(scene, { autoAlpha: 0, duration: .8 }, '+=.5')
        .to(animationText, { autoAlpha: 1, duration: 1 })

        ;

    }




  })
  const StyledAnimationWrapper = styled.div`
  width:100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:10;
`;
  const fadingIn = keyframes`
  0%{

    opacity:0;
  }
  100%{
    opacity:1;
  }
`;
  const StyledGreeting = styled.div`
  
  position:Absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:9;
  animation: .5s ${fadingIn} ease-in-out;
`;
  const StyledScene = styled(Scene)`
  width:100%;
position: absolute;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
`;
  return (
    <div className="App" >
      <StyledAnimationWrapper ref={animationRef}>
        {animDone ? <StyledGreeting>Hope You enjoyed it!</StyledGreeting> : <StyledScene />}



      </StyledAnimationWrapper>



    </div>
  );
}

export default App;
