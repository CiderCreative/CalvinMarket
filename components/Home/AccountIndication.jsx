import React from "react";

const AccountIndication = ({ userName = "?????" }) => {
  return <div className="max-xl:hidden">Logged in as {userName}</div>;
};

export default AccountIndication;
