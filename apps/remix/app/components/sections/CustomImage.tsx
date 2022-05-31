import type { FC } from "react";

import type { StrapiImage } from "~/types/global";
import { getStrapiMedia } from "~/utils/media";

interface Props {
  data: StrapiImage;
}

export const CustomImage: FC<Props> = ({ data }) => {
  // const fullUrl = getStrapiMedia(data.url)
  return (
    <>
      {/* {console.log(data)} */}
      {/*  <pre className="prose prose-xl">{JSON.stringify(data, null, 2)}</pre> */}

      <img
        src="https://imagedelivery.net/Xf-xzwkqsT6N08RkH1GoLQ/dbfa1e85-c933-41fb-2bd0-5a311cbd6500/public"
        srcSet="https://imagedelivery.net/Xf-xzwkqsT6N08RkH1GoLQ/fit=contain,width=1920/dbfa1e85-c933-41fb-2bd0-5a311cbd6500 2x"
        alt={data.alternativeText}
      />
      <div className="aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2">
        {/* <img src={data.url} alt={data.alternativeText} {...data} /> */}

        {/* 	https://imagedelivery.net/Xf-xzwkqsT6N08RkH1GoLQ/dbfa1e85-c933-41fb-2bd0-5a311cbd6500/public */}
        {/* 
          srcset="
    /cdn-cgi/image/fit=contain,width=320/assets/hero.jpg   320w,
    /cdn-cgi/image/fit=contain,width=640/assets/hero.jpg   640w,
    /cdn-cgi/image/fit=contain,width=960/assets/hero.jpg   960w,
    /cdn-cgi/image/fit=contain,width=1280/assets/hero.jpg 1280w,
    /cdn-cgi/image/fit=contain,width=2560/assets/hero.jpg 2560w
  "
  src="/cdn-cgi/image/width=960/assets/hero.jpg"
 */}
      </div>
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
