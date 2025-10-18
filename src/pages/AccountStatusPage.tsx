import { Link, useLocation } from "react-router";

const AccountStatusPage = () => {
  const location = useLocation();
  const status = location.state?.status || "UNKNOWN";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Account {status}</h2>
        <p className="mb-4">
          Your account is currently <b>{status}</b>. Please contact support to
          resolve this issue.
        </p>
        <Link to="/login" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default AccountStatusPage;
