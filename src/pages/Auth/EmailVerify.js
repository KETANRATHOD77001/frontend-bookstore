import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(true);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `/api/v1/auth/${param.id}/verify/${param.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [param]);

    return (
        <>
            {validUrl ? (
                <div title="Email Verification - Ecommer App">
                    <div className="login-form" style={{ minHeight: "100vh", marginTop: "0" }}>
                        <form>
                            <h1>Email verified successfully</h1>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <button>
                                    LOGIN
                                </button>
                            </Link>
                        </form>
                    </div>

                </div>
            ) : (
                <div className="pnf">
                    <h1 className="pnf-title">404</h1>
                    <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                    <Link to="/" className="pnf-btn">
                        Go Back
                    </Link>
                </div>
            )}
        </>
    );
};

export default EmailVerify;
