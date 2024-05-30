import { FaArrowRight } from "react-icons/fa6";

const SwiperNextBtn = ({ handleNext }) => {
  return (
    <div
      onClick={handleNext}
      className="tw-flex tw-h-[50px] tw-w-[50px] tw-items-center tw-justify-center tw-rounded-full tw-bg-primary tw-text-white tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-cursor-pointer hover:tw-bg-deep-secondary"
    >
      <FaArrowRight size={20} />
    </div>
  );
};

export default SwiperNextBtn;
