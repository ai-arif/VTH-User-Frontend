import { FaArrowLeft } from "react-icons/fa6";

const SwiperPrevBtn = ({ handlePrev }) => {
  return (
    <div
      onClick={handlePrev}
      className="tw-flex tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded-full tw-bg-primary tw-text-white tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-cursor-pointer hover:tw-bg-deep-secondary"
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default SwiperPrevBtn;
