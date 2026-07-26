import {
  Users,
  UserPlus,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

function StatsCards({ leads = [] }) {
  const leadArray = Array.isArray(leads) ? leads : [];

  const total = leadArray.length;
  const newLeads = leadArray.filter(l => l.status === "New").length;
  const contacted = leadArray.filter(l => l.status === "Contacted").length;
  const closed = leadArray.filter(l => l.status === "Closed").length;


  const cards = [
    {
      title: "Total Leads",
      value: total,
      icon: Users,
      bg: "from-blue-500 to-indigo-600",
    },
    {
      title: "New Leads",
      value: newLeads,
      icon: UserPlus,
      bg: "from-cyan-500 to-blue-500",
    },
    {
      title: "Contacted",
      value: contacted,
      icon: PhoneCall,
      bg: "from-yellow-500 to-orange-500",
    },
    {
      title: "Closed",
      value: closed,
      icon: CheckCircle2,
      bg: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-3 text-gray-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.bg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon className="text-white" size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;