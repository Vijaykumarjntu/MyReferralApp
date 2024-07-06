import React from 'react';

const ReferralBenefits = () => {
  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">What Are The Referral Benefits?</h2>
      <div className="flex">
        <div className="w-1/4">
          <ul className="space-y-2">
            <li className="p-2 bg-blue-100 rounded">Product Management</li>
            <li className="p-2 bg-blue-100 rounded">Strategy & Leadership</li>
            <li className="p-2 bg-blue-100 rounded">Business Management</li>
            <li className="p-2 bg-blue-100 rounded">FinTech</li>
            <li className="p-2 bg-blue-100 rounded">Senior Management</li>
            <li className="p-2 bg-blue-100 rounded">Data Science</li>
            <li className="p-2 bg-blue-100 rounded">Digital Transformation</li>
          </ul>
        </div>
        <div className="w-3/4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Programs</th>
                <th className="py-2">Referrer Bonus</th>
                <th className="py-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Professional Certificate Program in Product Management</td>
                <td className="py-2">₹ 7,000</td>
                <td className="py-2">₹ 9,000</td>
              </tr>
              {/* Add more rows as necessary */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReferralBenefits;
