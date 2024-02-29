import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useGetAllVolunteerQuery } from '@/redux/features/volunteer/volunteerApi';

export type TVolunteer = {
  _id: string;
  creatorEmail: string;
  name: string;
  email: string;
  image: string;
  phone: string;
  location: string;
  userId: string;
};

const AllWinterClothes = () => {
  const { data, isLoading } = useGetAllVolunteerQuery(undefined);
  return (
    <div className="container mx-auto min-h-[calc(100vh-100px)]">
      <h3 className="text-center text-3xl font-semibold py-5">
        Our Volunteers
      </h3>

      {isLoading && <span>Loading...</span>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl NO.</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data?.map((item: TVolunteer, i: number) => (
            <TableRow key={item._id}>
              <TableCell className="w-20">{i + 1}</TableCell>
              <TableCell className="p-1 rounded-md w-40 px-5">
                <img
                  className="size-14 rounded-full mx-auto"
                  src={item.image}
                  alt=""
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Volunteer Found:</TableCell>
            <TableCell className="text-center">{data?.data?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllWinterClothes;
