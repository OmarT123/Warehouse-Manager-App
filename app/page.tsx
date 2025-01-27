import {
  PersonIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  BackpackIcon,
  CalendarIcon,
} from "@radix-ui/react-icons";
import InfoCard from "./components/InfoCard";

// Personal Information
const personalInfo = [
  { title: "Name", value: "Omar Tamer Abdelaty", icon: <PersonIcon /> },
  { title: "Age", value: "21 Years Old", icon: <CalendarIcon /> },
  {
    title: "Email",
    value: "omarabdelaty213@gmail.com",
    icon: <EnvelopeClosedIcon />,
  },
  { title: "Phone", value: "+20 106 338 1562", icon: <MobileIcon /> },
  {
    title: "University",
    value: "German University in Cairo, Year of Graduation: 2025",
    icon: <BackpackIcon />,
  },
];

/**
 * Home Page
 * The main page of the application. Creates a card for each item in the personalInfo array.
 */
export default function Home() {
  return (
    <div className="flex justify-center bg-transparent">
      <main className="flex-grow p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent">
        {personalInfo.map((info, index) => (
          <InfoCard key={index} info={info} />
        ))}
      </main>
    </div>
  );
}
