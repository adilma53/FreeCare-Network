
export async function GetPostId( id ) {
  const URL = `http://localhost:4000/post/${id}`
  let data;
  const resp = await fetch(URL);
  if (resp.ok) {
    data = await resp.json();
    return data
  } else {
    throw new Error("no data to be fetched")
  }
}
