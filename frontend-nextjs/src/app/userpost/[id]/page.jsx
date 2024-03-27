import { InsidePost } from "@/components/Body/insidepost";

export default function UserPost({ params }) {
  return (
    <>
      <div className="md:hidden">
        <InsidePost params={params} />
      </div>
    </>
  );
}
