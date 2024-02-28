import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { TWinterClothesItem } from './AllWinterClothesItem';
import { Button } from '@/components/ui/button';
import { FiTrash2 } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';
import { GiClothes } from 'react-icons/gi';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AllClothesEditForm } from './AllClothesEdit';
import {
  useDeleteClothesMutation,
  useGetClothesByUserQuery,
} from '@/redux/features/clothes/clothesApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setClotheId } from '@/redux/features/clothes/clothesSlice';
import { getUserEmail } from '@/redux/features/auth/authSlice';

const AllWinterClothes = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const { data, isLoading } = useGetClothesByUserQuery(email);
  const [deleteClothe] = useDeleteClothesMutation();

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center">
        <h3 className="text-center text-xl font-semibold py-5">All Clothes</h3>
        <Link
          to="/dashboard/create-winter-clothes"
          className="flex gap-2 my-gradient px-3 py-2 rounded-lg"
        >
          <MdOutlinePlaylistAdd className="text-xl" />
          <span>Add New Clothe</span>
          <GiClothes className="text-md" />
        </Link>
      </div>
      {isLoading && <span>Loading...</span>}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl NO.</TableHead>
            <TableHead className="text-center">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.data?.map((item: TWinterClothesItem, i: number) => (
            <TableRow key={item._id}>
              <TableCell className="w-20">{i + 1}</TableCell>
              <TableCell className="p-1 rounded-md w-40 px-5">
                <img
                  className="w-full h-16 rounded-md"
                  src={item.image}
                  alt=""
                />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="uppercase">
                {item?.size?.join(', ')}
              </TableCell>
              <TableCell className="w-[100px]">
                <div className="flex items-center gap-1">
                  <Dialog>
                    <DialogTrigger
                      asChild
                      onClick={() => {
                        dispatch(setClotheId(item._id));
                      }}
                    >
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-3 text-lg rounded-md">
                        <TbEdit />
                      </Button>
                    </DialogTrigger>
                    <AllClothesEditForm />
                  </Dialog>
                  <Button
                    onClick={() => {
                      deleteClothe(item._id);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 text-lg rounded-md"
                  >
                    <FiTrash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total Clothes Found:</TableCell>
            <TableCell className="text-center">{data?.data?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllWinterClothes;
