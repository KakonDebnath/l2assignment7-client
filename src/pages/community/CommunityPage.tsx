import Container from '@/components/container/Container';
import { useGetAllCommunityPostQuery } from '@/redux/features/community/communityApi';
import moment from 'moment';

const CommunityPage = () => {
  const { data: communityPostData, isLoading } =
    useGetAllCommunityPostQuery(undefined);
  return (
    <Container>
      <h2>Community Gratitude Wall</h2>
      {isLoading && <span>Loading.......</span>}
      {communityPostData?.data?.map((item) => (
        <div className="px-10 space-y-4 pt-5" key={item?._id}>
          <div className="flex items-center gap-4">
            <img src="" alt="" className="bg-red size-14 rounded-full" />
            <div className="flex flex-col">
              <h3>{item?.email}</h3>
              <small>{moment(item?.timestamp).startOf('hour').fromNow()}</small>
            </div>
          </div>
          <p>{item?.post}</p>
          <div className="border-b bottom-2 border-gray"></div>
        </div>
      ))}
    </Container>
  );
};

export default CommunityPage;
