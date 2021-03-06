import { useCoverInfo } from "@/src/hooks/useCoverInfo";
import { Badge } from "@/components/UI/atoms/badge";
import { Divider } from "@/components/UI/atoms/divider";
import { OutlinedCard } from "@/components/UI/molecules/outlined-card";
import { getCoverImgSrc } from "@/src/helpers/cover";
import { convertFromUnits } from "@/utils/bn";
import { classNames } from "@/utils/classnames";
import { unixToDate } from "@/utils/date";

export const ExpiredPolicyCard = ({ details }) => {
  const { totalAmountToCover, expiresOn, cover } = details;
  const { coverInfo } = useCoverInfo(cover.id);
  const imgSrc = getCoverImgSrc({ key: cover.id });

  const status = "";
  const statusType = "failure";

  return (
    <OutlinedCard className="bg-white p-6" type="normal">
      <div className="flex justify-between">
        <div>
          <div className="w-18 h-18 bg-DEEAF6 p-3 rounded-full">
            <img
              src={imgSrc}
              alt={coverInfo.projectName}
              className="inline-block max-w-full"
            />
          </div>
          <h4 className="text-h4 font-sora font-semibold uppercase mt-4">
            {coverInfo.projectName}
          </h4>
        </div>
        <div>
          {status && (
            <Badge
              className={classNames(
                statusType == "failure" ? " text-FA5C2F" : "text-21AD8C"
              )}
            >
              {status}
            </Badge>
          )}
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Stats */}
      <div className="flex justify-between text-sm px-1 pb-4">
        <div className="flex flex-col">
          <span className="font-semibold text-black text-sm pb-2">
            Expired On
          </span>
          <span className="text-7398C0">
            {unixToDate(expiresOn, "YYYY/MM/DD HH:mm") + " UTC"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-black text-sm pb-2">
            Purchased Policy
          </span>
          <span className="text-7398C0 text-right">
            {convertFromUnits(totalAmountToCover).toString()}
          </span>
        </div>
      </div>
    </OutlinedCard>
  );
};
