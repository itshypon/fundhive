import React, { useEffect } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";
import { useSearch } from "../components/SearchProvider";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const { campaigns, isLoading } = useStateContext();
  const { searchResults, setAllCampaigns } = useSearch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setAllCampaigns(campaigns);
  }, [campaigns, setAllCampaigns]);

  const displayCampaigns = searchParams.get('q') ? searchResults : campaigns;

  return (
    <div>
      <DisplayCampaigns
        title={searchParams.get('q') ? "Search Results" : "All Campaigns"}
        isLoading={isLoading}
        campaigns={displayCampaigns}
      />
    </div>
  );
};

export default Home;

