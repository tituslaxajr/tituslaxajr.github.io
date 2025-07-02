const { useEffect } = React;

function TopNav() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-4 py-2 w-full">
      <div className="text-xl font-bold text-green-700">StewardTrack</div>
      <div className="flex-1 px-4 hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded px-3 py-1 focus:outline-none focus:ring"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.144a3.478 3.478 0 00.613 3.845 3.5 3.5 0 01-5.94-3.845m5.327 0a5.982 5.982 0 001.014-5.4m-6.341 5.4a5.982 5.982 0 01-1.013-5.4m1.013 5.4L12 21m0-6v.009M15.516 16.5l.06.035M8.485 16.5l-.06.035M15.516 7.5l.06-.035M8.485 7.5l-.06-.035M9.799 9.214l.03-.041M14.2 9.214l-.03-.041M9.799 14.786l.03.041M14.2 14.786l-.03.041M12 7.5V3m0 0V2.25M12 3v.75" />
          </svg>
        </button>
        <span className="font-medium">John Doe</span>
        <button className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9.75h1.5m-1.5 3h1.5M5.25 6.375V5.25A2.25 2.25 0 017.5 3h9a2.25 2.25 0 012.25 2.25v1.125m0 0v11.25A2.25 2.25 0 0116.5 19.5h-9a2.25 2.25 0 01-2.25-2.25V6.375m13.5 0h-13.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Financial Overview",
    "Tithes & Offerings",
    "Expenses",
    "Financial Reports",
    "Members",
    "Attendance",
    "Events",
  ];
  return (
    <aside className="hidden md:flex flex-col bg-gradient-to-b from-green-700 to-green-500 text-white w-64 min-h-screen fixed">
      <ul className="flex-1 mt-4 space-y-2 px-4">
        {menuItems.map((item, idx) => (
          <li
            key={item}
            className={`px-3 py-2 rounded cursor-pointer hover:bg-green-600 ${idx === 0 ? 'bg-green-600' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="px-4 py-4 bg-green-800">
        <p className="font-semibold">John Doe</p>
        <p className="text-sm">Administrator</p>
      </div>
    </aside>
  );
}

function StatCard({ title, value, bgColor, textColor, icon }) {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center">
      <div className={`${bgColor} ${textColor} p-3 rounded-full mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className={`text-lg font-semibold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
}

function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Income"
        value="₱1,380,000.00"
        bgColor="bg-green-100"
        textColor="text-green-600"
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.5l9.695 5.736a.75.75 0 00.71 0L22.35 7.5M12 13.236l9.695-5.736M12 13.236V21" />
          </svg>
        )}
      />
      <StatCard
        title="Total Expenses"
        value="₱472,000.00"
        bgColor="bg-red-100"
        textColor="text-red-600"
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        )}
      />
      <StatCard
        title="Active Members"
        value="342"
        bgColor="bg-blue-100"
        textColor="text-blue-600"
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 18.75V15a4.5 4.5 0 10-9 0v3.75M9.75 11.25a3 3 0 116 0 3 3 0 01-6 0z" />
          </svg>
        )}
      />
      <StatCard
        title="Upcoming Events"
        value="12"
        bgColor="bg-purple-100"
        textColor="text-purple-600"
        icon={(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2.25v2.25M18 2.25v2.25M3.75 6.75h16.5M4.5 6.75v11.25A2.25 2.25 0 006.75 20.25h10.5A2.25 2.25 0 0019.5 18V6.75" />
          </svg>
        )}
      />
    </div>
  );
}

function FinancialOverview() {
  useEffect(() => {
    const ctx = document.getElementById('financialChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Income',
            backgroundColor: 'rgba(16,185,129,0.2)',
            borderColor: 'rgba(16,185,129,1)',
            data: [200, 400, 450, 300, 500, 600],
            fill: true,
          },
          {
            label: 'Expenses',
            backgroundColor: 'rgba(239,68,68,0.2)',
            borderColor: 'rgba(239,68,68,1)',
            data: [150, 250, 300, 200, 350, 400],
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
      },
    });
  }, []);

  return (
    <div>
      <div className="h-64">
        <canvas id="financialChart"></canvas>
      </div>
      <button className="mt-4 text-blue-600 hover:underline">View Details</button>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    'Offering recorded',
    'New member added',
    'Event scheduled',
  ];
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
      <ul className="list-disc pl-5 space-y-1">
        {activities.map((act) => (
          <li key={act}>{act}</li>
        ))}
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
      <div className="space-y-2">
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Record Offering</button>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Member</button>
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Schedule Event</button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen md:pl-64">
      <Sidebar />
      <div className="flex flex-col">
        <TopNav />
        <main className="p-6 bg-gray-100">
          <h1 className="text-2xl font-semibold mb-4">Welcome back, Pastor Juan!</h1>
          <StatsCards />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-white p-4 rounded shadow">
              <FinancialOverview />
            </div>
            <div className="space-y-6">
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Dashboard />);
