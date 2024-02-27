import { cn } from '@/lib/utils';

type TItems = {
  id: number;
  name: string;
  designation: string;
  message: string;
  image: string;
};

const TestimonialItem = ({
  items,
  className,
}: {
  items: TItems;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'hover:bg-gradient-to-r hover:from-[#fec600] hover:to-[#cb9201] rounded-2xl p-10 pr-20 transition-all shadow-md',
        className
      )}
    >
      <div className="flex items-center gap-3 roboto pb-5">
        <div
          className="rounded-full size-20 bg-red-400 bg-cover bg-center"
          style={{
            backgroundImage: `url("${items.image}")`,
          }}
        ></div>
        <div>
          <h5 className="text-2xl font-medium">{items.name}</h5>
          <p className="text-xl">{items.designation}</p>
        </div>
      </div>
      <p>{items.message}</p>
    </div>
  );
};

export default TestimonialItem;
