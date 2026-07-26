import { useEffect, useState } from "react";
import { Search, RefreshCw } from "lucide-react";
import API from "../services/api";
import StatsCards from "../components/StatsCards";
import LeadTable from "../components/LeadTable";
import toast from "react-hot-toast";

function Admin() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await API.get("/leads");

      // Your backend returns:
      // { success: true, leads: [...] }
      const leadData = response.data.leads || [];

      setLeads(leadData);
      setFilteredLeads(leadData);
    } catch (err) {
      console.error(err);
      toast.error("Unable to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    const filtered = leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredLeads(filtered);
  }, [search, leads]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold">
            LeadDesk Admin Dashboard
          </h1>

          <p className="mt-2 text-red-100">
            Manage and monitor all customer leads.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <StatsCards leads={leads} />

        <div className="mt-10 mb-8 flex flex-col md:flex-row justify-between gap-4">

          <div className="relative w-full md:w-96">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border bg-white py-3 pl-12 pr-4 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700"
          >
            <RefreshCw size={18} />
            Refresh
          </button>

        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <LeadTable
            leads={filteredLeads}
            loading={loading}
            refresh={fetchLeads}
          />
        </div>

      </div>
    </div>
  );
}

export default Admin;