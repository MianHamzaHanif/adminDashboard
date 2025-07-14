import React, { useEffect, useState } from 'react';
import { getUserPackageDetails } from '../../blockchain/instances/contract';
import { ethers } from 'ethers';

const packageNames = {
  20: 'Opera Mass 20',
  50: 'Morreal Mass 50',
  100: 'Jadore Mass 100',
  500: 'Shumuk Mass 500',
  1000: 'Million Luxe Mass 1000',
  5000: 'Majestic Mass 5000',
};

const columns = [
  { label: 'Package Name', key: 'name' },
  { label: 'Total Amount', key: 'joiningAmount' },
  { label: 'First Purchase Date', key: 'purchaseDate' },
];

export default function UserPackageHistory({ address }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;
    setLoading(true);

    const packageAmounts = [20, 50, 100, 500, 1000, 5000];
    Promise.all(
      packageAmounts.map(async (pkg) => {
        try {
          const details = await getUserPackageDetails(pkg, address);
          const timestamp = details[3];
          const amount = details[5];
          return {
            name: packageNames[pkg] || `Package ${pkg}`,
            joiningAmount: amount ? ethers.formatEther(amount) : '',
            purchaseDate: timestamp ? new Date(Number(timestamp) * 1000).toLocaleString() : '',
          };
        } catch (e) {
          return null;
        }
      })
    )
      .then((allPackages) => {
        setData(allPackages.filter(row => row && row.joiningAmount && row.joiningAmount !== '0.0'));
      })
      .finally(() => setLoading(false));
  }, [address]);

  return (
    <div style={{ margin: '24px 0' }}>
      <h4>User Package History</h4>
      <table className="all-customers-table">
        <thead>
          <tr>
            {columns.map(col => <th key={col.key}>{col.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={columns.length}>Loading...</td></tr>
          ) : data.length === 0 ? (
            <tr><td colSpan={columns.length}>No Data Found</td></tr>
          ) : data.map((row, idx) => (
            <tr key={idx}>
              {columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 