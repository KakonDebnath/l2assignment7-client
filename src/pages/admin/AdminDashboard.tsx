import Container from '@/components/container/Container';
import { useGetAllSuppliesDataQuery } from '@/redux/features/peiChart/peiChartApi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export type TSupplyData = {
  _id: string;
  name: string;
  quantity: number;
};

const AdminDashboard = () => {
  const { data: supplyData, isLoading } = useGetAllSuppliesDataQuery(undefined);

  console.log(supplyData?.data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const data = {
    labels: supplyData?.data?.map((item: TSupplyData) => item.name),
    datasets: [
      {
        data: supplyData?.data?.map((item: TSupplyData) => item.quantity),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };
  return (
    <div>
      <h2>Supply Statistics</h2>
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
        <div style={{ width: '400px', height: '400px' }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
