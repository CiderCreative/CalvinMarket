import React from "react";

const AccountIndication = ({ userName = "?????" }) => {
  return (
    <div className="text-subtle max-xl:hidden">Logged in as {userName}</div>
  );
};

export default AccountIndication;
