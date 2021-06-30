import './App.css';
import {CountriesTable} from "./CountriesTable";
import {useQuery} from "@apollo/client";
import {COUNTRY_QUERY} from "./queries";
import {EuiPage, EuiPageBody, EuiPageContent, EuiPageHeader} from "@elastic/eui";

function App() {
  const {loading, data} = useQuery(COUNTRY_QUERY);

  const countries = data?.countries ?? [];

  return (
    <main>
      <EuiPage restrictWidth={true}>
        <EuiPageBody>
          <EuiPageHeader pageTitle="Countries List" />
          <EuiPageContent>
            <CountriesTable countries={countries} loading={loading}/>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </main>
  );
}

export default App;
