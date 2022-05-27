import { FC } from "react";

import { StrapiImage } from "~/types/global";
import { getStrapiMedia } from "~/utils/media";

interface Props {
  data: StrapiImage;
}

export const CustomImage: FC<Props> = ({ data }) => {
  // const fullUrl = getStrapiMedia(data.url)
  return (
    <>
      {/* {console.log(data)} */}
      <pre className="prose prose-xl">{JSON.stringify(data, null, 2)}</pre>
      <img src={data.url} {...data} />
      {/* <Image
        loaderUrl="/api/image"
        alt={data.alternativeText}
        src={fullUrl}
        responsive={[
          {
            size: {
              width: 100,
              height: 100,
            },
            maxWidth: 200,
          },
        ]}
      /> */}
    </>
  );
};
