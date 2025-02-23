export const AppCard = ({ data }: any) => {
  return (
    <div className="app-card w-full max-w-[500px] lg:h-full lg:justify-end">
      <div className="app-card-thumb">
        <img src={data.thumb} alt="" />
      </div>
      <div className="app-card-title mb-0 lg:mb-2 mt-4 w-full text-left">{data.title}</div>
      <div className="app-card-description text-left lg:flex lg:justify-start lg:!items-start lg:h-[96px]">
        {data.description}
      </div>
    </div>
  );
};
