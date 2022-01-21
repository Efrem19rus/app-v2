import CoverCardSkeleton from "@/components/UI/skeletons/CoverCardSkeleton";
import { classNames } from "@/utils/classnames";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const SkeletonElements = ({ type, children }) => {
  const [classes, setClasses] = useState("");
  const [typeState, setTypeState] = useState();

  useEffect(() => {
    switch (type) {
      case "text":
        setClasses("bg-728FB2 h-4");
        return;
        break;
      case "card":
        setTypeState(type);
        return;
      default:
        break;
    }
  }, [type]);

  return (
    <div className={classNames("animate-pulse rounded-md", classes)}>
      {typeState === "card" && <CoverCardSkeleton />}
      {children}
    </div>
  );
};

export default SkeletonElements;
