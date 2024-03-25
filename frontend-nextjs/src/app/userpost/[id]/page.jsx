// import { InsidePost } from "@/components/Body/insidepost";

export default function UserPost({id}) {
      // <InsidePost id={id} />
  return (
    <>
    <div className="flex items-center justify-center pt-10">
      <h1 className="text-2xl font-semibold text-center text-blue-300">You are inside The Post That hold the id: {id}</h1>
    </div>
    </>
  );
}
