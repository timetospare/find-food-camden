import { useEffect, useState } from "react";

const Notification = ({ content }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadingTime = setTimeout(() => {
      setFading(true);
    }, 2500);
    const visibleTime = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => {
      clearTimeout(fadingTime);
      clearTimeout(visibleTime);
    };
  }, []);

  if (visible) {
    return (
      <div
        className={`${fading ? "opacity-0" : "opacity-100"} my-4`}
        style={{ transition: "all 0.5s ease" }}
      >
        <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-900 text-white">
          {content}
        </span>
      </div>
    );
  } else {
    return null;
  }
};

const Notifications = ({ list }) => {
  return (
    <div className="absolute bottom-0 pb-8 lg:pb-0 transition-all w-full z-50 right-0 text-center">
      {list.map((item) => (
        <Notification content={item} key={item} />
      ))}
    </div>
  );
};

export default Notifications;
