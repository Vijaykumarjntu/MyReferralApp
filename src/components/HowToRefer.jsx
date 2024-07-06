import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const HowToRefer = () => {
  return (
    <section className="bg-blue-50 p-8">
      <h2 className="text-3xl font-bold mb-6">How Do I Refer?</h2>
      <div className="flex space-x-8">
        <div className="bg-white p-6 rounded shadow">
          <PersonIcon style={{ fontSize: 48, color: '#3B82F6' }} />
          <p className="mt-4">Submit referrals easily via our website's referral section.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <AssignmentIcon style={{ fontSize: 48, color: '#3B82F6' }} />
          <p className="mt-4">Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <AccountBalanceWalletIcon style={{ fontSize: 48, color: '#3B82F6' }} />
          <p className="mt-4">Both parties receive a bonus 30 days after program enrollment.</p>
        </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">Refer Now</button>
    </section>
  );
};

export default HowToRefer;
