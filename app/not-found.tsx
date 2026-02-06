import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <>
      <div className="mt-100 mb-200">
        <div className="entry-wraper">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-lg-block d-none text-center">
              <Image className="d-inline" src="/assets/imgs/theme/404.png" alt="newsboard" width={500} height={500} />
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <h1 className="mb-20 display-1">404</h1>
              <h4 className="mb-30">We’re sorry, we seem to have lost this page, but we don’t want to lose you.</h4>
              <p>
                Visit the
                <Link href="/">
                  <u> Homepage </u>
                </Link>
              </p>
              <div className="mb-3">
                <Link href="/contact" className="btn btn-facebook btn-outline-secondary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
