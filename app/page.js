import Image from "next/image";

export default function Home() {
  return (
    <div>
      <img src="/card-top.jpg" alt="Sunset in the mountains" />
      <div>
        <div>The Coldest Sunset</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div>
        <span>#photography</span>
        <span>#travel</span>
        <span>#winter</span>
      </div>
    </div>
  );
}
