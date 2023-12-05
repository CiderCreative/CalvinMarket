import React from "react";

const AccountIndication = ({ userName = "?????" }) => {
  return <div className="max-xl:hidden">You are logged in as {userName}</div>;
};

export default AccountIndication;
