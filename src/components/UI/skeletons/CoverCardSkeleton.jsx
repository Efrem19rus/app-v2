import { Badge } from "@/components/UI/atoms/badge";
import { Divider } from "@/components/UI/atoms/divider";
import { OutlinedCard } from "@/components/UI/molecules/outlined-card";
import SkeletonElements from "@/components/UI/skeletons/SkeletonElements";
import SkeletonImage from "@/components/UI/skeletons/SkeletonImage";

const CoverCardSkeleton = () => {
  return (
    <OutlinedCard
      className="bg-white animate-pulse p-6 rounded-3xl"
      type="link"
    >
      <div className="flex justify-between">
        <div>
          <div className="">
            <SkeletonImage />
          </div>
          <h4 className="text-h4 font-sora font-semibold uppercase mt-4">
            <SkeletonElements type={"text"} />
          </h4>
          <div className="text-sm text-7398C0 uppercase mt-2">
            <SkeletonElements type={"text"} />
          </div>
        </div>
        <div>
          <Badge className={"w-20"}>
            <SkeletonElements type={"text"} />
          </Badge>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Stats */}
      <div className="flex justify-between text-sm px-1">
        <span className="uppercase">utilization Ratio</span>
        <span className="font-semibold text-right">
          {<SkeletonElements type={"text"} />}%
        </span>
      </div>
      <div className="mt-2 mb-4">
        <SkeletonElements type={"text"} />
      </div>
      <div className="flex justify-between text-sm px-1">
        <span className="">
          Protection: ${<SkeletonElements type={"text"} />}
        </span>
        <span className="text-right">
          Liquidity: ${<SkeletonElements type={"text"} />}
        </span>
      </div>
    </OutlinedCard>
  );
};

export default CoverCardSkeleton;
