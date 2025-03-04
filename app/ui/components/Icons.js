export const SearchIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9171 19.2456L14.6091 12.9086C15.7409 11.3024 16.228 9.32982 15.974 7.38149C15.72 5.43316 14.7434 3.65133 13.2378 2.389C11.7321 1.12666 9.80722 0.475934 7.84446 0.565756C5.8817 0.655578 4.0243 1.47935 2.64023 2.87392C1.25617 4.2685 0.446409 6.1321 0.371435 8.09548C0.296461 10.0589 0.961732 11.9788 2.23542 13.4749C3.5091 14.9709 5.29829 15.934 7.24848 16.1732C9.19867 16.4125 11.1676 15.9105 12.7651 14.7666L19.0731 21.1046C19.1945 21.2286 19.3393 21.3272 19.4991 21.3947C19.6589 21.4623 19.8305 21.4973 20.004 21.4979C20.1775 21.4985 20.3494 21.4646 20.5096 21.3982C20.6699 21.3317 20.8154 21.2341 20.9376 21.111C21.0598 20.9878 21.1563 20.8416 21.2215 20.6809C21.2867 20.5201 21.3194 20.348 21.3174 20.1745C21.3155 20.001 21.2791 19.8297 21.2104 19.6704C21.1417 19.5111 21.042 19.367 20.9171 19.2466V19.2456ZM8.22812 13.6036C7.18717 13.6093 6.16794 13.3059 5.29963 12.7318C4.43131 12.1576 3.75299 11.3386 3.35065 10.3786C2.94831 9.41849 2.84006 8.36055 3.03962 7.33889C3.23917 6.31723 3.73756 5.37784 4.47159 4.63973C5.20563 3.90162 6.14228 3.39804 7.16282 3.19283C8.18336 2.98763 9.24186 3.09006 10.2041 3.48708C11.1664 3.88411 11.9892 4.55787 12.5681 5.42299C13.147 6.28812 13.4561 7.30561 13.4561 8.34658C13.4561 9.73581 12.9063 11.0686 11.9266 12.0537C10.947 13.0387 9.61734 13.5959 8.22812 13.6036Z"
        fill="#22262A"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.73242 33.5277C10.0431 33.5277 10.2949 33.2759 10.2949 32.9652C10.2949 32.6545 10.0431 32.4027 9.73242 32.4027C9.42176 32.4027 9.16992 32.6545 9.16992 32.9652C9.16992 33.2759 9.42176 33.5277 9.73242 33.5277Z"
        fill="#22262A"
        stroke="#22262A"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6074 33.5277C17.9181 33.5277 18.1699 33.2759 18.1699 32.9652C18.1699 32.6545 17.9181 32.4027 17.6074 32.4027C17.2968 32.4027 17.0449 32.6545 17.0449 32.9652C17.0449 33.2759 17.2968 33.5277 17.6074 33.5277Z"
        fill="#22262A"
        stroke="#22262A"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.54492 15.5277H5.79492L8.04492 29.0277H19.2949L21.5449 18.9027H6.91992"
        stroke="#22262A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="24.5449"
        cy="12.5277"
        r="11"
        fill="#FB7181"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M22.0785 16.4277H27.0985V15.0377H24.3985C25.5585 14.1477 26.9885 12.8677 26.9885 11.2677C26.9885 10.0377 26.2485 9.06771 24.5885 9.06771C23.2585 9.06771 22.1085 9.82771 22.0585 11.5977H23.7085C23.7085 10.9077 24.0085 10.5077 24.5185 10.5077C25.0385 10.5077 25.2785 10.8477 25.2785 11.3777C25.2785 12.6077 23.6285 13.8777 22.0785 15.1577V16.4277Z"
        fill="white"
      />
    </svg>
  );
};

export const ProductStar = ({isActive}) => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z"
        fill={isActive ? "#FFC600": "#C1C8CE"}
      />
    </svg>
  );
};
