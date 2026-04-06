import { ANNOUNCEMENT_TEXT } from "../seo-config";

export default function AnnouncementBar() {
  return (
    <div
      className="w-full bg-brand-primary text-white text-center text-sm py-2 px-4 font-medium"
      role="banner"
    >
      {ANNOUNCEMENT_TEXT}
    </div>
  );
}
