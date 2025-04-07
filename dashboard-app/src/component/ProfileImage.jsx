export default function ProfileImage({ status = "success" }) {
  return (
    <div className="indicator w-10 h-10 rounded-full border border-gray-700 relative">
      <span
        className={`absolute bottom-1 right-1 indicator-item indicator-bottom status ${
          status === "success"
            ? "status-success"
            : status === "warning"
            ? "status-warning"
            : status === "secondary"
            ? "status-secondary"
            : ""
        }`}
      ></span>
      <img
        className="rounded-full w-full h-full object-cover"
        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        alt="Profile"
      />
    </div>
  );
}
