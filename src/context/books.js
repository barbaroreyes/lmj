import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listJollas } from "../graphql/queries";
import { processOrder } from "../graphql/mutations";

const JollaContext = React.createContext();

const JollaProvider = ({ children }) => {
  const [jollas, setJollas] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJollas();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchJollas = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listJollas,
        authMode: "API_KEY"
      });
      const jollas = data.listJollas.items;
      const featured = jollas.filter((jolla) => {
        return !!jolla.featured;
      });
      setJollas(jollas);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <JollaContext.Provider value={{ jollas, featured, loading, checkout }}>
      {children}
    </JollaContext.Provider>
  );
};

export { JollaContext, JollaProvider };
