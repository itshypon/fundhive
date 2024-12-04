import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery && allCampaigns.length > 0) {
      const filtered = allCampaigns.filter(campaign => 
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(allCampaigns);
    }
  }, [searchParams, allCampaigns]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
    
    // Perform dynamic search
    if (searchTerm.trim() && allCampaigns.length > 0) {
      const filtered = allCampaigns.filter(campaign => 
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(allCampaigns);
    }
  };

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch, setAllCampaigns }}>
      {children}
    </SearchContext.Provider>
  );
};
