import Link from "next/link";
import Image from "next/image";
import { BaseComponentProps } from "@/types";

interface AboutSectionProps extends BaseComponentProps {
  title?: string;
  breadcrumb?: {
    home: string;
    current: string;
  };
  heroImage?: {
    src: string;
    alt: string;
    link?: string;
  };
  content?: {
    excerpt?: string;
    sections?: Array<{
      title: string;
      content: string;
      type?: 'text' | 'gallery' | 'image' | 'form';
      data?: any;
    }>;
  };
  gallery?: Array<{
    src: string;
    alt: string;
    link: string;
    thumbnail: string;
  }>;
  contactForm?: {
    showName?: boolean;
    showEmail?: boolean;
    showPhone?: boolean;
    showMessage?: boolean;
    submitText?: string;
  };
  socialShare?: {
    show?: boolean;
    platforms?: Array<'facebook' | 'twitter' | 'pinterest' | 'instagram'>;
    shareText?: string;
  };
}

export default function Section1({
  title = "About Us",
  breadcrumb = {
    home: "Home",
    current: "About us"
  },
  heroImage = {
    src: "/assets/imgs/news/news-26.jpg",
    alt: "newsboard",
    link: "/single"
  },
  content,
  gallery = [
    {
      src: "/assets/imgs/news/news-7.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-7.jpg",
      thumbnail: "/assets/imgs/news/thumb-1.jpg"
    },
    {
      src: "/assets/imgs/news/news-6.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-6.jpg",
      thumbnail: "/assets/imgs/news/thumb-2.jpg"
    },
    {
      src: "/assets/imgs/news/news-5.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-5.jpg",
      thumbnail: "/assets/imgs/news/thumb-4.jpg"
    },
    {
      src: "/assets/imgs/news/news-1.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-1.jpg",
      thumbnail: "/assets/imgs/news/thumb-12.jpg"
    },
    {
      src: "/assets/imgs/news/news-2.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-2.jpg",
      thumbnail: "/assets/imgs/news/thumb-11.jpg"
    },
    {
      src: "/assets/imgs/news/news-3.jpg",
      alt: "newsboard",
      link: "/assets/imgs/news/news-3.jpg",
      thumbnail: "/assets/imgs/news/thumb-10.jpg"
    }
  ],
  contactForm = {
    showName: true,
    showEmail: true,
    showPhone: true,
    showMessage: true,
    submitText: "Send message"
  },
  socialShare = {
    show: true,
    platforms: ['facebook', 'twitter', 'pinterest', 'instagram'],
    shareText: "Share this post"
  },
  className
}: AboutSectionProps = {}) {
  return (
    <>
      {/*archive header*/}
      <div className={`archive-header text-center mb-50 mt-30 ${className || ''}`}>
        <h2 className="font-weight-bold">
          <span className="font-family-normal">{title}</span>
        </h2>
        <div className="breadcrumb font-small">
          <Link href="/">{breadcrumb.home}</Link>
          <span /> {breadcrumb.current}
        </div>
      </div>
      <figure className="image mb-30 m-auto text-center border-radius-2">
        <Link href={heroImage.link || "/single"}>
          <Image
            className="border-radius-5"
            src={heroImage.src}
            alt={heroImage.alt}
            width={1332}
            height={497}
          />
        </Link>
      </figure>
      <div className="entry-wraper">
        <div className="excerpt">
          <p>
            We've all been a part of that group project. You know, the project <a href="#">where one person</a> takes the lead, leading some members to conclude their ideas are unwelcome, while a select few ride the others' coattails.
          </p>
          <p>
            And yet, something incredible happens when teamwork happens the way it's <a href="#">supposed to happen</a>. Things change when everyone on the team is equally invested in the overall purpose and goal. You find yourself working faster, finding mistakes more easily, and innovating better.
          </p>
        </div>
        <div className="entry-main-content">
          <hr className="wp-block-separator is-style-wide" />
          <h3>What we do</h3>
          <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
          <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
          <hr className="wp-block-separator is-style-wide" />
          <h3>Portfolio</h3>
          <figure className="wp-block-gallery columns-3">
            <ul className="blocks-gallery-grid">
              {gallery.map((item, index) => (
                <li key={index} className="blocks-gallery-item">
                  <a className="play-video" href={item.link} data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s">
                    <Image
                      className="border-radius-5"
                      src={item.thumbnail}
                      alt={item.alt}
                      width={255}
                      height={255}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </figure>
          <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
          <hr className="wp-block-separator is-style-dots" />
          <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
          <hr className="wp-block-separator is-style-wide" />
          <h3>Why choose Us</h3>
          <div className="wp-block-image">
            <figure className="alignleft is-resized">
              <Image
                className="border-radius-5"
                src="/assets/imgs/news/thumb-13.jpg"
                alt="newsboard"
                width={200}
                height={300}
              />
              <figcaption>And far contrary smoked some contrary among stealthy</figcaption>
            </figure>
          </div>
          <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
          <h5>What's next?</h5>
          <p>Pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
          <hr className="wp-block-separator is-style-dots" />
          <p>Other yet this hazardous oh the until brave close towards stupidly euphemistically firefly boa some more underneath circa yet on as wow above ripe or blubbered one cobra bore ouch and this held ably one hence</p>
          <hr className="wp-block-separator is-style-wide" />
          <h3>Our Mission</h3>
          <p>Alexe more gulped much garrulous a yikes earthworm wiped because goodness bet mongoose that along accommodatingly tortoise indecisively admirable but shark dear some and unwillingly before far vindictive less much this on more less flexed far woolly from following glanced resolute unlike far this alongside against icily beyond flabby accidental.</p>
          <p className="text-center">
            <a href="#">
              <Image
                className="d-inline"
                src="/assets/imgs/ads/ads-2.jpg"
                alt="newsboard"
                width={700}
                height={105}
              />
            </a>
          </p>
          <hr className="wp-block-separator is-style-wide" />
          <h3 className="mb-30">Get in touch</h3>
          <form className="form-contact comment_form" action="/api/contact" method="POST" id="commentForm">
            <div className="row">
              {contactForm.showName && (
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                  </div>
                </div>
              )}
              {contactForm.showEmail && (
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                  </div>
                </div>
              )}
              {contactForm.showPhone && (
                <div className="col-12">
                  <div className="mb-3">
                    <input className="form-control" name="website" id="website" type="text" placeholder="Phone" />
                  </div>
                </div>
              )}
              {contactForm.showMessage && (
                <div className="col-12">
                  <div className="mb-3">
                    <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Message" defaultValue={""} />
                  </div>
                </div>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="button button-contactForm">
                {contactForm.submitText}
              </button>
            </div>
          </form>
          <hr className="wp-block-separator is-style-wide" />
        </div>
        <div className="divider-1 mb-30" />
        {socialShare.show && (
          <div className="single-social-share clearfix">
            <p className="text-uppercase">{socialShare.shareText}</p>
            <ul className="d-inline-block list-inline">
              {socialShare.platforms?.includes('facebook') && (
                <li className="list-inline-item">
                  <a className="social-icon facebook-icon text-xs-center color-white" target="_blank" href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
              )}
              {socialShare.platforms?.includes('twitter') && (
                <li className="list-inline-item">
                  <a className="social-icon twitter-icon text-xs-center color-white" target="_blank" href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
              )}
              {socialShare.platforms?.includes('pinterest') && (
                <li className="list-inline-item">
                  <a className="social-icon pinterest-icon text-xs-center color-white" target="_blank" href="#">
                    <i className="ti-pinterest" />
                  </a>
                </li>
              )}
              {socialShare.platforms?.includes('instagram') && (
                <li className="list-inline-item">
                  <a className="social-icon instagram-icon text-xs-center color-white" target="_blank" href="#">
                    <i className="ti-instagram" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
