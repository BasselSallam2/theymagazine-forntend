import Section1 from "@/components/sections/category-grid/Section1";
import Section2 from "@/components/sections/category-grid/Section2";
import Section3 from "@/components/sections/category-grid/Section3";
export default function CategoryGrid() {
  return (
    <>
      <Section1 showLine={false} />
      <Section2 />
      <Section3 />
    </>
  );
}
