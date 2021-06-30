import { EuiInMemoryTable } from '@elastic/eui';
import React from 'react';

export const CountriesTable = ({ countries, loading }) => (
  <EuiInMemoryTable
    items={countries}
    columns={columns}
    search={search}
    loading={loading}
    pagination={true}
    sorting={true}
  />
);

const columns = [
  {
    field: 'name',
    name: 'Country name',
    sortable: true,
  },
  {
    field: 'emoji',
    name: 'Country flag',
    truncateText: true,
  },
  {
    field: 'continent',
    name: 'Continent',
    render: ({ name }) => name,
    sortable: true,
  },
  {
    field: 'code',
    name: 'ISO code',
    sortable: true,
  },
];

const search = {
  box: {
    incremental: true,
  },
};
