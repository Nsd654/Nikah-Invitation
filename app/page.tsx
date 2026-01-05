"use client";
import { useEffect, useState, useRef } from "react";


export default function Home() {
//   const touchStartX = useRef(0);
// const touchEndX = useRef(0);

  const slides = [
    <div key="1">
      <div className="hold">Hold<br/>The<br/>Date</div>
      <div className="date">18.01.2026</div>
    </div>,
    <div key="2" className="card">
      <div className="arabic">
  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
</div>
      <p className="small mt">With pleasure, we invite you to bless the Nikah of</p>
      <div className="names">Nishad <br /> & <br /> Rifa Nahrin</div>
      <div className="date-box">
        <span>SATURDAY</span>
        <span>18 JAN</span>
        <span>11 AM</span>
      </div>
      <div className="place">ECM Auditorium<br/>Vilayil</div>
      <a
  href="https://maps.app.goo.gl/PF4Kby7YsrVi5mGv5"
  target="_blank"
  className="map-btn"
>
   View Location
</a>

    </div>,
    <div key="3" className="invited">
      You are<br/>graciously<br/>invited
    </div>
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   for (let i = 0; i < 25; i++) {
  //     const petal = document.createElement("div");
  //     petal.className = "petal";
  //     petal.style.left = Math.random() * 100 + "vw";
  //     petal.style.animationDuration = 6 + Math.random() * 6 + "s";
  //     document.body.appendChild(petal);
  //   }
  // }, []);
//   const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//   touchStartX.current = e.touches[0].clientX;
// };

// const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
//   touchEndX.current = e.touches[0].clientX;
// };

// const handleTouchEnd = () => {
//   if (touchStartX.current - touchEndX.current > 50) {
//     setIndex((prev) => (prev + 1) % slides.length);
//   }

//   if (touchEndX.current - touchStartX.current > 50) {
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   }
// };



  return (
  <main
  className="container"
  // onTouchStart={handleTouchStart}
  // onTouchMove={handleTouchMove}
  // onTouchEnd={handleTouchEnd}
>
    <div key={index} className="slide fade">
      {slides[index]}
    </div>
  </main>
);

}
