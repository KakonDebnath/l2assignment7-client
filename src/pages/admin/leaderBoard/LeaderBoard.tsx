import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLeaderboardQuery } from '@/redux/features/donate/donateApi';


const LeaderBoard = () => {
  const { data: LearboardData, isLoading } = useLeaderboardQuery(undefined);
  return (
    <div className="container mx-auto ">
      <h3 className="text-center text-xl font-semibold py-5">Leader Board</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        {isLoading && <span>Loading...</span>}
        <TableBody>
          {LearboardData?.data?.map((item, i) => (
            <TableRow key={item._id}>
              <TableCell className="w-20">{i + 1}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderBoard;
