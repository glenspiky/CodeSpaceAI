import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import AppAreaChart from "@/components/AppAreaChart";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 p-4">
      {/* Changed bg-primary-foreground to bg-card and added borders */}
      <div className="bg-card border text-card-foreground p-4 rounded-xl xl:col-span-1 lg:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-card border text-card-foreground p-4 rounded-xl">
        test
      </div>
      <div className="bg-card border text-card-foreground p-4 rounded-xl">
        <AppPieChart />
      </div>
      <div className="bg-card border text-card-foreground p-4 rounded-xl"></div>{" "}
      <div className="bg-card border text-card-foreground p-4 rounded-xl lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-card border text-card-foreground p-4 rounded-xl">
        test
      </div>
    </div>
  );
}
