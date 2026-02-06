import LoginForm from "@/components/sections/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Access Your NewsBoard Account",
  description: "Sign in to your NewsBoard account to access personalized news, save articles, and manage your preferences. Secure login for registered users.",
  keywords: ["login", "sign in", "account", "user login", "secure login", "newsboard account"],
  alternates: {
    canonical: '/login',
  },
  openGraph: {
    title: "Login - Access Your NewsBoard Account",
    description: "Sign in to your NewsBoard account to access personalized news and manage your preferences.",
    url: 'https://newsboard.com/login',
    siteName: 'NewsBoard',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Login - Access Your NewsBoard Account",
    description: "Sign in to your NewsBoard account to access personalized news and manage your preferences.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Login() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-md-10">
          <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
            <div className="padding_eight_all bg-white">
              <h2 className="mb-50 text-center position-relative divider-wave">Login To Your Account</h2>
              <p className="text-muted text-center mb-30">Welcome back! Please enter your credentials</p>

              {/* Social Login Options */}
              <div className="social-login mb-4">
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
                <div className="divider-text-center mt-15 mb-15 text-muted">
                  <span> Or login with email </span>
                </div>
              </div>

              {/* Modern Login Form */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
