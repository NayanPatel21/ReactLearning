interface loginProps {
  islogin: boolean;
  userName?: string;
}

function ConditionalProps({ islogin, userName = "Guest" }: loginProps) {
  const loginMessage = <h2 className="login-message"> Welcome {userName}</h2>;
  const logoutMessage = <h2 className="logout-message"> Please login</h2>;
  return <>{islogin ? loginMessage : logoutMessage}</>;
}
export default ConditionalProps;
