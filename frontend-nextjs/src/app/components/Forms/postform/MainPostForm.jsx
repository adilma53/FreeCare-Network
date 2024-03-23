import PostFormDesktop from "./PostFormDesktop";
import { PostFormMobile } from "./PostFormMobile";

export function MainPostForm() {
  return (
    <>
      <div className="md:hidden">
        <PostFormMobile />
      </div>
      <div className="hidden md:block">
        <PostFormDesktop />
      </div>
    </>
  );
}
