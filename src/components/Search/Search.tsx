/**
 * Search Input -> component
 *
 * Search Result -> compoment
 */

import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const ENDPOINT = "https://dummyjson.com/users/search";
type SearchInputType = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type UserDataType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
const SearchInput = ({ value, handleChange }: SearchInputType) => {
  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

const SearchResults = ({
  data,
  loading,
  error,
  query
}: {
  data: UserDataType[];
  loading: boolean;
  error: boolean;
  query:string
}) => {
  // Empty input: show nothing, even if old results are still in state.
  if (!query) return null;

  return loading ? (
    <span>Loading</span>
  ) : error ? (
    <span>Something went wrong. Please try again.</span>
  ) : data.length === 0 ? (
    <span>No Data Found</span>
  ) : (
    <ul>
      {data?.map((user: UserDataType) => (
        <li
        key={user.id}>{user?.firstName}-{user?.lastName}</li>
      ))}
    </ul>
  );
};
export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [userData, setUserData] = useState([]);

  const debouncedValue = useDebounce(query, 300);

  const serializer = (item: any) => {
    return {
      id: item?.id,
      firstName: item?.firstName,
      lastName: item?.lastName,
      email: item?.email,
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchData = async (val: string) => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(`${ENDPOINT}?q=${val}`);
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const result = await res.json();
      const serializedUserData = result?.users?.map(serializer);
      setUserData(serializedUserData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!query || !debouncedValue) return;

    fetchData(debouncedValue);
  }, [debouncedValue]);
  return (
    <div>
      <div>
        <SearchInput value={query} handleChange={handleChange} />
      </div>
      <div>
        <SearchResults data={userData} loading={loading} error={error} query={query} />
      </div>
    </div>
  );
};
