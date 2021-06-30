import './App.css';
import {CountriesTable} from "./CountriesTable";
import {useQuery} from "@apollo/client";
import {COUNTRY_QUERY} from "./queries";

function App() {
  const {loading, error, data} = useQuery(COUNTRY_QUERY);

  console.log({loading, data, error});

  const countries = data?.countries ?? [];

  return (
    <main>
      <header>
        Countries List
      </header>

      <CountriesTable countries={countries} loading={loading} />
    </main>
  );
}

export default App;
