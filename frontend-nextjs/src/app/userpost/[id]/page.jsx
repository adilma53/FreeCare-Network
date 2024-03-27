import { InsidePost } from "@/components/Body/insidepost";

export const metadata = {
  title: "Claim Offer",
  description: "claim the offer inside you pick",
};
export default function UserPost({ params }) {
  return (
    <>
      <div className="md:hidden">
        <InsidePost params={params} />
      </div>
    </>
  );
}
