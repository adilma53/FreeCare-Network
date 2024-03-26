// components/Body/insidepost.jsx

export function InsidePost({ params }) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-blue-300">You are inside The Post {params.id}</h1>
    </div>
  );
}
