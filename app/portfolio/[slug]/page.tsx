import React from "react";

const PortfolioDetail = ({ params }: { params: { slug: string } }) => {
  return <div>PortfolioDetails for {params.slug}</div>;
};

export default PortfolioDetail;
