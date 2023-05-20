const MaleSvg = ({ color, percent, id }) => {
  const amount = percent < 0 ? 0 : percent > 1 ? 1 : percent;
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 221.2 500"
      enable-background="new 0 0 221.2 500"
      height="250px"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
          <stop id="stop1" offset={amount} stop-color={color} />
          <stop id="stop2" offset={amount} stop-color="#DDDDDD" />
        </linearGradient>
      </defs>

      <g id="Group_2478" transform="translate(0 0)" fill={`url(#${id})`}>
        <g id="Group_2477">
          <path
            id="Path_2279"
            d="M161.2,61.7c0,27.9-22.6,50.6-50.5,50.6c-27.9,0-50.6-22.6-50.6-50.5
			c0-27.9,22.6-50.6,50.5-50.6l0,0C138.6,11.2,161.2,33.8,161.2,61.7z M184.4,126.4H37c-8.6,0-15.6,7-15.6,15.6v153.3c-0.1,8.6,6.6,15.8,15.1,16.2
			c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v314.9c-0.1,10.6,8,19.6,18.6,20.5c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V311.6h21.5v164.6c-0.1,10.6,8,19.6,18.6,20.5
			c11,0.7,20.4-7.6,21.2-18.5c0-0.4,0-0.9,0-1.3V161.4c0-2.1,1.7-3.8,3.8-3.8c0,0,0,0,0,0l0,0c2.1,0,3.8,1.7,3.8,3.8c0,0,0,0,0,0
			v134c-0.1,8.6,6.5,15.8,15.1,16.2c8.6,0.3,15.8-6.5,16.1-15.1c0-0.2,0-0.3,0-0.5V142C200,133.3,193,126.4,184.4,126.4z"
          />
        </g>
      </g>
    </svg>
  );
};

export default MaleSvg;
