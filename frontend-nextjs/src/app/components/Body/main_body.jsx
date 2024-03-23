import { BodyMobile } from "./mobile_body";
export function BodyMain() {
  return (
    <>
      <div className="md:hidden">
        <BodyMobile />
      </div>
    </>
  );
}
