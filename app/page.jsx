import Banner from "./Component/Banner";
import Camp from "./Component/Camp";

export const Metadata = {
  title: "Taufik",
  description: "...",
};
export default function Home() {
  return (
    <>
      <div className="pt-10 pb-10">
        <Banner />
        <Camp />
      </div>
    </>
  );
}
