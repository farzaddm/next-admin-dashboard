import {columns, Payment} from "@/app/payments/columns";
import {DataTable} from "@/app/payments/data-table";

const getData = (): Payment[] => {
  return [
    {
      id: "pay_001",
      amount: 125.50,
      username: "john_doe",
      status: "success",
      email: "john.doe@email.com",
    },
    {
      id: "pay_002",
      amount: 89.99,
      username: "sarah_smith",
      status: "pending",
      email: "sarah.smith@email.com",
    },
    {
      id: "pay_003",
      amount: 250.00,
      username: "mike_johnson",
      status: "failure",
      email: "mike.j@email.com",
    },
    {
      id: "pay_004",
      amount: 45.75,
      username: "emily_wilson",
      status: "success",
      email: "emily.w@email.com",
    },
    {
      id: "pay_005",
      amount: 320.40,
      username: "david_brown",
      status: "pending",
      email: "david.brown@email.com",
    },
    {
      id: "pay_006",
      amount: 78.20,
      username: "lisa_anderson",
      status: "success",
      email: "lisa.a@email.com",
    },
    {
      id: "pay_007",
      amount: 1500.00,
      username: "robert_taylor",
      status: "failure",
      email: "robert.t@email.com",
    },
    {
      id: "pay_008",
      amount: 67.80,
      username: "amanda_martin",
      status: "success",
      email: "amanda.m@email.com",
    },
    {
      id: "pay_009",
      amount: 234.56,
      username: "chris_lee",
      status: "pending",
      email: "chris.lee@email.com",
    },
    {
      id: "pay_010",
      amount: 99.99,
      username: "jessica_white",
      status: "success",
      email: "jessica.w@email.com",
    },
    {
      id: "pay_011",
      amount: 450.30,
      username: "kevin_hall",
      status: "failure",
      email: "kevin.h@email.com",
    },
    {
      id: "pay_012",
      amount: 189.75,
      username: "michelle_clark",
      status: "pending",
      email: "michelle.c@email.com",
    },
    {
      id: "pay_013",
      amount: 76.40,
      username: "thomas_king",
      status: "success",
      email: "thomas.k@email.com",
    },
    {
      id: "pay_014",
      amount: 560.00,
      username: "rachel_green",
      status: "success",
      email: "rachel.g@email.com",
    },
    {
      id: "pay_015",
      amount: 34.50,
      username: "daniel_young",
      status: "pending",
      email: "daniel.y@email.com",
    },
    {
      id: "pay_016",
      amount: 890.25,
      username: "stephanie_lopez",
      status: "failure",
      email: "stephanie.l@email.com",
    },
    {
      id: "pay_017",
      amount: 145.60,
      username: "matthew_harris",
      status: "success",
      email: "matthew.h@email.com",
    },
    {
      id: "pay_018",
      amount: 67.30,
      username: "lauren_moore",
      status: "pending",
      email: "lauren.m@email.com",
    },
    {
      id: "pay_019",
      amount: 420.80,
      username: "joshua_thompson",
      status: "success",
      email: "joshua.t@email.com",
    },
    {
      id: "pay_020",
      amount: 95.45,
      username: "megan_walker",
      status: "failure",
      email: "megan.w@email.com",
    },
    {
      id: "pay_021",
      amount: 278.90,
      username: "brandon_scott",
      status: "pending",
      email: "brandon.s@email.com",
    },
    {
      id: "pay_022",
      amount: 150.25,
      username: "nicole_baker",
      status: "success",
      email: "nicole.b@email.com",
    },
    {
      id: "pay_023",
      amount: 640.00,
      username: "andrew_miller",
      status: "success",
      email: "andrew.m@email.com",
    },
    {
      id: "pay_024",
      amount: 83.60,
      username: "kimberly_evans",
      status: "failure",
      email: "kimberly.e@email.com",
    },
    {
      id: "pay_025",
      amount: 312.75,
      username: "ryan_allen",
      status: "pending",
      email: "ryan.a@email.com",
    },
    {
      id: "pay_026",
      amount: 45.00,
      username: "olivia_wright",
      status: "success",
      email: "olivia.w@email.com",
    },
    {
      id: "pay_027",
      amount: 780.50,
      username: "justin_nelson",
      status: "failure",
      email: "justin.n@email.com",
    },
    {
      id: "pay_028",
      amount: 129.99,
      username: "emma_roberts",
      status: "pending",
      email: "emma.r@email.com",
    },
    {
      id: "pay_029",
      amount: 350.20,
      username: "jacob_campbell",
      status: "success",
      email: "jacob.c@email.com",
    },
    {
      id: "pay_030",
      amount: 99.50,
      username: "hannah_mitchell",
      status: "success",
      email: "hannah.m@email.com",
    },
  ];
};

const PaymentPage = () => {
  const data = getData()
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentPage;