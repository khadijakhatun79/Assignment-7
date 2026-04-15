import { useEffect, useState } from "react";

const useApps = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch("/friends.json");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 800);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  return { friends, loading, error };
};

export default useApps;