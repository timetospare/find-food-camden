import { useEffect } from "react";

const OpenHours = props => {
  const { org } = props;

  const openingHours = (org?.venue?.openHours || []).reduce(
    (agg, x) => ({
      ...agg,
      [x.day]: agg[x.day]
        ? [...agg[x.day], `${x.start} - ${x.end}`]
        : [`${x.start} - ${x.end}`],
    }),
    {}
  );

  return Object.keys(openingHours).length > 0 ? (
    <>
      {Object.keys(openingHours).map(day => (
        <div
          key={day}
          className="flex justify-between text-sm"
        >
          <div>
            <p >{day.substring(0, 3)}</p>
          </div>
          <div >
            {openingHours[day].map(timeRangeString => (
              <div key={day + 'hours'}>{timeRangeString}</div>
            ))}
          </div>
        </div>
      ))}
    </>
  ) : null;
};

export default OpenHours;
