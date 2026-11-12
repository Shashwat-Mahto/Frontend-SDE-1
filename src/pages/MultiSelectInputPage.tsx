import MultiSelectInput from "../components/MultiSelectInput/MultiSelectInput.tsx";
import type { OptionType } from "../components/MultiSelectInput/types/MultiSelectType.ts";

const options: OptionType[] = [
    {
        id: 1,
        label: "Rahul Sharma",
        email: "rahul.sharma@gmail.com",
        role: "Frontend Developer"
    },
    {
        id: 2,
        label: "Priya Verma",
        email: "priya.verma@gmail.com",
        role: "Backend Developer"
    },
    {
        id: 3,
        label: "Aman Gupta",
        email: "aman.gupta@gmail.com",
        role: "UI/UX Designer"
    },
    {
        id: 4,
        label: "Sneha Kapoor",
        email: "sneha.kapoor@gmail.com",
        role: "Product Manager"
    },
    {
        id: 5,
        label: "Karan Malhotra",
        email: "karan.malhotra@gmail.com",
        role: "Frontend Developer"
    },
    {
        id: 6,
        label: "Ananya Singh",
        email: "ananya.singh@gmail.com",
        role: "QA Engineer"
    },
    {
        id: 7,
        label: "Rohit Mehta",
        email: "rohit.mehta@gmail.com",
        role: "DevOps Engineer"
    },
    {
        id: 8,
        label: "Ishita Jain",
        email: "ishita.jain@gmail.com",
        role: "Frontend Developer"
    },
    {
        id: 9,
        label: "Arjun Nair",
        email: "arjun.nair@gmail.com",
        role: "Backend Developer"
    },
    {
        id: 10,
        label: "Meera Joshi",
        email: "meera.joshi@gmail.com",
        role: "Product Designer"
    }
];

function MultiSelectInputPage() {
  return <MultiSelectInput options={options} />;
}

export default MultiSelectInputPage;
