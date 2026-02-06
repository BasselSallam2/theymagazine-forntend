import SignupForm from "@/components/sections/auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Create Your NewsBoard Account",
  description: "Join NewsBoard and create your free account to access personalized news, save articles, and stay updated with the latest breaking stories and analysis.",
  keywords: ["sign up", "register", "create account", "join newsboard", "free account", "personalized news"],
  alternates: {
    canonical: '/signup',
  },
  openGraph: {
    title: "Sign Up - Create Your NewsBoard Account",
    description: "Join NewsBoard and create your free account to access personalized news and stay updated.",
    url: 'https://newsboard.com/signup',
    siteName: 'NewsBoard',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Sign Up - Create Your NewsBoard Account",
    description: "Join NewsBoard and create your free account to access personalized news and stay updated.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Signup() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-md-10">
          <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
            <div className="padding_eight_all bg-white">
              <h2 className="mb-50 text-center position-relative divider-wave">Create an Account</h2>
              <p className="text-muted text-center mb-30">* All information is encrypted and confidential</p>

              {/* Modern Signup Form */}
              <SignupForm />

              {/* Social Signup Options */}
              <div className="divider-text-center mt-50 mb-15 text-muted">
                <span>Or use the social network account</span>
              </div>
              <ul className="btn-login list_none mb-30 text-center list-inline">
                <li className="mb-10 list-inline-item">
                  <a href="#" className="btn btn-facebook btn-outline-secondary">
                    <i className="ti-facebook mr-5" />
                    Continue with Facebook
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn btn-google btn-outline-secondary">
                    <i className="ti-google mr-5" />
                    Continue with Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
