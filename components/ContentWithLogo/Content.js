import Image from "next/image";
import React from "react";
import Container from "../UI/Container";

const Content = ({ content }) => {
  return (
    <Container>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-gap-4 lg:tw-flex-row">
        <div className="tw-text-center lg:tw-w-1/2 lg:tw-text-left">
          <p className="tw-text-xl tw-font-medium tw-text-primary lg:tw-text-[40px] lg:tw-font-semibold lg:tw-leading-[44px]">
            {content?.title}
          </p>
          <p className="tw-text-sm tw-font-light tw-text-black lg:tw-pt-4 lg:tw-text-lg">
            {content?.description}
          </p>
        </div>
        <div className="lg:tw-w-1/2">
          {content?.type === "image" && (
            <Image
              className="tw-h-[60vh] tw-w-full tw-rounded"
              width={300}
              height={200}
              src={content?.image}
              alt="image"
            />
          )}
          {content?.type === "video" && (
            <div
              className="tw-h-[60vh] tw-w-full tw-rounded"
              dangerouslySetInnerHTML={{ __html: content?.video }}
            ></div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Content;
