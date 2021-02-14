import PropTypes from "prop-types";

const OpenDays = (props) => {
  const { orgDays, openDaysSmall } = props;

  const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const Week = () =>
    allDays.map((day, i) => {
      const isOpen = orgDays?.[day];

      const roundedStyle =
        (day == "Mon"
          ? "rounded-l-lg "
          : day == "Sun"
          ? "rounded-r-lg "
          : "") + `flex flex-col justify-center items-center `;

      const isOpenStyle = orgDays?.[day] ? "bg-lime " : "bg-gray-300 ";

      const pillSize = "w-10 xl:w-12 lg:h-6";

      const dayStyle = roundedStyle.concat(isOpenStyle).concat(pillSize);

      return (
        <div key={day + i} className={dayStyle}>
          <div
            aria-hidden={isOpen ? "false" : "true"}
            className={`${
              isOpen ? "text-gray-700 " : "text-gray-500 "
            } text-center text-sm lg:text-normal`}
          >
            {openDaysSmall ? day.slice(0, 1) : day.slice(0, 3)}
          </div>
        </div>
      );
    });

  return (
    <div className="flex">
      <Week />
    </div>
  );
};

OpenDays.propTypes = {
  orgDays: PropTypes.object.isRequired,
  openDaysSmall: PropTypes.bool,
};

export default OpenDays;
