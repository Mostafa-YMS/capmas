const FemaleSvg = ({ color, percent, id }) => {
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
      <g fill={`url(#${id})`}>
        <path
          id="Path_2276"
          d="M157.7,94.8c0,26-21.1,47.1-47.1,47.1c-26,0-47.1-21.1-47.1-47.1s21.1-47.1,47.1-47.1
          c0,0,0,0,0,0C136.6,47.8,157.7,68.8,157.7,94.8z M215.3,304.6l-36.5-138.7c0-0.1,0-0.1-0.1-0.2c-1.2-6.2-6.6-10.7-12.9-10.7H55.4
                c-6.3,0-11.7,4.5-12.9,10.7c0,0,0,0.1-0.1,0.2L5.9,304.6c-2,7.8,2.6,15.7,10.4,17.8c7.8,2,15.7-2.6,17.8-10.4l29.5-112.2v62.7
                L34.8,371.6h28.7v109.9c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5V371.8h20.1v109.7c0,10.2,8.3,18.5,18.5,18.5
                s18.5-8.3,18.5-18.5V371.8h28.7l-28.7-109.1v-62.9L187.2,312c2,7.8,10,12.4,17.8,10.4C212.7,320.3,217.3,312.3,215.3,304.6
                L215.3,304.6z"
        />
      </g>
    </svg>
  );
};

export default FemaleSvg;
