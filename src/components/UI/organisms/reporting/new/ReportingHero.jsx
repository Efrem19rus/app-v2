import { BreadCrumbs } from "@/components/UI/atoms/breadcrumbs";
import { Container } from "@/components/UI/atoms/container";
import { Hero } from "@/components/UI/molecules/Hero";
import { CoverProfileInfo } from "@/components/common/CoverProfileInfo";
import { getCoverImgSrc } from "@/src/helpers/cover";

export const ReportingHero = ({ coverInfo }) => {
  const imgSrc = getCoverImgSrc(coverInfo);

  return (
    <Hero>
      <Container className="px-2 py-20">
        <BreadCrumbs
          pages={[
            { name: "Home", href: "/", current: false },
            { name: coverInfo?.coverName, current: false },
            { name: "Reporting", href: "#", current: true },
          ]}
        />
        <div className="flex">
          <CoverProfileInfo
            imgSrc={imgSrc}
            links={coverInfo?.links}
            projectName={coverInfo?.coverName}
          />
        </div>
      </Container>
    </Hero>
  );
};
