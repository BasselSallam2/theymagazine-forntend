import Section1 from "@/components/sections/home-3/Section1";
import Section2 from "@/components/sections/home-2/Section3";
import Section3 from "@/components/sections/home-2/Section2";
import Section4 from "@/components/sections/home/Section7";
import Image from "next/image";
export default function Home3() {
  return (
    <>
      <Section1 />
      <Section2 />
      <div className="ads mb-30 text-center">
        <Image className="border-radius-5" src="/assets/imgs/ads/ads-2.jpg" alt="newsboard" width={700} height={105} />
      </div>

      <Section3 />
      <Section4 />
    </>
  );
}
