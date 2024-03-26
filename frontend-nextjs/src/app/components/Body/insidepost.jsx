// components/Body/insidepost.jsx
import { GetPostId } from "./fetchpost";

export function InsidePost({ params }) {
  const Post = GetPostId(params.id);
  console.log("POST BY ID -----> ", Post);
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-blue-300">You are inside The Post {params.id}</h1>
    </div>
  );
}
