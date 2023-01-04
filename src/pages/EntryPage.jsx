import Navbar from "../components/Navbar";
import VehicleForm from "../components/VehicleForm";

export default function EntryPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar here */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <VehicleForm />
          </div>
        </main>
      </div>
    </div>
  );
}
