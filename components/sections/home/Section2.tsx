import VerticalTicker from "@/util/VerticalTicker";
import Link from "next/link";
import { BaseComponentProps } from "@/types";

interface FlashNewsProps extends BaseComponentProps {
  title?: string;
  items?: React.ReactNode[];
  pause?: number;
  speed?: number;
  animation?: 'fade' | 'slide';
  showItems?: number;
  mousePause?: boolean;
}

// const newsItems: React.ReactNode[] = [
//   <li key="news-1">
//     <Link className="font-large post-title" href="/single">
//       When will it actually be safe to go to the beach again?
//     </Link>
//   </li>,
//   <li key="news-2">
//     <Link className="font-large post-title" href="/single">
//       LAUSD is teaching a lesson on how to fight hunger during
//     </Link>
//   </li>,
//   <li key="news-3">
//     <Link className="font-large post-title" href="/single">
//       Cómo hacer su propio desinfectante
//     </Link>
//   </li>,
//   <li key="news-4">
//     <Link className="font-large post-title" href="/single">
//       Column: Why we cook when the world doesn't make sense
//     </Link>
//   </li>,
// ];

const newsItems: React.ReactNode[] = [];

export default function Section2({
  title = "Flash news",
  items = newsItems,
  pause = 3000,
  speed = 800,
  animation = "fade",
  showItems = 1,
  mousePause = true,
  className
}: FlashNewsProps = {}) {
  return (
    <>
      {/*Flash news Start*/}
      {/* <div className={`row mb-30 ${className || ''}`}>
        <div className="col-12">
          <div className="news-flash-cover">
            <h6 className="flash-news-title mt-1">
              <i className="ti-bolt mr-5" />
              <span className="font-family-normal">{title}</span>
            </h6>
            <div id="news-flash" className="d-inline-table">
              <ul>
                <VerticalTicker
                  items={items}
                  pause={pause}
                  speed={speed}
                  animation={animation}
                  showItems={showItems}
                  mousePause={mousePause}
                />
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
