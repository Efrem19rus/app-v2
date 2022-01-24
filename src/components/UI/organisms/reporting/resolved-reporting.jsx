import { Divider } from "@/components/UI/atoms/divider";
import { OutlinedCard } from "@/components/UI/molecules/outlined-card";
import { Badge } from "@/components/UI/atoms/badge";
import { classNames } from "@/utils/classnames";

export const ResolvedReportingCard = ({ details }) => {
  const { name, imgSrc, resolvedOn, status, statusText } = details;
  return (
    <OutlinedCard className="bg-white p-6" type="link">
      <div className="flex justify-between">
        <div>
          <div className="w-18 h-18 bg-DEEAF6 rounded-full">
            <img src={imgSrc} alt={name} className="inline-block max-w-full" />
          </div>
          <h4 className="text-h4 font-sora font-semibold uppercase mt-4">
            {name}
          </h4>
        </div>
        <div>
          <Badge
            className={classNames(
              "capitalize",
              !status && "border-FA5C2F text-FA5C2F"
            )}
          >
            {statusText}
          </Badge>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Stats */}
      <div className="flex justify-between text-sm px-1 mb-4">
        <span className="">Resolved On: {resolvedOn}</span>
      </div>
    </OutlinedCard>
  );
};