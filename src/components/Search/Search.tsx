/**
 * Search Input -> component
 *
 * Search Result -> compoment
 */

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import useDebounce from "../../hooks/useDebounce";
import "./Search.css";

const ENDPOINT = "https://dummyjson.com/users/search";
type SearchInputType = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
};

type UserDataType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
const SearchInput = ({ value, handleChange, handleClear }: SearchInputType) => {
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Search users..."
        aria-label="Search users"
        onChange={handleChange}
        value={value}
      />
      {value && (
        <button
          type="button"
          className="search-clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <FaXmark />
        </button>
      )}
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

  return (
    <div className="search-results">
      {loading ? (
        <p className="search-status">Loading...</p>
      ) : error ? (
        <p className="search-status search-status-error">
          Something went wrong. Please try again.
        </p>
      ) : data.length === 0 ? (
        <p className="search-status">No Data Found</p>
      ) : (
        <ul className="search-list">
          {data?.map((user: UserDataType) => (
            <li key={user.id} className="search-item">
              <span className="search-name">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="search-email">{user?.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
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
    <div className="search">
      <SearchInput
        value={query}
        handleChange={handleChange}
        handleClear={() => setQuery("")}
      />
      <SearchResults data={userData} loading={loading} error={error} query={query} />
    </div>
  );
};
