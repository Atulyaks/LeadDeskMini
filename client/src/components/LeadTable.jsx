import { Mail, CalendarDays } from "lucide-react";
import API from "../services/api";
import toast from "react-hot-toast";

function LeadTable({ leads = [], loading, refresh }) {
  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/leads/${id}`, { status });
      toast.success("Status updated");
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  const statusClasses = {
    New: "bg-blue-100 text-blue-700",
    Contacted: "bg-yellow-100 text-yellow-700",
    Closed: "bg-green-100 text-green-700",
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Leads Found
        </h2>

        <p className="mt-3 text-gray-500">
          No lead submissions yet.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Name</th>
            <th className="px-6 py-4 text-left font-semibold">Email</th>
            <th className="px-6 py-4 text-left font-semibold">Budget</th>
            <th className="px-6 py-4 text-left font-semibold">Message</th>
            <th className="px-6 py-4 text-left font-semibold">Created</th>
            <th className="px-6 py-4 text-left font-semibold">Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-t transition hover:bg-slate-50"
            >
              <td className="px-6 py-5 font-medium">
                {lead.name}
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  {lead.email}
                </div>
              </td>

              <td className="px-6 py-5">
                {lead.budget}
              </td>

              <td className="max-w-xs truncate px-6 py-5">
                {lead.message}
              </td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarDays size={16} />
                  {new Date(lead.createdAt).toLocaleDateString()}
                </div>
              </td>

              <td className="px-6 py-5">
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                  className={`rounded-lg border px-3 py-2 font-medium outline-none ${statusClasses[lead.status]}`}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;