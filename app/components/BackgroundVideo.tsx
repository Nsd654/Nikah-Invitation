"use client";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="bg-video"
    >
      <source src="/bg-vdeo.mp4" type="video/mp4" />
    </video>
  );
}
